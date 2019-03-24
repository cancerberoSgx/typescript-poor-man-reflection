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
import { unquote } from '../../util'
import { quote } from 'misc-utils-of-mine-generic'

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
   * if undefined means it's setter
   */
  value?: string | Node

  action?: 'set' | 'get' | 'remove' | 'list'
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
      output =
        typeof config.value === 'undefined'
          ? 'undefined'
          : ({
              info: config.name,
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
      // GETTER
      // HEADS UP: we need tp pass a function predicate as a string in order to find our attribute since it was set by another call. TODO: provide better API in the core
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

  protected parseOptionValue(name: string, value: Node | undefined): any {
    if (value && ['name', 'action'].includes(name)) {
      return unquote(value.getText())
    } else {
      return value
    }
  }
}
