import { unique } from 'misc-utils-of-mine-generic';
import { CallExpression } from 'ts-simple-ast';
import { ExtractorGetter, ExtractorOptions, ExtractorResult, ReplaceProjectFunctionCallOptions } from '../../types';
import { AbstractExtractor } from '../abstractExtractor';

/**
 * Return the list of this project file names. Usage: 
 * 
```ts
const thisProjectFiles = ProjectFiles()
```
 */
export const ProjectFiles = function<T = any>(config: ProjectFilesOptions, t?: any): string[] {
  return t!
}

export interface ProjectFilesOptions extends ExtractorOptions {}

export class ProjectFilesClass extends AbstractExtractor {
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>,
  ): ExtractorResult {
    const config = this.getOptionsFromFistArg<ProjectFilesOptions>(n)
    let output = `[]`
    if (options.project) {
      const base = options.project.createSourceFile(unique('base') + '.ts')
      output = JSON.stringify(
        options.project
          .getSourceFiles()
          .filter(f => f !== base)
          .map(f => {
            const path = base.getRelativePathTo(f)
            return path
          })
      )
      base.deleteImmediatelySync()
    }
    return this.buildExtractorResult(n, output, getter, index, options, config)
  }
}
