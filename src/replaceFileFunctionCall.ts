import { quote } from 'misc-utils-of-mine-generic'
import Project, { CallExpression, SourceFile, SyntaxKind } from 'ts-morph'
import { extractCallExpressions } from './astUtil'
import { extractorGetterBuilder, getFileId, writeExtractorData } from './extractorData'
import { defaultExtractors, isExtractorClass, isExtractorFn } from './extractors'
import { defaultOptions, getFullOptions } from './replaceProjectFunctionCall'
import {
  ExtractorGetter,
  FileVariableAccessor,
  Replacement,
  ReplaceProjectFunctionCallOptions,
  FileVariableDefinition,
  FileVariableAccessorNamePredicate,
  FileVariablesCompileTimeDefinition
} from './types'

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

  const fileVariables: {[key: string]:string | undefined} = {}

  const fileVariablesCompileTime: FileVariablesCompileTimeDefinition = {}

  const replaced: Replacement[] = []
  let extractorData: string[] = []
  const fileId = getFileId(options.project.getSourceFile(sourceFile.getFilePath())!, {
    extractorDataFolderFileName
  })

  Object.keys(options.extracts).forEach(extractName => {
    const extract = options.extracts[extractName]
    if (isExtractorClass(extract) && extract.beforeExtract) {
      extract.beforeExtract(sourceFile.getFilePath(), extractName, options)
    }
  })

  // at beforeExtract somebody (Register()) could add a new extractor or perhaps the AST was modified so we
  // query the call expressions again
  let callExpressions = extractCallExpressions(
    options.project.getSourceFile(sourceFile.getFilePath())!,
    moduleSpecifier,
    Object.keys(extracts)
  )
  let callExpressionNames = callExpressions.map(c => c.getFirstChildByKind(SyntaxKind.Identifier)!.getText())

  // const thisFileCurrentVariables : (FileVariableDefinition&{variableId: string})[] = []
  callExpressions.forEach((c, index) => {
    const functionName = c.getFirstChildByKind(SyntaxKind.Identifier)!.getText()
    const extract = extracts[functionName]

    let fileVariableAccessor: FileVariableAccessor ={
      runtime(
        _accessorNamePredicate: string | FileVariableAccessorNamePredicate,
        index: number,
        value?: string,
        // currentCompileTimeVariables?: boolean
      )  {
        // const index = context.index
        // if (currentCompileTimeVariables) {
        //   return fileVariables as any
        //   // return thisFileCurrentVariables as any
        // }
        const name = typeof _accessorNamePredicate === 'string' ? _accessorNamePredicate : _accessorNamePredicate.name
        if (!name) {
          throw `Name is mandatory on any way as name or function predicate string`
        }
        const functionPredicate =
          typeof _accessorNamePredicate === 'string' ? undefined : _accessorNamePredicate.functionPredicate || undefined
        const variableId = `${fileId}_${name}_${index}`
        if (value) {
          // SETTER - called at compile time
          fileVariables[variableId] = `{value: ${value}, name: ${quote(name)}, index: ${index}, extractorName: ${quote(functionName)}}`
                     
        }
        // thisFileCurrentVariables.push({variableId, value, name, index,  extractorName: functionName})
       else {
        // GETTER - called at run-time
        return `${
          functionPredicate
            ? `Object.values(fileVariables).find(${functionPredicate})`
            : `fileVariables[${quote(variableId)}]`
          }`
    }
      },


  // compileTime<T=any>(value?: T):FileVariablesCompileTimeDefinition{
  compileTime<T>(value?: FileVariableDefinition&{ compileTimeData: T }):FileVariablesCompileTimeDefinition|undefined{

    if(value) {
      const variableId = `${fileId}_${value.name}_${value.index}`
      fileVariablesCompileTime[variableId] ={
       ...value
      }
    }
    else {
      return fileVariablesCompileTime
    }
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

    // remove the (non serialize) fileVariables.compileTime property
// Object.values(fileVariables).forEach(v=>{
//   if(v && v.compileTimeData){
//     delete v.compileTimeData
//   }
// })
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
