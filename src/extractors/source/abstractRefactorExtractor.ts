import Minimatch from 'minimatch'
import Project, { CallExpression, Node, SourceFile } from 'ts-simple-ast'
import {
  ExtractorGetter,
  ExtractorOptions,
  ExtractorResult,
  FileVariableAccessor,
  ReplaceProjectFunctionCallOptions
} from '../../types'
import { unquote } from '../../util'
import { AbstractExtractor } from '../abstractExtractor'

export interface AbstractRefactorExtractorOptions extends ExtractorOptions {
  /**
   * Files on which to perform the action. If undefined, it will be applied on current file.
   */
  path?: string
}

export abstract class AbstractRefactorExtractor extends AbstractExtractor {
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>,
  ): ExtractorResult {
    const config = this.getOptionsFromFistArg<AbstractRefactorExtractorOptions>(n) || {}
    return this.buildExtractorResult(n, `undefined`, getter, index, options, config)
  }

  // we need to execute after the job is done (afterWriteExtractorData not on extract) since we will make the nodes invalid
  afterWriteExtractorData(n: CallExpression, index: number, options: Required<ReplaceProjectFunctionCallOptions>) {
    const config = this.getOptionsFromFistArg<AbstractRefactorExtractorOptions>(n) || {}
    if (options.project) {
      let files: SourceFile[] = []
      if (config.path) {
        files = options.project.getSourceFiles().filter(f => Minimatch(f.getFilePath(), config.path!))
      } else {
        files = [options.project.getSourceFile(n.getSourceFile().getFilePath())!]
      }
      files.forEach(f => {
        this.performRefactor(options.project, options.project.getSourceFile(f.getFilePath())!)
      })
    }
    super.afterWriteExtractorData(n, index, options)
  }

  protected parseOptionValue(name: string, value: Node | undefined): any {
    if (value && ['path'].includes(name)) {
      return unquote(value.getText())
    } else {
      return super.parseOptionValue(name, value)
    }
  }

  protected freeArgumentNumber = 1
  protected abstract performRefactor(project: Project, f: SourceFile): void
}
