import { unique, quote } from 'misc-utils-of-mine-generic'
import { CallExpression, Node, SyntaxKind, TypeGuards } from 'ts-morph'
import { extractCallExpressions, getDefinitionsOf } from '../astUtil'
import {
  ExtractorClass,
  ExtractorGetter,
  ExtractorOptions,
  ExtractorResult,
  FileVariableAccessor,
  ReplaceProjectFunctionCallOptions
} from '../types'
import { Map, unquote, isNode } from '../util'

export interface NodeWithInfo {
  node:Node
  info: string
}
export type BuildExtractorResultOutput = string | NodeWithInfo | Node

export abstract class AbstractExtractor implements ExtractorClass {
  protected defaultExtractorOptions: ExtractorOptions = {}
  protected freeArgumentNumber = 0
  getConfig() {
    return {
      freeArgumentNumber: this.freeArgumentNumber,
      unusedArgumentDefaultValue: '{}'
    }
  }

  abstract extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>,
    variableAccessor: FileVariableAccessor
  ): ExtractorResult

  /**
   * Get options from first argument or undefined.
   *
   * TODO: support references
   *
   * TODO: dont eval
   */
  protected getOptionsFromFistArg<T extends ExtractorOptions = ExtractorOptions>(n: CallExpression): T | undefined {
    if (n.getArguments().length) {
      const o = n.getArguments()[0]
      if (TypeGuards.isObjectLiteralExpression(o)) {
        const cc: Map<any> = {}
        o.getProperties().forEach(p => {
          if (TypeGuards.isPropertyAssignment(p)) {
            cc[p.getName()] = this.parseOptionValue(p.getName(), p.getInitializer())
          }
        })
        return cc as any
      }
    }
  }

  /**
   * since options need to be parsed from a literal object Node, subclasses might need to override this method
   * to parse their own options
   */
  protected parseOptionValue(name: string, value: Node | undefined): any {
    if (value && ['outputMode', 'outputVariableName'].includes(name)) {
      return unquote(value.getText())
    } else if (value && ['removeMe'].includes(name)) {
      return value.getText() === 'true' ? true : false
    } else {
      return value
    }
  }

  /**
   * @param output if string, then it will be stored and returned in argument as a string literal. If node, it
   * will be stored as string literal (not escaped) and it will be returned (in argument) as the Node literal
   * no string. In later case, it needs to be an expression(cannot be a statement) but in general, it will be
   * since they are using it in an argument value.
   */
  protected buildExtractorResult(
    n: CallExpression,
    output: BuildExtractorResultOutput ,
    getter: ExtractorGetter,
    index: number,
    extractOptions: Required<ReplaceProjectFunctionCallOptions>,
    extractorOptions?: ExtractorOptions
  ): ExtractorResult {
    const stringOutput = typeof output === 'string' ? output : 
      isNode(output) ? quote(output.getText()) : 
    // quote(`{ name: ${quote(output.info)}, node: ${quote(output.node.getText())} }`)
    // quote(`{ name: ${quote(output.info)}, node: ${quote(output.node.getText())} }`)
// JSON.stringify({name: output.info, node: output.node.getText()})
`{name: ${quote(output.info)}, node: ${output.node.getText()}}`

    if (extractorOptions && extractorOptions.outputMode === 'assignToVariable' && extractorOptions.outputVariableName) {
      const block = n.getFirstAncestor(TypeGuards.isBlock)
      if (block) {
        const varDecl = block.getVariableDeclaration(extractorOptions.outputVariableName)
        if (varDecl) {
          varDecl.setInitializer(stringOutput) // TODO: we could store previous initializer value as a variable so we can clean it
        } else {
          const statement = n.getFirstAncestor(a => TypeGuards.isBlock(a.getParent()))
          if (statement) {
            block.insertVariableStatement(statement.getChildIndex() + 1, {
              declarations: [{ name: unique('ast_output_'), initializer: stringOutput }]
            })
          }
        }
      }
    }
    if (extractOptions.extractorDataMode === 'asArgument') {
      const r = {
        argument: isNode(output) ? unquote(stringOutput) :  stringOutput 
      }
      return r
    } else {
      let argument = isNode(output) ? unquote(getter(index)) : typeof output==='string' ? stringOutput : getter(index)
      return {
        argument,
        // TODO: we could store the variable in an object with the information about if it was quoted so we
        // can unquote here... instead of just a string
        prependToFile: stringOutput
      }
    }
  }

  protected getTarget(n: CallExpression, config: ExtractorOptions) {
    let target: Node | undefined
    if (config && config.target) {
      if (TypeGuards.isIdentifier(config.target)) {
        const d = getDefinitionsOf(config.target)
        target = d.length ? d[0] : undefined
      } else {
        target = config.target
      }
    }
    if (!target && n.getTypeArguments().length) {
      const id = n.getTypeArguments()[0].getFirstChildByKind(SyntaxKind.Identifier)
      if (id) {
        const d = getDefinitionsOf(id)
        target = d.length ? d[0] : undefined
      }
    }
    return target
  }

  afterExtract(filePath: string, extractorName: string, options: Required<ReplaceProjectFunctionCallOptions>) {
    // HEADS UP: since these operations might be destructive (forgotten Nodes) we need to re-create the
    // sourceFile and the CallExpressions here and in any subclass implementation
    const sourceFile = options.project && options.project.getSourceFile(filePath)
    if (sourceFile) {
      const callExpressions = extractCallExpressions(sourceFile, options.moduleSpecifier, [extractorName])
      callExpressions.forEach(c => {
        const config = this.getOptionsFromFistArg(c) || {}
        if (config.removeMe) {
          const parent = c.getParent()
          if (TypeGuards.isStatement(parent)) {
            parent.remove()
          }
        }
      })
    }
  }

  beforeExtract(filePath: string, extractorName: string, options: Required<ReplaceProjectFunctionCallOptions>) {
    //   // HEADS UP: since these operations might be destructive (forgotten Nodes) we need to re-create the
    //   sourceFile and the CallExpressions here and in any subclass implementation const sourceFile =
    //   options.project && options.project.getSourceFile(filePath) if(sourceFile){const callExpressions =
    //   extractCallExpressions(sourceFile, options.moduleSpecifier, [extractorName])
    //   callExpressions.forEach(c => {const config = this.getOptionsFromFistArg(c) || {} if (config.removeMe)
    //   {const parent = c.getParent() if (TypeGuards.isStatement(parent)) {parent.remove()
    //         }
    //       }
    //    })
    //   }
  }
}
