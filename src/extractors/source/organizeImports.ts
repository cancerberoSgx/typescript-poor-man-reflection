// import Project, { CallExpression, Node } from 'ts-simple-ast'
// import {
//   ExtractorGetter,
//   ExtractorOptions,
//   ExtractorResult,
//   FileVariableAccessor,
//   ReplaceProjectFunctionCallOptions
// } from '../../types'
// import { AbstractExtractor } from '../abstractExtractor'
// import { unique } from 'misc-utils-of-mine-generic'
// import { dirname } from 'path'
// import { unquote } from '../../util';

// /**
//  * Will call organize imports on given file. If no file is provided then it will call for the current file
//  * 
// ```ts
// const files = 
// ```
//  */
// export const OrganizeImports = function<T = any>(config: OrganizeImportsOptions, t?: any): string[] {
//   return t!
// }

// export interface OrganizeImportsOptions extends ExtractorOptions {
//   /**
//    * Path to files in which to call organize imports. Can be a glob.
//    */
//   path?: string
// }

// export class OrganizeImportsClass extends AbstractExtractor {
//   extract(
//     n: CallExpression,
//     index: number,
//     getter: ExtractorGetter,
//     options: Required<ReplaceProjectFunctionCallOptions>,
//     variableAccessor: FileVariableAccessor,
//     project?: Project
//   ): ExtractorResult {
//     const config = this.getOptionsFromFistArg<OrganizeImportsOptions>(n)
//     if (project) {
      
//       const base = project.createSourceFile(unique('base') + '.ts')
//       output = JSON.stringify(
//         project
//           .getSourceFiles()
//           .filter(f => f !== base)
//           .map(f => {
//             const path = base.getRelativePathTo(f)
//             return path
//           })
//       )
//       base.deleteImmediatelySync()
//     }
//     return this.buildExtractorResult(n, output, getter, index, options, config)
//   }

//   protected parseOptionValue(name: string, value: Node | undefined): any {
//     if (value && ['path'].includes(name)) {
//       return unquote(value.getText())
//     } else {
//       return super.parseOptionValue(name, value)
//     }
//   }

// }
