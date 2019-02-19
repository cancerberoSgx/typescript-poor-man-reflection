import { TypeGuards, SyntaxKind, Identifier, SourceFile, CallExpression, Node } from 'ts-simple-ast'
import { Replacement, ReplaceFunctionCallsOptions} from './types'
import { notUndefined } from './util';
import { defaultExtracts } from './extractors';

/** 
 * JavaScript API to replace arguments of all function expression calls in given (ts-simple-ast SourceFile) 
 * file that match given options. See  `ReplaceFunctionCallsOptions`. 
 */
export function replaceFunctionCall(
  sourceFile: SourceFile,
  {
    moduleSpecifier = 'get-type-text',
    clean = false,
    extracts = defaultExtracts
  }: ReplaceFunctionCallsOptions = {},
): (Replacement | undefined)[] {

  const functionNames = Object.keys(extracts)
  const replaced: Replacement[] = []
  const callExpressions = extractCallExpressionsFrom(sourceFile, moduleSpecifier, functionNames)

  callExpressions.forEach(c => {
    const functionName = c.getFirstChildByKind(SyntaxKind.Identifier)!.getText()
    const extract = extracts[functionName] // TODO: check for null?
    if (c.getArguments().length === 0 && !clean) {
      // first time
      //TODO: verify type argument 0 exists and has correct type
      const r = extract(c)
      c.addArgument(r)
      replaced.push({ file: sourceFile.getFilePath(), replacement: r, firstTime: true })
    } else if (c.getArguments().length === 1) {
      // second time - dispatch --cleanArguments or replace existing one
      const r = clean ? '' : extract(c)
      const comma = c.getArguments()[0].getNextSiblingIfKind(SyntaxKind.CommaToken)
      if (comma) {
        comma.replaceWithText('')
      }
      c.getArguments()[0].replaceWithText(r)
      replaced.push({ file: sourceFile.getFilePath(), replacement: r, firstTime: false })
    } else if (c.getArguments().length > 1) {
      console.error(
        `more than 1 argument found in file ${sourceFile.getFilePath()} function call expression ${c.getText()}`,
      )
    }
  })
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
      i.findReferences()
        .map(r => r.getDefinition())
        .map(d => d.getDeclarationNode() && d.getDeclarationNode()!.getParent()!)
        .filter(notUndefined)
        .filter(TypeGuards.isImportDeclaration)
        .map(i => i.getModuleSpecifier().getText() === moduleSpecifier),
    )
    .map(i => i.getParentIfKind(SyntaxKind.CallExpression))
    .filter(i => i) as CallExpression[]

}
