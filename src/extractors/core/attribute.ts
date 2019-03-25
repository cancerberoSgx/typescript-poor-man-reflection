import { Stats } from 'fs'
import { quote } from 'misc-utils-of-mine-generic'
import { CallExpression, Node } from 'ts-morph'
import { AstPath, buildAstPath, selectNode } from 'ts-simple-ast-extra'
import {
  ExtractorGetter,
  ExtractorOptions,
  ExtractorResult,
  FileVariableAccessor,
  ReplaceProjectFunctionCallOptions
} from '../../types'
import { unquote } from '../../util'
import { AbstractExtractor, NodeWithInfo } from '../abstractExtractor'

/**
 * Node/Types attributes like DOM's. Attributes can or cannot be associated to a node, and if they are not they just act as normal variables. 
 * 
 * For attributes bound to nodes&types, the setter call must occur BEFORE the GETTER call (while the source file is being processed.). TODO: can we solve this using afterExtract()?
 *
 * ```ts
 * // setting a type or node's attribute value
 * Attribute<SomeInterface>({name: 'id', value: 'org.foo.Super'})
 * Attribute({target: anImpl1, name: 'class', value: 'logger'})
 * Attribute({target: aNode, name: 'otherNode', value: aFunctionDeclaration})
 *
 * // getting (previously set) attribute values
 * const v = Attribute({name: 'id'})
 * console.log(thisFileVar1==='org.foo.Super')
 *
 * // if target is not passed at all the the variable won't be bound to any node so it can be retrieved without passing a target dom reference (like normal variables)
 * Attribute({name: 'thisFileVar1', value: (n:number)=>Math.PI*n})
 * const thisFileVar1 = Attribute({name: 'thisFileVar1'})
 * console.log(thisFileVar1(8))
```
 */
export function Attribute<T = any>(config: AttributeOptions, t?: any): T {
  return t && t.value
}

export interface AttributeOptions<T = any, F = any, E = any> extends ExtractorOptions {
  name: string
  /**
   * If undefined then action is 'set'
   */
  value?: string | Node
  /**
   * which action to perform - now only supported set and get
   */
  action?: 'set' | 'get' | 'remove' | 'list'
  /**
   * if [[target]] is not defined or this is true then the target node won't be bound to the attribute, this
   * means it's a normal variable and you don't require tp pass the target node in order to get its value.
   * Default: false
   */
  dontBindTargetNode?: boolean

  /**
   * If true, get getting a Node's attribute value, it will validate that the node structure/ancestors didn't change by other extractors, and in that case it will return undefined.
   *
   * This ensure attribute definitions that the target node is valid, because if it's radically changed accessing the Node later will give error. Not so useful now,but think on attributes visible between  different files or event different projects.
   */
  validateTargetNodeNotChange?: boolean
}

interface CompileTimeData {
  targetPath?: AstPath
  target?: Node
}

