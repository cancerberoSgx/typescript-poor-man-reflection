import Project, { SourceFile } from 'ts-simple-ast'
import { AbstractRefactorExtractor, AbstractRefactorExtractorOptions } from './abstractRefactorExtractor'
import { inferTypesFromUsage } from './refactors'

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
  protected preformRefactor(project: Project, f: SourceFile) {
    inferTypesFromUsage(project, project.getSourceFile(f.getFilePath())!)
  }
}
