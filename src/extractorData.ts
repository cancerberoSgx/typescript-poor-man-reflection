import { TypeGuards, SyntaxKind, SourceFile, CallExpression, ArrayLiteralExpression } from 'ts-simple-ast'
import {
  ReplaceFileFunctionCallOptions,
  ExtractorGetter,
  ExtractorDataMode,
  ReplaceProjectFunctionCallOptions
} from './types'
import {
  array2DInsert,
  objectLiteralInsert,
  removeDataFolderFileNameImportDeclaration,
  removePrependVariableDeclaration
} from './astUtil'
import { includeFile, defaultOptions, getFullOptions } from './replaceProjectFunctionCall'

/**
 * Responsible of reading the extractor data. It provides a getter function that returns a JS expression that
 * should evaluate in the data value corresponding to given index, sourcefile, extractor.
 */
export function extractorGetterBuilder(
  options: ReplaceFileFunctionCallOptions & { extractorDataFolderFileName: string; filePattern?: string },
  index: number,
  sourceFile: SourceFile,
  c: CallExpression
): ExtractorGetter {
  if (!options.extractorDataMode || options.extractorDataMode === 'prependVariable') {
    return (index: number) => `${options.extractorDataVariableName}[${index}]`
  } else if (options.extractorDataMode === 'folderFile') {
    const fileId = getFileId(sourceFile, options)
    return (index: number) => `get(${fileId}, ${index})`
  } else if (options.extractorDataMode === 'asStringLiteral') {
    // do nothing
    return (index: number) => ``
  } else {
    throw 'extractorDataMode option invalid ' + options.extractorDataMode
  }
}
/**
 * Responsible of writing extractor data according to extractorDataMode. instead of fileName as string, we use
 * the file index  in the directory's children sorted alphabetically so the get() expressions are smaller.
 * Instead of `Name<T>(get('myCustomComponentTest.tsx',9))` we just have  `Name<T>(get(2,9))`
 */
export function writeExtractorData(
  sourceFile: SourceFile,
  options_: ReplaceFileFunctionCallOptions = defaultOptions,
  callExpressions: CallExpression[],
  prependToFile: string[],
  fileVariables: { [name: string]: string }
) {
  const options = getFullOptions(options_)

  // const options: Required<ReplaceFileFunctionCallOptions> = { ...defaultOptions, ...options_ }
  if (sourceFile.getBaseName().includes(options.extractorDataFolderFileName)) {
    return
  }

  // no matter in which mode we are, we always remove the variable declaration added
  // by 'prependVariable' and the import declaration added by FolderFile
  removeDataFolderFileNameImportDeclaration(sourceFile, options)
  removePrependVariableDeclaration(sourceFile, options)

  if (!options.extractorDataMode || options.extractorDataMode === 'prependVariable') {
    if (!options.clean && callExpressions.length) {
      sourceFile.insertStatements(0, `const ${options.extractorDataVariableName} = [${prependToFile.join(', ')}]`)
    }
  } else if (options.extractorDataMode === 'folderFile') {
    if (!options.clean) {
      const { dataFile, fileId } = ensureDataFile(
        sourceFile,
        { ...options, extractorDataFolderFileName: options.extractorDataFolderFileName! },
        prependToFile,
        fileVariables
      )
    }
    if (!options.clean && callExpressions.length) {
      sourceFile.addImportDeclaration({
        moduleSpecifier: `./${options.extractorDataFolderFileName}`,
        namedImports: ['get']
      })
    }
  }
}

function ensureDataFile(
  sourceFile: SourceFile,
  options: ReplaceProjectFunctionCallOptions,
  prependToFile: string[],
  fileVariables: { [name: string]: string }
) {
  let dataFile = sourceFile
    .getDirectory()
    .getSourceFiles()
    .find(f => f.getBaseNameWithoutExtension() === options.extractorDataFolderFileName)
  if (!dataFile) {
    dataFile = sourceFile.getDirectory().createSourceFile(
      `${options.extractorDataFolderFileName}.ts`,
      `
// FILE CREATED AUTOMATICALLY AT COMPILE TIME. DO NOT MODIFY !

export const fileVariables: {[name:string]:string} = {}

/** 
 * 'data[fileId][index]' is the value of the index-nth extractor call in the fieldId-nth source file where
 * fieldId is the index of the alphabetically ordered list of this directory source file children.
 */
export const data: any[][] = []

export function get(fileId: number, index: number) {
  return data[fileId] && data[fileId][index]
}
      `.trim()
    )
    dataFile.saveSync()
  }

  const fileId = getFileId(sourceFile, { extractorDataFolderFileName: options.extractorDataFolderFileName! })
  const v = dataFile.getVariableDeclarationOrThrow('data')
  const init = v.getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression)
  array2DInsert(init, fileId, -1, prependToFile)

  const fileVariablesV = dataFile.getVariableDeclarationOrThrow('fileVariables')
  const fileVariablesInit = fileVariablesV.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression)
  objectLiteralInsert(fileVariablesInit, fileId, fileVariables)

  dataFile.saveSync()

  return { dataFile, fileId }
}

/** TODO: memoize */
export function getFileId(
  sourceFile: SourceFile,
  { extractorDataFolderFileName }: { extractorDataFolderFileName: string }
) {
  const d = sourceFile.getDirectory()
  const sorted = d
    .getSourceFiles()
    .filter(f => includeFile(f, { extractorDataFolderFileName }))
    .map(f => f.getBaseName())
    .sort()
  const fileId = sorted.indexOf(sourceFile.getBaseName())
  if (fileId == -1) {
    throw 'fileId was -1 for file named ' + sourceFile.getFilePath() + ' and dir ' + sourceFile.getDirectory().getPath()
  }
  return fileId
}
