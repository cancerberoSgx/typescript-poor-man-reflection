import Project, { CallExpression, TypeGuards } from 'ts-simple-ast'
import { AbstractExtractor } from '../abstractExtractor'
import { ExtractorGetter, ReplaceProjectFunctionCallOptions, FileVariableAccessor } from '../../types'
import { getFirstTypeArgumentDefinitionBlock } from '../../astUtil'

export class BodyText extends AbstractExtractor {
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>,
    variableAccessor: FileVariableAccessor,
    project?: Project
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
