import { Stats } from 'fs'
import { CallExpression, Node } from 'ts-morph'
import { ExtractorGetter, ExtractorOptions, ExtractorResult, ReplaceProjectFunctionCallOptions, FileVariableAccessor } from '../../types'
import { AbstractExtractor, BuildExtractorResultOutput, NodeWithInfo } from '../abstractExtractor'
import { unquote } from '../../util';
import { quote } from 'misc-utils-of-mine-generic';

/**
 * get/set names to nodes/types. Query nodes, like in CSS

```ts
interface I {}
Attribute<I>({name: 'id', value: 'org.foo.Super'})
Attribute({target: anImpl1, name: 'class', value: 'logger'})
Attribute({target: aNode, name: 'otherNode', value: aFunctionDeclaration})
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
  value?: string|Node

  action?: 'set'|'get'|'remove'|'list'
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
    const config = this.getOptionsFromFistArg(n) as AttributeOptions||{}
    let output: string |NodeWithInfo | undefined
    if(config.value||config.action==='set') {
        output = typeof config.value === 'undefined' ? 'undefined' : 
        {
          info: config.name, 
          node: config.value
        } as NodeWithInfo

        const argument = variableAccessor({name: config.name}, index, typeof output==='string' ? output : output.node. getText())
        return {
          argument: argument||'""', prependToFile: '""'
        }
    }
    else if(config.action==='remove'){
      throw 'not impl'
    }
    else if(config.action==='list'){
      throw 'not impl'
    }
    else {
      return {
        argument: variableAccessor({name: config.name, functionPredicate: `v=>v.extractorName==='Attribute'&&v.name===${quote(config.name)}`}, index)||'""',
        prependToFile: '""'
      }
    }
    // return this.buildExtractorResult(n, output!, getter, index, options, config || {})
  }

  protected parseOptionValue(name: string, value: Node | undefined): any {
    if (value && ['name', 'action'].includes(name)) {
      return unquote(value.getText())
    }  else {
      return value
    }
  }
  
}
