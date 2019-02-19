import { SyntaxKind, CallExpression, TypeGuards } from 'ts-simple-ast';
import { quote } from './util';


export const defaultExtracts = {
  TypeText: (n: CallExpression) => quote(n.getTypeArguments()[0].getText()),
  NodeText: (n: CallExpression) => `${JSON.stringify(getNode(n)!.getText())}`,
  BodyText: (n: CallExpression) => {
    const f = getNode(n)!
    if(TypeGuards.isBodyableNode(f)){
      return `${JSON.stringify(f.getBodyText())}`
    }
    else {
      return ''
    }
  }

};

function getNode(n:CallExpression){
  return n.getTypeArguments()[0]
      .getFirstChildByKind(SyntaxKind.Identifier)!
      .findReferences()
      .map(r => r.getDefinition().getNode().getParent())[0]
}