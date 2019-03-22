import Project, { CallExpression } from 'ts-simple-ast'
import {
  ExtractorClass,
  ExtractorGetter,
  ExtractorResult,
  FileVariableAccessor,
  ReplaceProjectFunctionCallOptions
} from '../types'
import { AbstractExtractor } from './abstractExtractor'

export class Ast extends AbstractExtractor implements ExtractorClass {
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>,
    variableAccessor: FileVariableAccessor,
    project?: Project
  ): ExtractorResult {
    const extractorOptions = { n, index, getter, options, variableAccessor, project }
    const config = this.getOptionsFromFistArg(extractorOptions)
    // console.log({config});
    const output = `'${n.getKindName()}'`
    return this.buildExtractorResult(n, output, config && config.outputMode)
  }

  getConfig() {
    return {
      freeArgumentNumber: 1
    }
  }
}
