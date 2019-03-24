import { quote } from 'misc-utils-of-mine-generic'
import Project, { CallExpression, SourceFile, SyntaxKind } from 'ts-morph'
import { extractCallExpressions } from './astUtil'
import { extractorGetterBuilder, getFileId, writeExtractorData } from './extractorData'
import { defaultExtractors, isExtractorClass, isExtractorFn } from './extractors'
import { defaultOptions, getFullOptions } from './replaceProjectFunctionCall'
import { ExtractorGetter, FileVariableAccessor, Replacement, ReplaceProjectFunctionCallOptions } from './types'

/**
 * JavaScript API to replace arguments of all function expression calls in given (ts-simple-ast SourceFile)
 * file that match given options. See  `ReplaceFunctionCallsOptions`.
 */
export function replaceFileFunctionCall(
  sourceFile: SourceFile,
  options_: Partial<ReplaceProjectFunctionCallOptions> & { project: Project }
): (Replacement | undefined)[] {
  const options = getFullOptions(options_)

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
  // let callExpressions = extractCallExpressions(
  //   options.project.getSourceFile(sourceFile.getFilePath())!,
  //   moduleSpecifier,
  //   Object.keys(extracts)
  // )
  // let callExpressionNames = callExpressions.map(c => c.getFirstChildByKind(SyntaxKind.Identifier)!.getText())
  let extractorData: string[] = []
  const fileId = getFileId(options.project.getSourceFile(sourceFile.getFilePath())!, {
    extractorDataFolderFileName
  })

  // callExpressionNames.forEach(extractName => {
  // const extract = extracts[extractName]
  Object.keys(options.extracts).forEach(extractName => {
    const extract = options.extracts[extractName]
    if (isExtractorClass(extract) && extract.beforeExtract) {
      extract.beforeExtract(sourceFile.getFilePath(), extractName, options)
    }
  })

  // })

  // at beforeExtract somebody (Register()) could add a new extractor or perhaps the AST was modified so we
  // query the call expressions again
  let callExpressions = extractCallExpressions(
    options.project.getSourceFile(sourceFile.getFilePath())!,
    moduleSpecifier,
    Object.keys(extracts)
  )
  let callExpressionNames = callExpressions.map(c => c.getFirstChildByKind(SyntaxKind.Identifier)!.getText())

  callExpressions.forEach((c, index) => {
    const functionName = c.getFirstChildByKind(SyntaxKind.Identifier)!.getText()
    const extract = extracts[functionName]
    const fileVariableAccessor: FileVariableAccessor = (name: string, value?: string) => {
      if (value) {
        // called at compile time
        fileVariables[`${fileId}_${name}`] = value
      } else {
        // called at run-time
        return `fileVariables[${quote(`${fileId}_${name}`)}]`
      }
    }
    if (!extract) {
      extractorData.push('""')
    }
    const extractorConfig = typeof extract.getConfig !== 'undefined' ? extract.getConfig() : {}
    const argIndex = typeof extractorConfig.freeArgumentNumber !== 'undefined' ? extractorConfig.freeArgumentNumber : 0

    var extractArgs: [
      CallExpression,
      number,
      ExtractorGetter,
      Required<ReplaceProjectFunctionCallOptions>,
      FileVariableAccessor
    ] = [c, index, extractorGetterBuilder(options, index, sourceFile, c), options, fileVariableAccessor]

    // Heads up: argIndex is the argument index we can use for data. Previous arguments are owned by the
    // extractor for its own options/whatever.

    // console.log(Object.keys(options.extracts));

    if (extract && c.getArguments().length < argIndex && !clean) {
      // extractor owned arguments are empty - we need to fill them up in order to add ours.
      for (let i = 0; i < argIndex; i++) {
      debugger

        c.addArgument(extractorConfig.unusedArgumentDefaultValue || 'null as any')
      }
    }

    if (extract && c.getArguments().length === argIndex && !clean) {
      // our argument is empty - this is the first time the tool is called.
      const extractResult = isExtractorFn(extract) ? extract(...extractArgs) : extract.extract(...extractArgs)
      extractorData.push(typeof extractResult !== 'string' ? extractResult.prependToFile || '""' : '""')
      const argumentText = typeof extractResult === 'string' ? extractResult : extractResult.argument
      debugger
      c.addArgument(argumentText)
      replaced.push({ file: sourceFile.getFilePath(), replacement: argumentText, firstTime: true })
    } else if (c.getArguments().length === argIndex + 1) {
      // our argument has a value - we replace it or remove if --clean
      const extractResult = clean
        ? ''
        : isExtractorFn(extract)
        ? extract(...extractArgs)
        : extract.extract(...extractArgs)
      extractorData.push(typeof extractResult !== 'string' ? extractResult.prependToFile || '""' : '""')
      const argumentText = typeof extractResult === 'string' ? extractResult : extractResult.argument
      const comma = c.getArguments()[argIndex].getNextSiblingIfKind(SyntaxKind.CommaToken)
      if (comma) {
        comma.replaceWithText('')
      }

      c.getArguments()[argIndex].replaceWithText(argumentText)
      replaced.push({ file: sourceFile.getFilePath(), replacement: argumentText, firstTime: false })
    } else if (c.getArguments().length > argIndex + 1) {
      debugger

      // strange situation: our argument bucket and the next one are already filled up.
      extractorData.push('""')
      console.error(
        `more than 1 argument found in file ${sourceFile.getFilePath()} function call expression ${c.getText()}`
      )
    } else {
      // ignore other cases
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

  callExpressionNames.forEach(extractName => {
    const extract = extracts[extractName]
    if (isExtractorClass(extract) && extract.afterExtract) {
      extract.afterExtract(sourceFile.getFilePath(), extractName, options)
    }
  })

  return replaced
}
