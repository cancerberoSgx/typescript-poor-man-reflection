import { cat } from 'shelljs'
import { CallExpression, Node } from 'ts-morph'
import { ExtractorGetter, ExtractorOptions, ExtractorResult, ReplaceProjectFunctionCallOptions } from '../..'
import { unquote, quote } from 'misc-utils-of-mine-generic'
import { AbstractExtractor } from '../abstractExtractor'
import { asString } from '../../util'

/**
 * Returns given file contents as string. Important: you won't be able to call cat() on a loop since this runs
 * at compile time. If you need to read multiple files, use `ReadFiles()` instead. Usage: 
 *
```ts
const content = Cat({path: './package.json'})
```
 */
export const Cat = function<T = any>(config: LsOptions, t?: any): string {
  return t!
}

export interface LsOptions extends ExtractorOptions {
  /**
   * Path to read. Could be a glob.
   */
  path: string
}

export class CatClass extends AbstractExtractor {
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>
  ): ExtractorResult {
    const config = this.getOptionsFromFistArg<LsOptions>(n)
    let output = `''`
    if (config && config.path) {
      output = asString(cat(config.path).toString())
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
  protected freeArgumentNumber = 1
}
