import Project, { CallExpression } from 'ts-simple-ast'
import { AbstractExtractor } from '../abstractExtractor'
import { ExtractorGetter, ReplaceProjectFunctionCallOptions, FileVariableAccessor } from '../../types'
import { quote } from 'misc-utils-of-mine-generic'

export class TypeText extends AbstractExtractor {
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>,
    variableAccessor: FileVariableAccessor,
    project?: Project
  ) {
    return options.extractorDataMode === 'asStringLiteral'
      ? {
          argument: quote(n.getTypeArguments()[0].getText(), "'")
        }
      : {
          argument: getter(index),
          prependToFile: quote(n.getTypeArguments()[0].getText(), "'")
        }
  }
}
