// import { Stats } from 'fs'
// import { CallExpression, Node } from 'ts-simple-ast'
// import { ExtractorGetter, ExtractorOptions, ExtractorResult, ReplaceProjectFunctionCallOptions } from '../../types'
// import { AbstractExtractor } from '../abstractExtractor'
// import { TODO } from 'misc-utils-of-mine-typescript';

// /**
//  * get / set variables supporting  different scopes: 'file'|'project'|'node'
//  * 
//  * Very WIP, design research
//  * 
//  * Future idea: 
//  *  * executable variables that can be triggered by any role (even actors outside this project.). type: lambda or type Extractor ? - an extractor call expression in a context could be represented and triggered (like in executing the 'typescript-pmr' program by other projects/files/nodes.). That would be a way of controlling the source of the "extraction" (security)

// ```ts
// // set's a variable value
// Var(name: 'loggerName', value: 'org.sgx.log.Logger', scope: 'package')
// // get value
// Var(name: 'loggerName',)
// // list variable names in that scope and mode
// Var(list: true, scope: 'package',mode: 'write')

// ```
//  */
// export const Var = function<T = any>(config: VarOptions, t?: any): (string | Stats)[] {
//   return t!
// }

// export interface VarOptions<T = any, F = any, E = any> extends ExtractorOptions {

//   action?: 'get'|'set'|'list'
//   // /**
//   //  * node: only visible from this node or its children
//   //  * file: any node on this sourcefile
//   //  * project: only files of this TS project
//   //  */
//   // scope?:'file'|'project'|'node'

//   // mode?: 'read'|'write'|'readWrite'

//   /**
//    * defines the value when we get the variable
//    */
//   type?: 'string'|'json'|'Node'
// }


// export class VarClass extends AbstractExtractor {
//   protected freeArgumentNumber = 1
//   extract(
//     n: CallExpression,
//     index: number,
//     getter: ExtractorGetter,
//     options: Required<ReplaceProjectFunctionCallOptions>
//   ): ExtractorResult {
//     const config = this.getOptionsFromFistArg(n) as VarOptions
//     let output: string | Node = 'undefined'
//     return this.buildExtractorResult(n, output, getter, index, options, config || {})
//   }


// }
