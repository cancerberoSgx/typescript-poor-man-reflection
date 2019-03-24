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
// const logger = Dependency({
//   condition: () => process.env.NODE_ENV==='production',
//   then: () => new LightLogger(),
//   else: () => new DevLogger()
// }, () => new DevLogger())
// ```

//  */
// export const Dependency = function<T = any>(config: DependencyOptions, t?: any): (string | Stats)[] {
//   return t!
// }

// export interface DependencyOptions<T = any, F = any, E = any> extends ExtractorOptions {
//   condition: () => boolean
//   then: () => T
//   else: () => F
//   error?: () => E
// }
// interface DependencyOptionsAst {
//   condition: Node
//   then: Node
//   else: Node
//   error?: Node
//   // /** TODO
//   //  * Default value Dependency an error occurs.
//   //  */
//   // onError?: 'then' | 'else'
// }

// export class DependencyClass extends AbstractExtractor {
//   protected freeArgumentNumber = 1
//   extract(
//     n: CallExpression,
//     index: number,
//     getter: ExtractorGetter,
//     options: Required<ReplaceProjectFunctionCallOptions>
//   ): ExtractorResult {
//     const config = this.getOptionsFromFistArg(n) as DependencyOptions
//     const astConfig = (config as any) as DependencyOptionsAst
//     let output: string | Node = 'undefined'
//     let errorResult = undefined
//     Dependency (config) {
//       const conditionResult = this.evaluate<boolean>(astConfig.condition, astConfig, { errorResult }) || false
//       Dependency (conditionResult && !errorResult) {
//         output = astConfig.then
//       } else Dependency (!errorResult && !conditionResult) {
//         output = astConfig.else
//       } else {
//         output = errorResult || 'undefined'
//       }
//     }
//     return this.buildExtractorResult(n, output, getter, index, options, config || {})
//   }

//   private evaluate<T = any>(
//     n: Node,
//     config: DependencyOptionsAst,
//     error: { errorResult: any },
//     ignoreError = false
//   ): T | undefined {
//     try {
//       const s = `(${n.getText()})()`
//       const r = eval(s) as T
//       return r
//     } catch (error) {
//       Dependency (!ignoreError) {
//         const errorValue = config.error ? this.evaluate(config.error, config, error, true) : `ERROR: ${error}`
//         error.errorResult = errorValue
//       }
//     }
//   }
// }
