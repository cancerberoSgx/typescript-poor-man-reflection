import { Stats } from 'fs'
import { quote } from 'misc-utils-of-mine-generic'
import { ls } from 'shelljs'
import { CallExpression, Node } from 'ts-simple-ast'
import { ExtractorGetter, ExtractorOptions, ExtractorResult, ReplaceProjectFunctionCallOptions } from '../../types'
import { unquote } from '../../util'
import { AbstractExtractor } from '../abstractExtractor'

/**
 * Usage: 
 * 
```ts
Ls({path: './src'})
```
 */
export const Ls = function<T = any>(config: LsOptions, t?: any): (string | Stats)[] {
  return t!
}

export interface LsOptions extends ExtractorOptions {
  /**
   * Path to list.
   * Could be a glob
   */
  path: string
  /**
   * -R: recursive
   * -A: all files (include files beginning with ., except for . and ..)
   * -L: follow symlinks
   * -d: list directories themselves, not their contents
   * -l: list objects representing each file, each with fields containing ls -l output fields
   */
  options?: '-R' | '-A' | '-L' | '-d' | '-l'
}

export class LsClass extends AbstractExtractor {
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>
  ): ExtractorResult {
    const config = this.getOptionsFromFistArg<LsOptions>(n)
    let output = `[]`
    if (config && config.path) {
      output = `[${(config.options
        ? ls(config.options, config.path)
        : ls(config.path).map(f => quote(f.toString()))
      ).join(',')}]`
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
