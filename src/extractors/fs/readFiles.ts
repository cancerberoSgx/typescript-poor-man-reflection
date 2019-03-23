import { Stats } from 'fs'
import { cat, ls } from 'shelljs'
import { CallExpression, Node } from 'ts-simple-ast'
import {
  ExtractorGetter,
  ExtractorOptions,
  ExtractorResult,
  FileVariableAccessor,
  ReplaceProjectFunctionCallOptions
} from '../../types'
import { unquote } from '../../util'
import { AbstractExtractor } from '../abstractExtractor'

/**
 * Returns an array that contain given file names and content as string. Useful to embed files in the source
 * code as string. Usage: 
 *
 * ```ts
 * export files = ReadFiles({path: './src/examples/example*.ts'})
```
 */
export const ReadFiles = function<T = any>(config: ReadFilesOptions, t?: any): (string | Stats)[] {
  return t!
}

export interface ReadFilesOptions extends ExtractorOptions {
  /**
   * Path of files to read. Can be a glob.
   */
  path: string
}

export class ReadFilesClass extends AbstractExtractor {
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>,
    variableAccessor: FileVariableAccessor
  ): ExtractorResult {
    const config = this.getOptionsFromFistArg<ReadFilesOptions>(n)
    let output = `[]`
    if (config && config.path) {
      const files = ls('-A', config.path).map(name => ({ name, content: cat(name).toString() }))

      output = `[${files.map(f => JSON.stringify(f)).join(', ')}]`
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
