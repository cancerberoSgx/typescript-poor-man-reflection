import Project, { CallExpression } from 'ts-simple-ast'
import { AbstractExtractor } from '../abstractExtractor'
import { ExtractorGetter, ReplaceProjectFunctionCallOptions, FileVariableAccessor } from '../../types'
import { quote } from 'misc-utils-of-mine-generic'

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
    options: Required<ReplaceProjectFunctionCallOptions>,
    variableAccessor: FileVariableAccessor
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
