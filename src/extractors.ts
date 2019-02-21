import { CallExpression, SyntaxKind, TypeGuards } from 'ts-simple-ast'
import { ExtractorFn, Extractor, ExtractorClass, ExtractOptions, ExtractorResult } from './types'
import { quote } from './util'
import { getFirstTypeArgumentDefinitionBlock } from './astUtil'

export const defaultExtractors: { [k: string]: Extractor } = {
  TypeText: (n: CallExpression, index, getter, options, fileVariableAccessor) => {
    return options.extractorDataMode === 'asStringLiteral'
      ? quote(n.getTypeArguments()[0].getText())
      : {
          argument: getter(index),
          prependToFile: quote(n.getTypeArguments()[0].getText())
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
    }
    return options.extractorDataMode === 'asStringLiteral'
      ? result
      : {
          argument: getter(index),
          prependToFile: result
        }
  },
  /**
   * returns with node type inference information. Usage:
   * ```
   * declare function f():number|boolean|string|Date; var n = f(); var nType = NodeType(n)
   * ```
   *
   * Note : this tool uses the first argument for API and the second one for data
   */
  NodeType: function(n: CallExpression, index, getter, options, fileVariableAccessor) {
    const block = n.getFirstAncestorByKind(SyntaxKind.Block)
    let result: string = ''
    if (block) {
      const t = block.getText().trim()
      result = `${JSON.stringify(t.substring(1, t.length - 1))}`
    }
    return {
      argument: getter(index),
      prependToFile: result
    }
  }
}

export function isExtractorFn(e: Extractor): e is ExtractorFn {
  return typeof e.extract === 'undefined'
}

class NodeType implements ExtractorClass{
  extract(options: ExtractOptions): ExtractorResult {
    const id = options.n.getFirstAncestorByKind(SyntaxKind.Identifier)
    if(id){

    }else {
      
    }
    throw new Error('Method not implemented.');
  }

}
