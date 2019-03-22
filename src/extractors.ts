import  { CallExpression, SyntaxKind, TypeGuards } from 'ts-simple-ast'
import {
  ExtractorFn,
  Extractor,
  ExtractorClass
} from './types'
import { quote } from 'misc-utils-of-mine-generic'
import { getFirstTypeArgumentDefinitionBlock } from './astUtil'
import { Ast } from './extractors/ast'

export const defaultExtractors: { [k: string]: Extractor } = {
  TypeText: (n: CallExpression, index, getter, options, fileVariableAccessor) => {
    return options.extractorDataMode === 'asStringLiteral'
      ? quote(n.getTypeArguments()[0].getText(), "'")
      : {
          argument: getter(index),
          prependToFile: quote(n.getTypeArguments()[0].getText(), "'")
        }
  },

  NodeText: (n: CallExpression, index, getter, options, fileVariableAccessor) => {
    var c = getFirstTypeArgumentDefinitionBlock(n)
    return options.extractorDataMode === 'asStringLiteral'
      ? c
        ? `${JSON.stringify(c.getText())}`
        : ''
      : {
          argument: getter(index),
          prependToFile: c ? `${JSON.stringify(c.getText())}` : ''
        }
  },

  BodyText: (n: CallExpression, index, getter, options, fileVariableAccessor) => {
    const f = getFirstTypeArgumentDefinitionBlock(n)!
    if(!f){
      return {argument: `${JSON.stringify('Error: cannot find a block for given argument definition '+(n.getTypeArguments()[0]?n.getTypeArguments()[0]!.getText() : ''))}`
    }
    }
    return options.extractorDataMode === 'asStringLiteral'
      ? TypeGuards.isBodyableNode(f)
        ? `${JSON.stringify(f.getBodyText())}`
        : ''
      : {
          argument: getter(index),
          prependToFile: TypeGuards.isBodyableNode(f) ? `${JSON.stringify(f.getBodyText())}` : ''
        }
  },

  ThisBlockText: (n: CallExpression, index, getter, options, fileVariableAccessor) => {
    const block = n.getFirstAncestorByKind(SyntaxKind.Block)
    let result: string = ''
    if (block) {
      const t = block.getText().trim()
      result = `${JSON.stringify(t.substring(1, t.length - 1))}`
      // result = block.getText()
    }
    return options.extractorDataMode === 'asStringLiteral'
      ? result
      : {
          argument: getter(index),
          prependToFile: result
        }
  },

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
