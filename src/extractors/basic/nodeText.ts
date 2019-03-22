import Project, { CallExpression } from 'ts-simple-ast'
import { getFirstTypeArgumentDefinitionBlock } from '../../astUtil'
import { ExtractorGetter, FileVariableAccessor, ReplaceProjectFunctionCallOptions } from '../../types'
import { AbstractExtractor } from '../abstractExtractor'

export class NodeText extends AbstractExtractor {
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>,
    variableAccessor: FileVariableAccessor,
    project?: Project
  ) {
    var c = getFirstTypeArgumentDefinitionBlock(n)

    return options.extractorDataMode === 'asStringLiteral'
      ? c
        ? { argument: `${JSON.stringify(c.getText())}` }
        : { argument: '' }
      : {
          argument: getter(index),
          prependToFile: c ? `${JSON.stringify(c.getText())}` : ''
        }
  }
}
