import Project, { SyntaxKind, Identifier, SourceFile, Node } from 'ts-simple-ast'
import { Replacement, ReplaceFileFunctionCallOptions, ReplaceProjectFunctionCallOptions } from './types'
import { quote } from './util'
import { defaultExtractors, isExtractorFn } from './extractors'
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
  const options: Required<ReplaceProjectFunctionCallOptions> = { ...defaultOptions, ...options_ }
  const {
    moduleSpecifier = 'typescript-poor-man-reflection',
    clean = false,
    extracts = defaultExtractors,
    extractorDataVariableName = '__extractor_prepend__',
    extractorDataMode,
    extractorDataFolderFileName = '__poor_man_reflection__'
  } = options

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
    }
    // TODO - TDOOTODO - TDOOTODO - TDOOTODO - TDOOTODO - TDOO
    // Here we ask the extractor which arg number we can use for data
    // so extractors can use previous for API
    //
    const extractorConfig = typeof extract.getConfig !== 'undefined' ? extract.getConfig() : {}
    const argIndex = typeof extractorConfig.freeArgumentNumber !== 'undefined' ? extractorConfig.freeArgumentNumber : 0

    // const defaultArgValue = extractorConfig.unusedArgumentDefaultValue
    var extractArgs: [any, any, any, any, any] = [c,
      index,
      extractorGetterBuilder({ ...defaultOptions, ...options }, index, sourceFile, c),
      options,
      fileVariableAccessor
    ]

    // extractor owned arguments are empty - we need to fill them up in order to add ours.
    if (extract && c.getArguments().length < argIndex && !clean) {
      for (let i = 0; i < argIndex; i++) {
        c.addArgument(extractorConfig.unusedArgumentDefaultValue || 'null as any')
      }
    }

    // first time
    if (extract && c.getArguments().length === argIndex && !clean) {
      const extractResult = isExtractorFn(extract) ? extract(...extractArgs) : extract.extract(...extractArgs)
      extractorData.push(typeof extractResult !== 'string' ? extractResult.prependToFile || '""' : '""')
      const argumentText = typeof extractResult === 'string' ? extractResult : extractResult.argument
      c.addArgument(argumentText) // TODO: fill empty args with config.defaultArgumentValue
      replaced.push({ file: sourceFile.getFilePath(), replacement: argumentText, firstTime: true })
    }

    // second time - --clean or replace existing argument
    else if (c.getArguments().length === argIndex + 1) {
      const extractResult = clean
        ? ''
        : isExtractorFn(extract) ? extract(...extractArgs) : extract.extract(...extractArgs)
      extractorData.push(typeof extractResult !== 'string' ? extractResult.prependToFile || '""' : '""')
      const argumentText = typeof extractResult === 'string' ? extractResult : extractResult.argument
      const comma = c.getArguments()[argIndex].getNextSiblingIfKind(SyntaxKind.CommaToken)
      if (comma) {
        comma.replaceWithText('')
      }
      c.getArguments()[argIndex].replaceWithText(argumentText)
      replaced.push({ file: sourceFile.getFilePath(), replacement: argumentText, firstTime: false })
    }

      // strange situation: our argument bucket and the next one are already filled up.
    else if (c.getArguments().length > argIndex + 1) {
      extractorData.push('""')
      console.error(
        `more than 1 argument found in file ${sourceFile.getFilePath()} function call expression ${c.getText()}`
      )
    }

    // more strange cases? ignore
    else {
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
