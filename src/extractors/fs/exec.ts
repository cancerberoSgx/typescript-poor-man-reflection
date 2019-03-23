import { quote } from 'misc-utils-of-mine-generic';
import { exec } from 'shelljs';
import { CallExpression, Node } from 'ts-simple-ast';
import { ExtractorGetter, ExtractorOptions, ExtractorResult, FileVariableAccessor, ReplaceProjectFunctionCallOptions } from '../../types';
import { unquote } from '../../util';
import { AbstractExtractor } from '../abstractExtractor';

/**
 * Executes given command synchronously. 
 * Returns process status code, stdout and stderr.
 * 
```ts
const command = 'npm run coverage --format json --stdout'
const result = Exec({command, silent: true})
if(result.code===0){
  console.log(`Command "${command}" finished successfully`)
}
export const coverageReport = JSON.parse(result.stdout)
```
 */
export const Exec = function<T = any>(config: ExecOptions, t?: any): ExecResult | undefined {
  return t!
}

interface ExecResult {
  code: number
  stdout: string
  stderr: string
}
export interface ExecOptions extends ExtractorOptions {
  /**
   * Command to execute
   */
  command: string
  /**
   * If true it process stdio won't be dumped in the terminal
   */
  silent?: boolean
}

export class ExecClass extends AbstractExtractor {
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>,
    variableAccessor: FileVariableAccessor
  ): ExtractorResult {
    const config = this.getOptionsFromFistArg<ExecOptions>(n)
    let output = `undefined`
    if (config && config.command) {
      config.silent = config.silent || false
      const p = exec(config.command)
      output = JSON.stringify(
        `{code: ${p.code}, stdout: ${quote(p.stdout.toString())}, stderr: ${quote(p.stderr.toString())}}`
      )
    }
    return this.buildExtractorResult(n, output, getter, index, options, config)
  }

  protected parseOptionValue(name: string, value: Node | undefined): any {
    if (value && ['command'].includes(name)) {
      return unquote(value.getText())
    } else if (value && ['silent'].includes(name)) {
      return value.getText() === 'true' ? true : false
    } else {
      return super.parseOptionValue(name, value)
    }
  }
  protected freeArgumentNumber = 1
}
