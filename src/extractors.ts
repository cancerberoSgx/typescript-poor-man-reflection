import { Ast } from './extractors/ast'
import { BodyText } from './extractors/basic/bodyText'
import { NodeText } from './extractors/basic/nodeText'
import { ThisBlockText } from './extractors/basic/thisBlockText'
import { TypeText } from './extractors/basic/typeText'
import { Extractor, ExtractorClass, ExtractorFn } from './types'

export const defaultExtractors: { [k: string]: Extractor } = {
  TypeText: new TypeText(),

  NodeText: new NodeText(),

  BodyText: new BodyText(),

  ThisBlockText: new ThisBlockText(),

  // /**
  //  * returns with node type inference information. Usage:
  //  * ```
  //  * declare function f():number|boolean|string|Date; var n = f(); var nType = NodeType(n)
  //  * ```
  //  *
  //  * Note : this tool uses the first argument for API and the second one for data
  //  */
  // NodeType: function(n: CallExpression, index, getter, options, fileVariableAccessor) {
  //   const block = n.getFirstAncestorByKind(SyntaxKind.Block)
  //   let result: string = ''
  //   if (block) {
  //     const t = block.getText().trim()
  //     result = `${JSON.stringify(t.substring(1, t.length - 1))}`
  //   }
  //   return {
  //     argument: getter(index),
  //     prependToFile: result
  //   }
  // },

  PrintAst: new Ast()
}

export function isExtractorFn(e: Extractor): e is ExtractorFn {
  return typeof e.extract === 'undefined'
}

export function isExtractorClass(e: Extractor): e is ExtractorClass {
  return typeof e.extract !== 'undefined'
}
