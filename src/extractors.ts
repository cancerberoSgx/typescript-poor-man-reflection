import { SyntaxKind, CallExpression, TypeGuards } from 'ts-simple-ast'
import { quote } from './util'

export const defaultExtractors = {
  TypeText: (n: CallExpression) => quote(n.getTypeArguments()[0].getText()),
  NodeText: (n: CallExpression) => {
    var c = getNode(n)
    return c ? `${JSON.stringify(c.getText())}` : ''
  },
  BodyText: (n: CallExpression) => {
    const f = getNode(n)!
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
    }
    else {
      return ''
    }
  }
}


function getNode(n: CallExpression) {
  const id = n
    .getTypeArguments()[0]
    .getFirstChildByKind(SyntaxKind.Identifier)
  if (id) {
    const r = id.findReferences()
      .map(r =>
        r
          .getDefinition()
          .getNode()
          .getParent(),
      )
    if (r.length) {
      return r[0]
    }
  }
}
