import {
  TypeGuards,
  SyntaxKind,
  SourceFile,
  ArrayLiteralExpression,
  StringLiteral,
  ObjectLiteralExpression,
  CallExpression,
  Node,
  Identifier
} from 'ts-simple-ast'
import { notUndefined } from 'misc-utils-of-mine-typescript'
import { asArray, quote } from 'misc-utils-of-mine-generic'

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
    .filter(i =>
      i
        .findReferences()
        .map(r => r.getDefinition())
        .map(d => d.getDeclarationNode() && d.getDeclarationNode()!.getParent()!)
        .filter(notUndefined)
        .filter(TypeGuards.isImportDeclaration)
        .map(i => i.getModuleSpecifier().getText() === moduleSpecifier)
    )
    .map(i => i.getParentIfKind(SyntaxKind.CallExpression))
    .filter(notUndefined)
}

export function array2DInsert(init: ArrayLiteralExpression, fileId: number, index: number, data: string[]) {
  ensureArrayLength(init, fileId + 1, `[]`)
  init.removeElement(fileId)
  const newEl = init.insertElement(fileId, `[]`) as ArrayLiteralExpression
  data.forEach(d => {
    newEl.addElement(d)
  })
}

/** makes sure there are items until index-1 (se we can add the index-th) */
function ensureArrayLength(a: ArrayLiteralExpression, index: number, item: string) {
  if (index >= a.getElements().length) {
    for (let i = a.getElements().length; i < index; i++) {
      a.addElement(item)
    }
  }
}

export function objectLiteralInsert(
  init: ObjectLiteralExpression,
  fileId: number,
  fileVariables: { [n: string]: string }
) {
  //TODO: check if property assignment already exists
  init.addPropertyAssignments(
    Object.keys(fileVariables).map(name => ({
      name: quote(name),
      initializer: fileVariables[name]
    }))
  )
}

export function removePrependVariableDeclaration(
  sourceFile: SourceFile,
  options: { extractorDataVariableName: string }
) {
  const varDecl = sourceFile.getVariableDeclaration(options.extractorDataVariableName)
  if (varDecl) {
    const variableStatement = varDecl.getFirstAncestorByKind(SyntaxKind.VariableStatement)
    if (variableStatement) {
      variableStatement.remove()
    }
  }
}

export function removeDataFolderFileNameImportDeclaration(
  sourceFile: SourceFile,
  options: { extractorDataFolderFileName: string }
) {
  const il = sourceFile.getImportStringLiterals().find(l => l.getText().includes(options.extractorDataFolderFileName))
  if (il) {
    il.getFirstAncestorByKindOrThrow(SyntaxKind.ImportDeclaration).remove()
  }
}

export function getFirstTypeArgumentDefinitionBlock(n: CallExpression) {
  const id = n.getTypeArguments()[0].getFirstChildByKind(SyntaxKind.Identifier)
  if (id) {
    const r = getDefinitionsOf(id)
    if (r.length) {
      return r[0]
    }
  }
}

export function getDefinitionsOf(id: Identifier) {
  return id
    .findReferences()
    .map(r =>
      r
        .getDefinition()
        .getNode()
        .getParent()
    )
    .filter(notUndefined)
}

export function getNodeName(n: Node) {
  const id = n.getFirstChildByKind(SyntaxKind.Identifier)
  return id ? id.getText() : undefined
}