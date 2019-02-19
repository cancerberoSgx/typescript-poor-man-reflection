import { Project, SyntaxKind, CallExpression } from 'ts-simple-ast'
import { replaceFunctionCall } from '../replaceFunctionCall'
import { notUndefined } from '../util';

describe('extracts', () => {
  describe('NodeText', () => {
    it('1', () => {
      const project = new Project()

      project.createSourceFile('test.ts', `
NodeText<typeof f>()
function f(){
type T = any
}
`)

      replaceFunctionCall(project.getSourceFile('test.ts')!)
      expect(project.getSourceFile('test.ts')!.getText()).toContain(`NodeText<typeof f>(\"function f(){\\ntype T = any\\n}\")`)


      // console.log(project.getSourceFile('test.ts')!.getText());

      // function getFunctionBodyText(ce: CallExpression){
      //   return ce.getTypeArguments()[0].getFirstChildByKind(SyntaxKind.Identifier)!
      //   .findReferences()  
      //   .map(r => r.getDefinition().getNode().getParent()!.getText())
      //   [0]
      // }
      // const ce = f.getDescendantsOfKind(SyntaxKind.CallExpression)
      // const tai = ce[0].getTypeArguments()[0].getFirstChildByKind(SyntaxKind.Identifier)
      // console.log(tai!.getText());

      // const r = tai!.findReferences()  
      // .map(r => r.getDefinition().getNode().getParent()!.getText())
      // .map(d => d.getDisplayParts().map(d=>d.getText()))//.getDeclarationNode()   )
      // .filter(notUndefined)
      // .forEach(d=>d.getText())
      // console.log(r);
    })

  })
})
