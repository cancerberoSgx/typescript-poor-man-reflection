import { TypeGuards, SyntaxKind, SourceFile, ArrayLiteralExpression } from 'ts-simple-ast';
import { notUndefined } from './util';
let astUtil;
/**
 * extract those CallExpressions from given sourceFile which declared in a module specifier with
 * given name and which function name is one of given names
 */
export function extractCallExpressions(sourceFile: SourceFile, moduleSpecifier: string, names: string[]) {
  return sourceFile
    .getDescendants()
    .filter(TypeGuards.isCallExpression)
    .map(c => c.getFirstChildByKind(SyntaxKind.Identifier))
    .filter(i => i && names.includes(i.getText()))
    .filter(notUndefined)
    .filter(i => i
      .findReferences()
      .map(r => r.getDefinition())
      .map(d => d.getDeclarationNode() && d.getDeclarationNode()!.getParent()!)
      .filter(notUndefined)
      .filter(TypeGuards.isImportDeclaration)
      .map(i => i.getModuleSpecifier().getText() === moduleSpecifier))
    .map(i => i.getParentIfKind(SyntaxKind.CallExpression))
    .filter(notUndefined);
}

export function array2DInsert(init: ArrayLiteralExpression, fileId: number, index: number, data: string) {
  ensureArrayLength(init,fileId+1,  `[]`)
  if(index!=-1){
    const arr = init.getElements()[fileId]
    if(!TypeGuards.isArrayLiteralExpression(arr)){
      throw 'Expected ArrayLiteralExpression, instead '+arr&&arr.getKindName()
    } 
    ensureArrayLength(arr,index,  `[]`)
    arr.insertElement(index, data)
  }
  else {
    init.insertElement(fileId, data)
  }
}
/** make sure there are items until index-1 (se we can add the index-th) */
function ensureArrayLength(a: ArrayLiteralExpression, index: number, item: string) {
  if (index > a.getElements().length) {
    for (let i = a.getElements().length; i < index; i++) {
      a.addElement(item);
    }
  }
}

