import { TypeGuards, SyntaxKind, Identifier, SourceFile, CallExpression, Node } from 'ts-simple-ast'
import { Replacement, ReplaceFileFunctionCallOptions } from './types'
import { notUndefined, quote } from './util'
import { defaultExtractors } from './extractors'

/**
 * JavaScript API to replace arguments of all function expression calls in given (ts-simple-ast SourceFile)
 * file that match given options. See  `ReplaceFunctionCallsOptions`.
 */
export function replaceFileFunctionCall(
  sourceFile: SourceFile,
  {
    moduleSpecifier = 'typescript-poor-man-reflection',
    clean = false,
    extracts = defaultExtractors,
    extractorPrependVariableName = '__extractor_prepend__'
  }: ReplaceFileFunctionCallOptions = {}
): (Replacement | undefined)[] {
  const replaced: Replacement[] = []
  const callExpressions = extractCallExpressionsFrom(sourceFile, moduleSpecifier, Object.keys(extracts))
  let prependToFile: string[] = []
  callExpressions.forEach((c, index) => {
    const functionName = c.getFirstChildByKind(SyntaxKind.Identifier)!.getText()
    const extract = extracts[functionName]
    if (!extract) {
      prependToFile.push('""')
    } else if (c.getArguments().length === 0 && !clean) {
      // first time
      const extractResult = extract(c, index, extractorPrependVariableName)
      prependToFile.push(typeof extractResult !== 'string' ? extractResult.prependToFile || '""' : '""')
      const argumentText = typeof extractResult === 'string' ? extractResult : extractResult.argument
      c.addArgument(argumentText)
      replaced.push({ file: sourceFile.getFilePath(), replacement: argumentText, firstTime: true })
    } else if (c.getArguments().length === 1) {
      // second time - --clean or replace existing argument
      const extractResult = clean ? '' : extract(c, index, extractorPrependVariableName)
      prependToFile.push(typeof extractResult !== 'string' ? extractResult.prependToFile || '""' : '""')
      const argumentText = typeof extractResult === 'string' ? extractResult : extractResult.argument
      const comma = c.getArguments()[0].getNextSiblingIfKind(SyntaxKind.CommaToken)
      if (comma) {
        comma.replaceWithText('')
      }
      c.getArguments()[0].replaceWithText(argumentText)
      replaced.push({ file: sourceFile.getFilePath(), replacement: argumentText, firstTime: false })
    } else if (c.getArguments().length > 1) {
      prependToFile.push('""')
      console.error(
        `more than 1 argument found in file ${sourceFile.getFilePath()} function call expression ${c.getText()}`
      )
    } else {
      prependToFile.push('""')
    }
  })

  // we always clean the prepend variable statement and always add a new one
  const varDecl = sourceFile.getVariableDeclaration(extractorPrependVariableName)
  if (varDecl) {
    const variableStatement = varDecl.getFirstAncestorByKind(SyntaxKind.VariableStatement)
    if (variableStatement) {
      variableStatement.remove()
    }
  }
  if (!clean) {
    sourceFile.addStatements(`const ${extractorPrependVariableName} = [${prependToFile.join(', ')}]`)
  }

  return replaced
}

function extractCallExpressionsFrom(sourceFile: SourceFile, moduleSpecifier: string, names: string[]) {
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
