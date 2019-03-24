// import { Stats } from 'fs'
// import { CallExpression, Node } from 'ts-simple-ast'
// import { ExtractorGetter, ExtractorOptions, ExtractorResult, ReplaceProjectFunctionCallOptions } from '../../types'
// import { AbstractExtractor } from '../abstractExtractor'

// /**
//  * companion of Name(), for query Nodes across a project

// ```ts
// Query(selector: '.logger .action')
// const loggerInterface = Query({selector: '.InterfaceDeclaration'}).find(d=>d.getName()==='Logger' && d.getSourceFile().name()==='foo.ts').map(c=>.getMethod('log'))).forEach(m=>m.rename('pushLog))
// Query(selector: '.ClassDeclaration').filter(c=>c.implements(Logger)).map(c=>.getMethod('log'))).forEach(m=>m.rename('pushLog))
// ```
//  */
// export const Attribute = function<T = any>(config: AttributeOptions, t?: any): (string | Stats)[] {
//   return t!
// }

// export interface AttributeOptions<T = any, F = any, E = any> extends ExtractorOptions {
// }
// interface AttributeOptionsAst {
//   condition: Node
//   then: Node
//   else: Node
//   error?: Node
// }

// export class AttributeClass extends AbstractExtractor {
//   protected freeArgumentNumber = 1
//   extract(
//     n: CallExpression,
//     index: number,
//     getter: ExtractorGetter,
//     options: Required<ReplaceProjectFunctionCallOptions>
//   ): ExtractorResult {
//     const config = this.getOptionsFromFistArg(n) as AttributeOptions
//     let output: string | Node = 'undefined'
//     return this.buildExtractorResult(n, output, getter, index, options, config || {})
//   }
// }
