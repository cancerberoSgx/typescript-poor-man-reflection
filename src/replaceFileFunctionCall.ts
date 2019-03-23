import { quote } from 'misc-utils-of-mine-generic';
import { CallExpression, SourceFile, SyntaxKind } from 'ts-simple-ast';
import { extractCallExpressions } from './astUtil';
import { extractorGetterBuilder, getFileId, writeExtractorData } from './extractorData';
import { defaultExtractors, isExtractorClass, isExtractorFn } from './extractors';
import { defaultOptions, getFullOptions } from './replaceProjectFunctionCall';
import { ExtractorGetter, FileVariableAccessor, Replacement, ReplaceProjectFunctionCallOptions } from './types';

/**
 * JavaScript API to replace arguments of all function expression calls in given (ts-simple-ast SourceFile)
 * file that match given options. See  `ReplaceFunctionCallsOptions`.
 */
export function replaceFileFunctionCall(
  sourceFile: SourceFile,
  options_: Partial<ReplaceProjectFunctionCallOptions> = defaultOptions
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
  let callExpressions = extractCallExpressions(sourceFile, moduleSpecifier, Object.keys(extracts))
  const callExpressionNames = callExpressions.map(c=>c.getFirstChildByKind(SyntaxKind.Identifier)!.getText())
  let extractorData: string[] = []
  const fileId = getFileId(sourceFile, { extractorDataFolderFileName: extractorDataFolderFileName })
  const fullOptions = getFullOptions({ ...options })

  // callExpressions.forEach((c, index) => {
  //   const functionName = c.getFirstChildByKind(SyntaxKind.Identifier)!.getText()
  //   const extract = extracts[functionName]
  //   if (isExtractorClass(extract) && extract.afterWriteExtractorData) {
  //     extract.afterWriteExtractorData(c, index, fullOptions)
  //   }
  // })
  // sourceFile = (options.project && options.project.getSourceFile(sourceFile.getFilePath())) || sourceFile
  // callExpressions = extractCallExpressions(sourceFile, moduleSpecifier, Object.keys(extracts))

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
    ] = [
      c,
      index,
      extractorGetterBuilder(fullOptions, index, sourceFile, c),
      { ...fullOptions, ...options },
      fileVariableAccessor
    ]

    // Heads up: argIndex is the argument index we can use for data. Previous arguments are owned by the extractor for its own options/whatever.

    if (extract && c.getArguments().length < argIndex && !clean) {
      // extractor owned arguments are empty - we need to fill them up in order to add ours.
      for (let i = 0; i < argIndex; i++) {
        c.addArgument(extractorConfig.unusedArgumentDefaultValue || 'null as any')
      }
    }

    if (extract && c.getArguments().length === argIndex && !clean) {
      // our argument is empty - this is the first time the tool is called.
      const extractResult = isExtractorFn(extract) ? extract(...extractArgs) : extract.extract(...extractArgs)
      extractorData.push(typeof extractResult !== 'string' ? extractResult.prependToFile || '""' : '""')
      const argumentText = typeof extractResult === 'string' ? extractResult : extractResult.argument
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
  
  // sourceFile = (options.project && options.project.getSourceFile(sourceFile.getFilePath())) || sourceFile
  // callExpressions = extractCallExpressions(sourceFile, moduleSpecifier, Object.keys(extracts))
  // callExpressions.forEach((c, index) => {
    // const functionName = c.getFirstChildByKind(SyntaxKind.Identifier)!.getText()
    callExpressionNames.forEach(extractName=>{
    const extract = extracts[extractName]
    // console.log('AFTERERE', );
    
    if (isExtractorClass(extract)) {
      extract.afterWriteExtractorData(sourceFile.getFilePath(),extractName, fullOptions)
    }
  })

  // })
  // Object.keys(extracts).forEach(extractName=>{
  //   sourceFile = (options.project && options.project.getSourceFile(sourceFile.getFilePath())) || sourceFile
  //   callExpressions = extractCallExpressions(sourceFile, moduleSpecifier, [extractName])
  //   const extract = extracts[extractName]
  //   // const functionName = c.getFirstChildByKind(SyntaxKind.Identifier)!.getText()
  //   if (isExtractorClass(extract) && extract.afterWriteExtractorData) {
  //         callExpressions.forEach((c, index) => {
  //       extract.afterWriteExtractorData!(c, index, fullOptions)
  //     })
  //   }
  // })
  return replaced
}
