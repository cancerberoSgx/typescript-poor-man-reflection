// import { Stats } from 'fs'
// import { CallExpression, Node } from 'ts-simple-ast'
// import { ExtractorGetter, ExtractorOptions, ExtractorResult, ReplaceProjectFunctionCallOptions } from '../../types'
// import { AbstractExtractor } from '../abstractExtractor'
// import { TODO } from 'misc-utils-of-mine-typescript';

// /**
//  * get / set variables supporting different scopes: 'sourceFile'|'project'|'package', roles and permissions
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
//   /**
//    * node: only visible from this node or its children
//    * sourceFile: any node on this sourcefile
//    * project: only files of this TS project
//    * projectComposite: only files of this ts composite project (defined by some tsconfig.json)
//    * package: all project files in node_modules (referenced in this project pacakge.json)
//    * 
//    * others:
//    * mono repo:
//    * by format ? typescript, tsx, .js ? 
//    * 'specific' : specVary nodes, files, projects, etc exactly
//    * 'directoryDescendants': only visible from this directory's and its descendant directories files
//    * 'folder': only visible from this folder's files
//    * nodeAncestors: 'from this node, and ancestors nodes till its sourcefile
//    */
//   scope?:'node'|'nodeAncestors'|'sourceFile'|'directory'|'childrenDirectories'|'project'|'package'

//   mode?: 'read'|'write'|'readWrite'|'list'|'exec'

//   type?: 'string'|'json'|'lambda'|'object'|'Node'|'SourceFile'

//   /** administer scope/mode/ in the future. ex: scope project only for tomorrow. mode exec only fridays*/
//   schedule?: TODO

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
