import Project, { SyntaxKind, Identifier, SourceFile, Node } from 'ts-simple-ast'
import { Replacement, ReplaceFileFunctionCallOptions, ReplaceProjectFunctionCallOptions } from './types'
import { quote } from './util'
import { defaultExtractors } from './extractors'
import { extractorGetterBuilder, writeExtractorData, getFileId } from './extractorData'
import { extractCallExpressions } from './astUtil'
import { defaultOptions } from './replaceProjectFunctionCall'

/**
 * JavaScript API to replace arguments of all function expression calls in given (ts-simple-ast SourceFile)
 * file that match given options. See  `ReplaceFunctionCallsOptions`.
 */
export function replaceFileFunctionCall(
  sourceFile: SourceFile,
  options_: Partial<ReplaceProjectFunctionCallOptions> = defaultOptions
): (Replacement | undefined)[] {
  const  options: Required<ReplaceProjectFunctionCallOptions> =  {...defaultOptions, ...options_}
 const {
    moduleSpecifier = 'typescript-poor-man-reflection',
    clean = false,
    extracts = defaultExtractors,
    extractorDataVariableName = '__extractor_prepend__',
    extractorDataMode,
    extractorDataFolderFileName = '__poor_man_reflection__'
  } =options
  
  const fileVariables: { [name: string]: string } = {}
  const replaced: Replacement[] = []
  const callExpressions = extractCallExpressions(sourceFile, moduleSpecifier, Object.keys(extracts))
  let extractorData: string[] = []
  const fileId = getFileId(sourceFile, { extractorDataFolderFileName: extractorDataFolderFileName })
  callExpressions.forEach((c, index) => {
    const functionName = c.getFirstChildByKind(SyntaxKind.Identifier)!.getText()
    const extract = extracts[functionName]
    const fileVariableAccessor = (name: string, value?: string) => {
      if (value) {        // called at compile time
        fileVariables[`${fileId}_${name}`] = value
      } else {        // called at run-time
        return `fileVariables[${quote(`${fileId}_${name}`)}]`
      }
    }
    if (!extract) {
      extractorData.push('""')
    } else if (c.getArguments().length === 0 && !clean) {
      // first time
      const extractResult = extract(
        c,
        index,
        extractorGetterBuilder({ ...defaultOptions, ...options }, index, sourceFile, c),
        options,
        fileVariableAccessor
      )
      extractorData.push(typeof extractResult !== 'string' ? extractResult.prependToFile || '""' : '""')
      const argumentText = typeof extractResult === 'string' ? extractResult : extractResult.argument
      c.addArgument(argumentText)
      replaced.push({ file: sourceFile.getFilePath(), replacement: argumentText, firstTime: true })
    } else if (c.getArguments().length === 1) {
      // second time - --clean or replace existing argument
      const extractResult = clean
        ? ''
        : extract(
            c,
            index,
            extractorGetterBuilder({ ...defaultOptions, ...options }, index, sourceFile, c),
            options,
            fileVariableAccessor
          )
      extractorData.push(typeof extractResult !== 'string' ? extractResult.prependToFile || '""' : '""')
      const argumentText = typeof extractResult === 'string' ? extractResult : extractResult.argument
      const comma = c.getArguments()[0].getNextSiblingIfKind(SyntaxKind.CommaToken)
      if (comma) {
        comma.replaceWithText('')
      }
      c.getArguments()[0].replaceWithText(argumentText)
      replaced.push({ file: sourceFile.getFilePath(), replacement: argumentText, firstTime: false })
    } else if (c.getArguments().length > 1) {
      extractorData.push('""')
      console.error(
        `more than 1 argument found in file ${sourceFile.getFilePath()} function call expression ${c.getText()}`
      )
    } else {
      extractorData.push('""')
    }
  })
  writeExtractorData(
    sourceFile,
    { extractorDataVariableName, clean, extractorDataMode, extractorDataFolderFileName },
    callExpressions,
    extractorData,
    fileVariables
  )
  return replaced
}
