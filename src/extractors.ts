import { CallExpression, SyntaxKind, TypeGuards } from 'ts-simple-ast';
import { Extractor } from './types';
import { quote } from './util';

export const defaultExtractors: {[k:string]: Extractor} = {
  TypeText: (n: CallExpression) => quote(n.getTypeArguments()[0].getText()),
  NodeText: (n: CallExpression) => {
    var c = getFirstTypeArgumentDefinitionBlock(n)
    return c ? `${JSON.stringify(c.getText())}` : ''
  },
  BodyText: (n: CallExpression) => {
    const f = getFirstTypeArgumentDefinitionBlock(n)!
    if (TypeGuards.isBodyableNode(f)) {
      return `${JSON.stringify(f.getBodyText())}`
    } else {
      return ''
    }
  },
  ThisBlockText: (n: CallExpression) => {
    const block = n.getFirstAncestorByKind(SyntaxKind.Block)
    if (block) {
      const t = block.getText().trim()
      return `${JSON.stringify(t.substring(1, t.length - 1))}`
    } else {
      return ''
    }
  }
}

function getFirstTypeArgumentDefinitionBlock(n: CallExpression) {
  const id = n.getTypeArguments()[0].getFirstChildByKind(SyntaxKind.Identifier)
  if (id) {
    const r = id.findReferences().map(r =>
      r
        .getDefinition()
        .getNode()
        .getParent()
    )
    if (r.length) {
      return r[0]
    }
  }
}
