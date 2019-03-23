import Project, { SourceFile } from 'ts-simple-ast'
import { AbstractRefactorExtractor, AbstractRefactorExtractorOptions } from './abstractRefactorExtractor'
import { removeAllUnused } from 'ts-simple-ast-extra'

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
  protected preformRefactor(project: Project, f: SourceFile) {
    removeAllUnused(project, project.getSourceFile(f.getFilePath())!)
  }
}
