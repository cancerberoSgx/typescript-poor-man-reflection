import Project, { SourceFile } from 'ts-morph'
import { inferTypesFromUsage } from 'ts-simple-ast-extra'
import { AbstractRefactorExtractor, AbstractRefactorExtractorOptions } from './abstractRefactorExtractor'

/**
 * Will add Types to variables, parameters, etc inferring from usage on given files.
 * If no file is provided then it will call for the current file. 
 * Returns `undefined`.

```ts
InferTypes({path: 'src/** /*.ts*'})
```
 */
interface InferTypesOptions extends AbstractRefactorExtractorOptions {}

export const InferTypes = function<T = any>(config: InferTypesOptions, t?: any) {
  return t!
}

export class InferTypesClass extends AbstractRefactorExtractor {
  protected performRefactor(project: Project, f: SourceFile) {
    inferTypesFromUsage(project, project.getSourceFile(f.getFilePath())!)
  }
}
