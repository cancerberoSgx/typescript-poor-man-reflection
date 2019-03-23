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
import { AbstractRefactorExtractor, AbstractRefactorExtractorOptions } from './abstractRefactorExtractor'

/**
 * Will call organize imports on given files. 
 * If no file is provided then it will call for the current file. 
 * Returns `undefined`.
```ts
OrganizeImports({path: 'src/** /*.ts*'})
```
 */
export const OrganizeImports = function<T = any>(config: OrganizeImportsOptions, t?: any): number {
  return t!
}

export interface OrganizeImportsOptions extends AbstractRefactorExtractorOptions {
  //TODO: formatSettings?: FormatCodeSettings | undefined, userPreferences?: UserPreferences
}

export class OrganizeImportsClass extends AbstractRefactorExtractor {
  protected preformRefactor(project: Project, f: SourceFile) {
    project.getSourceFile(f.getFilePath())!.organizeImports()
  }
}
