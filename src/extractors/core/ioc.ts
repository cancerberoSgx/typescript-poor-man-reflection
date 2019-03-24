// import { Stats } from 'fs'
// import { CallExpression, Node } from 'ts-simple-ast'
// import { ExtractorGetter, ExtractorOptions, ExtractorResult, ReplaceProjectFunctionCallOptions } from '../../types'
// import { AbstractExtractor } from '../abstractExtractor'

// /**
//  * Returns one of the two values given according to given condition. Basic tool for dependency injection.

// ```ts
// interface Logger {log(s:string):void}

// ```

// Which could be transformed in something like:

// ```ts
// const logger = If({
//   condition: () => process.env.NODE_ENV==='production',
//   then: () => new LightLogger(),
//   else: () => new DevLogger()
// }, () => new DevLogger())
// ```

//  */
// export const If = function<T = any>(config: IfOptions, t?: any): (string | Stats)[] {
//   return t!
// }

// export interface IfOptions<T = any, F = any, E = any> extends ExtractorOptions {
//   condition: () => boolean
//   then: () => T
//   else: () => F
//   error?: () => E
// }
// interface IfOptionsAst {
//   condition: Node
//   then: Node
//   else: Node
//   error?: Node
//   // /** TODO
//   //  * Default value if an error occurs.
//   //  */
//   // onError?: 'then' | 'else'
// }

// export class IfClass extends AbstractExtractor {
//   protected freeArgumentNumber = 1
//   extract(
//     n: CallExpression,
//     index: number,
//     getter: ExtractorGetter,
//     options: Required<ReplaceProjectFunctionCallOptions>
//   ): ExtractorResult {
//     const config = this.getOptionsFromFistArg(n) as IfOptions
//     const astConfig = (config as any) as IfOptionsAst
//     let output: string | Node = 'undefined'
//     let errorResult = undefined
//     if (config) {
//       const conditionResult = this.evaluate<boolean>(astConfig.condition, astConfig, { errorResult }) || false
//       if (conditionResult && !errorResult) {
//         output = astConfig.then
//       } else if (!errorResult && !conditionResult) {
//         output = astConfig.else
//       } else {
//         output = errorResult || 'undefined'
//       }
//     }
//     return this.buildExtractorResult(n, output, getter, index, options, config || {})
//   }

//   private evaluate<T = any>(
//     n: Node,
//     config: IfOptionsAst,
//     error: { errorResult: any },
//     ignoreError = false
//   ): T | undefined {
//     try {
//       const s = `(${n.getText()})()`
//       const r = eval(s) as T
//       return r
//     } catch (error) {
//       if (!ignoreError) {
//         const errorValue = config.error ? this.evaluate(config.error, config, error, true) : `ERROR: ${error}`
//         error.errorResult = errorValue
//       }
//     }
//   }
// }
