import Project, { CallExpression } from 'ts-simple-ast'
import {
  ExtractorClass,
  ExtractorGetter,
  ExtractorResult,
  FileVariableAccessor,
  ReplaceProjectFunctionCallOptions,
  ExtractOptions,
  ExtractorOptions
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
    const config = this.getOptionsFromFistArg(n)
    const output = this.buildAst(n, config)
    return this.buildExtractorResult(n, output, config)
  }

  protected buildAst(n: CallExpression, config: ExtractorOptions | undefined): any {
    return `'${n.getKindName()}'`
  }

  getConfig() {
    return {
      freeArgumentNumber: 1
    }
  }
}
