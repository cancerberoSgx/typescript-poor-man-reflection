import { CallExpression, TypeGuards } from 'ts-morph'
import { getFirstTypeArgumentDefinitionBlock } from '../../astUtil'
import { ExtractorGetter, ReplaceProjectFunctionCallOptions } from '../../types'
import { AbstractExtractor } from '../abstractExtractor'

/** 
 * Returns the text of given node's body. Example: 
```ts 
const text1 = BodyText<>(aFunction)
const text2 = BodyText<typeof someFunction>()
```
*/
export function BodyText<T>(t?: string): string {
  return t!
}

export class BodyTextClass extends AbstractExtractor {
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>
  ) {
    const f = getFirstTypeArgumentDefinitionBlock(n)!
    if (!f) {
      return {
        argument: `${JSON.stringify(
          'Error: cannot find a block for given argument definition ' +
            (n.getTypeArguments()[0] ? n.getTypeArguments()[0]!.getText() : '')
        )}`
      }
    }
    return options.extractorDataMode === 'asArgument'
      ? TypeGuards.isBodyableNode(f)
        ? { argument: `${JSON.stringify(f.getBodyText())}` }
        : { argument: '' }
      : {
          argument: getter(index),
          prependToFile: TypeGuards.isBodyableNode(f) ? `${JSON.stringify(f.getBodyText())}` : ''
        }
  }
}
