import { CallExpression, SyntaxKind } from 'ts-morph'
import { ExtractorGetter, ReplaceProjectFunctionCallOptions } from '../../types'
import { AbstractExtractor } from '../abstractExtractor'
/**
 * Returns current parent Block text (without the braces)
 */
export function ThisBlockText(t?: string) {
  return t!
}

export class ThisBlockTextClass extends AbstractExtractor {
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>
  ) {
    const block = n.getFirstAncestorByKind(SyntaxKind.Block)
    let result: string = ''
    if (block) {
      const t = block.getText().trim()
      result = `${JSON.stringify(t.substring(1, t.length - 1))}`
    }
    return options.extractorDataMode === 'asArgument'
      ? { argument: result }
      : {
          argument: getter(index),
          prependToFile: result
        }
  }
}
