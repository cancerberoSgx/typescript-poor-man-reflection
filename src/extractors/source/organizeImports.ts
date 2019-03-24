import Project, { SourceFile } from 'ts-morph'
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
  protected performRefactor(project: Project, f: SourceFile) {
    project.getSourceFile(f.getFilePath())!.organizeImports()
  }
}
