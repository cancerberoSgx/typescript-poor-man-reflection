import Project, { CallExpression, Node, SourceFile } from 'ts-simple-ast'
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

/**
 * Will call organize imports on given files. 
 * If no file is provided then it will call for the current file. 
 * Returns : nothing.
```ts
const processedCount = OrganizeImports({path: 'src/** /*.ts*'})
```
 */
export const OrganizeImports = function<T = any>(config: OrganizeImportsOptions, t?: any): number {
  return t!
}

export interface OrganizeImportsOptions extends ExtractorOptions {
  /**
   * Path to files in which to call organize imports. Can be a glob.
   */
  path?: string
  //TODO: formatSettings?: FormatCodeSettings | undefined, userPreferences?: UserPreferences
}

export class OrganizeImportsClass extends AbstractExtractor {
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>,
    variableAccessor: FileVariableAccessor
  ): ExtractorResult {
    const config = this.getOptionsFromFistArg<OrganizeImportsOptions>(n) || {}
    return this.buildExtractorResult(n, `undefined`, getter, index, options, config)
  }

  // we need to execute after the job is done (afterWriteExtractorData not on extract) since we will make the nodes invalid
  afterWriteExtractorData(n: CallExpression, index: number, options: Required<ReplaceProjectFunctionCallOptions>) {
    const config = this.getOptionsFromFistArg<OrganizeImportsOptions>(n) || {}
    if (options.project) {
      let files: SourceFile[] = []
      if (config.path) {
        files = options.project.getSourceFiles().filter(f => Minimatch(f.getFilePath(), config.path!))
      } else {
        files = [n.getSourceFile()]
      }
      files.forEach(f => {
        f.organizeImports() //TODO formatSettings, userPreferences
      })
    }
  }

  protected parseOptionValue(name: string, value: Node | undefined): any {
    if (value && ['path'].includes(name)) {
      return unquote(value.getText())
    } else {
      return super.parseOptionValue(name, value)
    }
  }

  getConfig() {
    return {
      freeArgumentNumber: 1,
      unusedArgumentDefaultValue: '{}'
    }
  }
}
