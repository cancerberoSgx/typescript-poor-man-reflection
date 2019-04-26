import { Project, SourceFile } from 'ts-morph'
import { removeAllUnused } from 'ts-simple-ast-extra'
import { AbstractRefactorExtractor, AbstractRefactorExtractorOptions } from './abstractRefactorExtractor'

/**
 * Will remove all unused variables, import names, etc, on given files. 
 * If no file is provided then it will call for the current file. 
 * Returns `undefined`.

```ts
RemoveUnused({path: 'src/** /*.ts*'})
```
 */
export const RemoveUnused = function<T = any>(config: RemoveUnusedOptions, t?: any): number {
  return t!
}

export interface RemoveUnusedOptions extends AbstractRefactorExtractorOptions {
  // TODO: what: variables, imports, parameters, type parameters, etc
}

export class RemoveUnusedClass extends AbstractRefactorExtractor {
  protected performRefactor(project: Project, f: SourceFile) {
    removeAllUnused(project, project.getSourceFile(f.getFilePath())!)
  }
}
