import { quote } from 'misc-utils-of-mine-generic'
import { notUndefined } from 'misc-utils-of-mine-typescript'
import {
  ArrayLiteralExpression,
  CallExpression,
  Identifier,
  Node,
  ObjectLiteralExpression,
  SourceFile,
  SyntaxKind,
  TypeGuards
} from 'ts-morph'
import { getDefinitionsOf } from 'ts-simple-ast-extra'

/**
 * extract those CallExpressions from given sourceFile which declared in a module specifier with
 * given name and which function name is one of given names
 */
export function extractCallExpressions(
  sourceFile: SourceFile,
  moduleSpecifier: string | '__IGNORE__',
  names: string[]
) {
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
        .map(i => (moduleSpecifier === '__IGNORE__' ? true : i.getModuleSpecifier().getText() === moduleSpecifier))
    )
    .map(i => i.getParentIfKind(SyntaxKind.CallExpression))
    .filter(notUndefined)
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
