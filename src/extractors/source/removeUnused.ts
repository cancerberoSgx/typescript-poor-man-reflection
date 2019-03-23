import Project, { CallExpression, Node, SourceFile , ts} from 'ts-simple-ast'
import {
  ExtractorGetter,
  ExtractorOptions,
  ExtractorResult,
  FileVariableAccessor,
  ReplaceProjectFunctionCallOptions
} from '../../types'
import { AbstractExtractor } from '../abstractExtractor'
import { unique } from 'misc-utils-of-mine-generic'
import { dirname, resolve } from 'path'
import { unquote } from '../../util'
import { ls } from 'shelljs'
import Minimatch from 'minimatch'
import { removeAllUnused } from './codeFixes';

/**
 * Will call organize imports on given files. 
 * If no file is provided then it will call for the current file. 
 * Returns : nothing.
```ts
const processedCount = RemoveUnused({path: 'src/** /*.ts*'})
```
 */
export const RemoveUnused = function<T = any>(config: RemoveUnusedOptions, t?: any): number {
  return t!
}

export interface RemoveUnusedOptions extends ExtractorOptions {
  // TODO: what: variables, imports, parameters, type parameters, etc
  /**
   * Files on which to perform the action. If undefined, it will be applied on current file.
   */
  path?: string

}

export class RemoveUnusedClass extends AbstractExtractor {
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>,
    variableAccessor: FileVariableAccessor
  ): ExtractorResult {
    const config = this.getOptionsFromFistArg<RemoveUnusedOptions>(n) || {}
    return this.buildExtractorResult(n, `undefined`, getter, index, options, config)
  }
    // we need to execute after the job is done (afterWriteExtractorData not on extract) since we will make the nodes invalid
    afterWriteExtractorData(n: CallExpression, index: number, options: Required<ReplaceProjectFunctionCallOptions>) {
      const config = this.getOptionsFromFistArg<RemoveUnusedOptions>(n) || {}
      if (options.project) {
        let files: SourceFile[] = []
        if (config.path) {
          files = options.project.getSourceFiles().filter(f => Minimatch(f.getFilePath(), config.path!))
        } else {
          files = [options.project.getSourceFile(n.getSourceFile().getFilePath())!]
        }
        files.forEach(f => {
        removeAllUnused(options.project, f)
        })
      }
    }

}
