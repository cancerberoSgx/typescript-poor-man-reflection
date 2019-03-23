import Minimatch from 'minimatch'
import Project, { CallExpression, Node, SourceFile } from 'ts-simple-ast'
import { extractCallExpressions } from '../../astUtil'
import { ExtractorGetter, ExtractorOptions, ExtractorResult, ReplaceProjectFunctionCallOptions } from '../../types'
import { unquote } from '../../util'
import { AbstractExtractor } from '../abstractExtractor'

export interface AbstractRefactorExtractorOptions extends ExtractorOptions {
  /**
   * Files on which to perform the action. If undefined, it will be applied on current file.
   */
  path?: string
}

export abstract class AbstractRefactorExtractor extends AbstractExtractor {
  protected freeArgumentNumber = 1

  protected abstract performRefactor(project: Project, f: SourceFile): void

  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>
  ): ExtractorResult {
    const config = this.getOptionsFromFistArg<AbstractRefactorExtractorOptions>(n) || {}
    return this.buildExtractorResult(n, `undefined`, getter, index, options, config)
  }

  afterExtract(filePath: string, extractorName: string, options: Required<ReplaceProjectFunctionCallOptions>) {
    // HEADS UP: since these operations might be destructive (forgotten Nodes) we need to re-create the sourceFile and the CallExpressions here and in any subclass implementation
    const sourceFile = options.project && options.project.getSourceFile(filePath)
    if (sourceFile) {
      const callExpressions = extractCallExpressions(sourceFile, options.moduleSpecifier, [extractorName])
      callExpressions.forEach(n => {
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
      })
    }
    super.afterExtract(filePath, extractorName, options)
  }

  protected parseOptionValue(name: string, value: Node | undefined): any {
    if (value && ['path'].includes(name)) {
      return unquote(value.getText())
    } else {
      return super.parseOptionValue(name, value)
    }
  }
}
