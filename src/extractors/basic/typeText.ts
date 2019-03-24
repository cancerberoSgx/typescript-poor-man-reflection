import { quote } from 'misc-utils-of-mine-generic'
import { CallExpression } from 'ts-morph'
import { ExtractorGetter, ReplaceProjectFunctionCallOptions } from '../../types'
import { AbstractExtractor } from '../abstractExtractor'

/**
 * Returns the text of given type. Example: `const text = TypeText<string|boolean>()`
 */
export function TypeText<T>(t?: string): string {
  return t!
}

export class TypeTextClass extends AbstractExtractor {
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>
  ) {
    return options.extractorDataMode === 'asArgument'
      ? {
          argument: quote(n.getTypeArguments()[0].getText(), "'")
        }
      : {
          argument: getter(index),
          prependToFile: quote(n.getTypeArguments()[0].getText(), "'")
        }
  }
}
