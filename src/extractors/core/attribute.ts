import { Stats } from 'fs'
import { CallExpression, Node } from 'ts-morph'
import { ExtractorGetter, ExtractorOptions, ExtractorResult, ReplaceProjectFunctionCallOptions } from '../../types'
import { AbstractExtractor, BuildExtractorResultOutput } from '../abstractExtractor'
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
export const Attribute = function<T = any>(config: AttributeOptions, t?: any): (string | Stats)[] {
  return t && t.node
  // return t!
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
    options: Required<ReplaceProjectFunctionCallOptions>
  ): ExtractorResult {
    const config = this.getOptionsFromFistArg(n) as AttributeOptions||{}
    let output: BuildExtractorResultOutput | undefined
    if(config.value||config.action==='set') {
        output = typeof config.value === 'undefined' ? 'undefined' : 
        // typeof config.value === 'string' ? 
        // quote(`{ name: ${quote(config.name)}, value: ${quote(config.value as string)} }`) : 
        {
          info: config.name, 
          node: config.value
        } as BuildExtractorResultOutput
    }
    else if(config.action==='remove'){
      throw 'not impl'
    }
    else if(config.action==='list'){
      throw 'not impl'
    }
    else {
      // get
      output=getter(index)
    }
    // console.log(output);
    
    return this.buildExtractorResult(n, output!, getter, index, options, config || {})
  }

  protected parseOptionValue(name: string, value: Node | undefined): any {
    if (value && ['name', 'action'].includes(name)) {
      return unquote(value.getText())
    }  else {
      return value
    }
  }
  
}
