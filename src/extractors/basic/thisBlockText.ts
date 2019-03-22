import Project, { CallExpression, TypeGuards, SyntaxKind } from 'ts-simple-ast'
import { AbstractExtractor } from '../abstractExtractor'
import { ExtractorGetter, ReplaceProjectFunctionCallOptions, FileVariableAccessor } from '../../types'
import { getFirstTypeArgumentDefinitionBlock } from '../../astUtil'

export class ThisBlockText extends AbstractExtractor {
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>,
    variableAccessor: FileVariableAccessor,
    project?: Project
  ) {
    const block = n.getFirstAncestorByKind(SyntaxKind.Block)
    let result: string = ''
    if (block) {
      const t = block.getText().trim()
      result = `${JSON.stringify(t.substring(1, t.length - 1))}`
    }
    return options.extractorDataMode === 'asStringLiteral'
      ? { argument: result }
      : {
          argument: getter(index),
          prependToFile: result
        }
  }
}
