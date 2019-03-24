import { Stats } from 'fs'
import { CallExpression, Node } from 'ts-simple-ast'
import { ExtractorGetter, ExtractorOptions, ExtractorResult, ReplaceProjectFunctionCallOptions } from '../../types'
import { AbstractExtractor } from '../abstractExtractor'

/**
 * Returns one of the two values given according to given condition.
 *
```ts
// interface Logger { log(s: string):void }

const logger = If<()=>Logger>({
  condition: ()=>process.env.NODE_ENV==='production',
  then: ()=>new LightLogger(),
  else: ()=>new DevLogger()
})
```

which could be transformed in something like:

```ts
const logger = If<()=>Logger>({
  condition: ()=>process.env.NODE_ENV==='production',
  then: ()=>new LightLogger(),
  else: ()=>new DevLogger()
}, ()=>new DevLogger())
```

Basic tool for dependency injection?
 */
export const If = function<T = any>(config: IfOptions, t?: any): (string | Stats)[] {
  return t!
}

export interface IfOptions<T = any, F = any, E = any> extends ExtractorOptions {
  condition: () => boolean
  then: () => T
  else: () => F
  error?: () => E
}
interface IfOptionsAst {
  condition: Node
  then: Node
  else: Node
  error: Node

  /** TODO: now just supporting compileTime since is the useful thing */
  evaluationMode?: 'compileTime'|'runTime'

  onError?: 'then'|'else'
}

export class IfClass extends AbstractExtractor {
  protected freeArgumentNumber = 1
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>
  ): ExtractorResult {
    const config = this.getOptionsFromFistArg(n) as IfOptions
    const astConfig = (config as any) as IfOptionsAst
    let output:string|Node = 'undefined'
    // let conditionResult = false
    // let result = undefined
    let errorResult = undefined
    if (config) {
      //TODO: undefined===false ? ignoring errors if no error prop
      const conditionResult = this.evaluate<boolean>(astConfig.condition, astConfig, {errorResult}) || false
      if (conditionResult && !errorResult) {
        output =  astConfig.then//this.evaluate(astConfig.then, astConfig,  {errorResult}) || undefined
      }
      else if (!errorResult && !conditionResult) {
        output = astConfig.else// this.evaluate(astConfig.then, astConfig,  {errorResult}) || undefined
      }
      else {
        output = errorResult||'undefined'
      }
    }
    return this.buildExtractorResult(n, output, getter, index, options, config || {})
  }

  private evaluate<T = any>(n: Node, config: IfOptionsAst, error: {errorResult:any}, ignoreError = false): T | undefined {
    try {
      const s = `(${n.getText()})()`
      const r =  eval(s) as T
      // console.log('eval', r, s, eval(`process.env.COMPILE_TIME`), process.env.COMPILE_TIME, (()=>!!process.env.COMPILE_TIME)());
      return r
    } catch (error) {
      if(!ignoreError) {
        const errorValue = config.error ?  this.evaluate(config.error, config, error, true) : `ERROR: ${error}`
      error.errorResult= errorValue

      }
    }
  }
}

/*
how to save instances & values or types or references at compile timme?

const logger = If<()=>Logger>({
  condition: ()=>process.env.NODE_ENV==='production',
  then: ()=>new LightLogger(),
  else: ()=>new DevLogger()
}, )

we could transform to:

export const __poor_man_export_index_2 = () => new DevLogger()
const logger = If<()=>Logger>({
  condition: ()=>process.env.NODE_ENV==='production',
  then: ()=>new LightLogger(),
  else: ()=>new DevLogger()
}, {__poor_man_export_index: 2, fileId: 4})

so this could be stored, in prependVariable directly:

const __extractor_prepend__ = [[__poor_man_export_index_2]]

and in the fileFolder importing it:

import {__poor_man_export_index_2} from './file1'
export const data: any[][] = [[__poor_man_export_index_2]]

*/