export class AttributeClass extends AbstractExtractor {
  protected freeArgumentNumber = 1
  public name = 'Attribute'
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions> & { filePath: string },
    variableAccessor: FileVariableAccessor
  ): ExtractorResult {
    const config = (this.getOptionsFromFistArg(n) as AttributeOptions) || {}
    let output: string | NodeWithInfo | undefined
    if (config.value || config.action === 'set') {
      return this.resolveSetter(n, index, config, options, variableAccessor, output)
    } else if (config.action === 'remove') {
      throw 'not impl'
    } else if (config.action === 'list') {
      throw 'not impl'
    } else {
      return this.resolveGetter(variableAccessor, config, index, options)
    }
  }

  private resolveGetter(
    variableAccessor: FileVariableAccessor,
    config: AttributeOptions<any, any, any>,
    index: number,
    options: Required<ReplaceProjectFunctionCallOptions> & { filePath: string }
  ): ExtractorResult {
    // obtain current compile time variables processed in the current file (still being processed)
    const currentFileVariables = variableAccessor.compileTime<CompileTimeData>()

    //TODO:cannot we use currentCompileTimeVariables to get the value instead of printing a ugly  function string ?

    // HEADS UP: notice that in order to find the associated node a setter call needed to occurs first. perhaps we can solve this limitation handling getters on afterExtract()

    const foundVariable = Object.values(currentFileVariables || {}).find(
      v => v.name === config.name && v.index === index && v.extractorName === this.name
    )
    if (foundVariable) {
      if (config.validateTargetNodeNotChange) {
        const file = options.project.getSourceFile(options.filePath)
        if (!file) {
          this.error(`foundVariable is true and cannot getSourceFile of ${options.filePath}`)
        } else if (!foundVariable.compileTimeData.target) {
          this.error(
            `foundVariable is true but foundVariable.compileTimeData.target is undefined  variable: ${
              foundVariable.name
            } file: ${options.filePath}`
          )
        } else if (!foundVariable.compileTimeData.targetPath) {
          this.error(
            `foundVariable is true but foundVariable.compileTimeData.targetPat was not delivered by setter, variable: ${
              foundVariable.name
            } file: ${options.filePath}`
          )
        } else {
          const node = selectNode(foundVariable.compileTimeData.targetPath, file, { verifyNodeKind: true })
          if (!node) {
            this.error(
              `foundVariable is true but node cannot be selected using AST path provided by setter: ${
                foundVariable.compileTimeData.targetPath
              } variable: ${foundVariable.name} file: ${options.filePath}`
            )
          }
        }
      }
    } else {
      // TODO:handle Attribute getter of a variable that nobody set yet ?
    }
    // HEADS UP: we need tp pass a function predicate as a string in order to find our attribute
    // since it was set by another call. TODO: provide better API in the core
    return {
      argument:
        variableAccessor.runtime(
          {
            name: config.name,
            functionPredicate: `v=>v.extractorName==='${this.name}'&&v.name===${quote(config.name)}`
          },
          index
        ) || '""',
      prependToFile: '""'
    }
  }

  private resolveSetter(
    n: CallExpression,
    index: number,
    config: AttributeOptions<any, any, any>,
    options: Required<ReplaceProjectFunctionCallOptions>,
    variableAccessor: FileVariableAccessor,
    output: string | NodeWithInfo | undefined
  ) {
    const target = this.getTarget(n, config)
    const targetPath = this.resolveTargetAstPath(n, index, config, options, variableAccessor, target)
    output =
      typeof config.value === 'undefined'
        ? 'undefined'
        : ({
            info: JSON.stringify({ name: config.name, ...(targetPath ? { targetPath } : {}) }),
            node: config.value
          } as NodeWithInfo)
    const preparedValue = typeof output === 'string' ? output : output.node.getText()
    const argument = variableAccessor.runtime({ name: config.name }, index, preparedValue)
    variableAccessor.compileTime<CompileTimeData>({
      name: config.name,
      index,
      value: preparedValue,
      extractorName: this.name,
      compileTimeData: { targetPath, target }
    })

    return {
      argument: argument || '""',
      prependToFile: '""'
    }
  }

  /**
   * @param n returns undefined in case the target is not found or should not be bind
   */
  protected resolveTargetAstPath(
    n: CallExpression,
    index: number,
    config: AttributeOptions<any, any, any>,
    options: Required<ReplaceProjectFunctionCallOptions>,
    variableAccessor: FileVariableAccessor,
    target?: Node
  ) {
    if (!target && (n.getTypeArguments().length || config.target) && !config.dontBindTargetNode) {
      this.error(`Attribute target was specified and !dontBindTargetNode but the target could not be found. Aborting`)
    }
    if (target && !config.dontBindTargetNode) {
      return buildAstPath(target, { includeNodeKind: true })
    }
  }

  protected parseOptionValue(name: string, value: Node | undefined): any {
    if (value && ['name', 'action'].includes(name)) {
      return unquote(value.getText())
    } else if (value && ['dontBindTargetNode'].includes(name)) {
      return value.getText() === 'true' ? true : false
    } else {
      return value
    }
  }
}
