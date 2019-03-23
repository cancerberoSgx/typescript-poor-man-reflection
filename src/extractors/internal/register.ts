// import { flat } from 'misc-utils-of-mine-generic'
// import { notFalsy } from 'misc-utils-of-mine-typescript'
// import { CallExpression, MethodDeclaration, PropertyDeclaration, SyntaxKind, TypeGuards } from 'ts-simple-ast'
// import { getExtendsRecursively } from 'ts-simple-ast-extra'
// import { getDefinitionsOf } from '../../astUtil'
// import { ExtractorGetter, ExtractorOptions, ExtractorResult, ReplaceProjectFunctionCallOptions } from '../../types'
// import { AbstractExtractor } from '../abstractExtractor'

// /**
// ```ts

// Register({
//   name: 'NewExtractor', 
//   extractor: class NewExtractor extends AbstractExtractor {
//     protected freeArgumentNumber = 1
//     extract(...[c, i, g, options, v]: Parameters<ExtractorFn>) {
//       const config = this.getOptionsFromFistArg(c) || {}
//       return this.buildExtractorResult(c, '"hello"', g, i, options, config)
//     }
//   }, 
//   fn<T = any>(config: NewExtractorOptions, r?: T): T {
//     return r!
//   }
// })
// // and from here I can use it: 
// NewExtractor()
// ```
//  */
// export function Register<T = any>(config: RegisterOptions, t?: T): T {
//   return t!
// }

// export interface RegisterOptions extends ExtractorOptions {}

// export class RegisterClass extends AbstractExtractor {
//   protected freeArgumentNumber = 1

//   extract(
//     n: CallExpression,
//     index: number,
//     getter: ExtractorGetter,
//     options: Required<ReplaceProjectFunctionCallOptions>
//   ): ExtractorResult {
//     const target = n.getFirstAncestor(a => TypeGuards.isPropertyDeclaration(a) || TypeGuards.isMethodDeclaration(a)) as
//       | PropertyDeclaration
//       | MethodDeclaration
//       | undefined
//     const config = this.getOptionsFromFistArg<RegisterOptions>(n)
//     return this.buildExtractorResult(n, 'undefined', getter, index, options, config)
//   }
// }
