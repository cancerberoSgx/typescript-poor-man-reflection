import { Stats } from 'fs'
import { CallExpression, Node } from 'ts-morph'
import {
  ExtractorGetter,
  ExtractorOptions,
  ExtractorResult,
  ReplaceProjectFunctionCallOptions,
  FileVariableAccessor
} from '../../types'
import { AbstractExtractor, BuildExtractorResultOutput, NodeWithInfo } from '../abstractExtractor'
import { unquote, Map } from '../../util'
import { quote } from 'misc-utils-of-mine-generic'
import { buildAstPath } from 'ts-simple-ast-extra'
import { JSONObject } from 'misc-utils-of-mine-typescript'

/**
 * get/set names to nodes/types. Query nodes, like in CSS
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
export function Attribute<T = any>(config: AttributeOptions, t?: any): (string | Stats)[] {
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
}

export class AttributeClass extends AbstractExtractor {
  protected freeArgumentNumber = 1
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>,
    variableAccessor: FileVariableAccessor
  ): ExtractorResult {
    const config = (this.getOptionsFromFistArg(n) as AttributeOptions) || {}
    let output: string | NodeWithInfo | undefined
    if (config.value || config.action === 'set') {
      // SETTER
      const targetPath = this.resolveTargetAstPath(n, index, config, options, variableAccessor)
      output =
        typeof config.value === 'undefined'
          ? 'undefined'
          : ({
              info: JSON.stringify({ name: config.name, ...(targetPath ? { targetPath } : {}) }),
              node: config.value
            } as NodeWithInfo)
      const argument = variableAccessor(
        { name: config.name },
        index,
        typeof output === 'string' ? output : output.node.getText()
      )
      return {
        argument: argument || '""',
        prependToFile: '""'
      }
    } else if (config.action === 'remove') {
      throw 'not impl'
    } else if (config.action === 'list') {
      throw 'not impl'
    } else {
      // GETTER HEADS UP: we need tp pass a function predicate as a string in order to find our attribute
      // since it was set by another call. TODO: provide better API in the core
      return {
        argument:
          variableAccessor(
            {
              name: config.name,
              functionPredicate: `v=>v.extractorName==='Attribute'&&v.name===${quote(config.name)}`
            },
            index
          ) || '""',
        prependToFile: '""'
      }
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
    variableAccessor: FileVariableAccessor
  ) {
    const target = this.getTarget(n, config)
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
