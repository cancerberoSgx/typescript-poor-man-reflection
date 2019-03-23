import { Stats } from 'fs'
import { quote, asArray } from 'misc-utils-of-mine-generic'
import { ls, cat } from 'shelljs'
import Project, { CallExpression, Node } from 'ts-simple-ast'
import {
  ExtractorGetter,
  ExtractorOptions,
  ExtractorResult,
  FileVariableAccessor,
  ReplaceProjectFunctionCallOptions
} from '../../types'
import { unquote, asString } from '../../util'
import { AbstractExtractor } from '../abstractExtractor'

/**
 * Usage: 
 * 
```ts
Ls({path: './src'})
```
 */
export const ReadFiles = function<T = any>(config: ReadFilesOptions, t?: any): (string | Stats)[] {
  return t!
}

export interface ReadFilesOptions extends ExtractorOptions {
  /** path of files to - could be a glob */
  path: string
}

export class ReadFilesClass extends AbstractExtractor {
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>,
    variableAccessor: FileVariableAccessor,
    project?: Project
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
  getConfig() {
    return {
      freeArgumentNumber: 1,
      unusedArgumentDefaultValue: '{}'
    }
  }
}
