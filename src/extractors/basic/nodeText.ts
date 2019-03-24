import { CallExpression } from 'ts-morph'
import { getFirstTypeArgumentDefinitionBlock } from '../../astUtil'
import { ExtractorGetter, ReplaceProjectFunctionCallOptions } from '../../types'
import { AbstractExtractor } from '../abstractExtractor'

/** 
 * Returns the text of given node. It could be a valued node (in which case the node reference is passed as normal argument) or a type node (in which case needs to be passes as type argument). Example: 

 ```
 const text1 = NodeText(aNode)
 const text2 = NodeText<Interface2>()
 ```
*/
export function NodeText<T>(t?: string): string {
  return t!
}
export class NodeTextClass extends AbstractExtractor {
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>
  ) {
    var c = getFirstTypeArgumentDefinitionBlock(n)

    return options.extractorDataMode === 'asArgument'
      ? c
        ? { argument: `${JSON.stringify(c.getText())}` }
        : { argument: '' }
      : {
          argument: getter(index),
          prependToFile: c ? `${JSON.stringify(c.getText())}` : ''
        }
  }
}
