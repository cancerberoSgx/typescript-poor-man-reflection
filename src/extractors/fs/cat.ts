import { quote } from 'misc-utils-of-mine-generic';
import { cat } from 'shelljs';
import Project, { CallExpression, Node } from 'ts-simple-ast';
import { ExtractorGetter, ExtractorOptions, ExtractorResult, FileVariableAccessor, ReplaceProjectFunctionCallOptions } from '../../types';
import { unquote } from '../../util';
import { AbstractExtractor } from '../abstractExtractor';

/**
 * Usage: 
 * 
```ts
const content = Cat({path: './package.json'})
```
 */
export const Cat = function<T = any>(config: LsOptions, t?: any): string {
  return t!
}

export interface LsOptions extends ExtractorOptions {
  /** path to read */
  path: string
}

export class CatClass extends AbstractExtractor {
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>,
    variableAccessor: FileVariableAccessor,
    project?: Project
  ): ExtractorResult {
    const config = this.getOptionsFromFistArg<LsOptions>(n)
    let output = `''`
    if (config && config.path) {
      output = quote(cat(config.path).toString())
    }
    return this.buildExtractorResult(n, output, getter, index, options, config)
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
