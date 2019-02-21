import { CallExpression } from 'ts-simple-ast'

export interface Replacement {
  file: string
  replacement: string
  firstTime: boolean
}

/**
 * Options for the command line tool, inherit from core options and add some extra ones. the default matching
 * function call expressions will be those who have an import like `import TypeText from
 * 'typescript-poor-man-reflection'` and a function call using that name `TypeText`. But you can make this
 * configurable and reuse the tool in your own projects with other names.
 */
export interface ReplaceProjectFunctionCallOptions extends ReplaceFileFunctionCallOptions {
  /**
   * Default value `'./tsconfig.json'`. The target `tsconfig.json` file from which the project is loaded.
   * `typescript-poor-man-reflection` will load and parse the project with this identical configuration. All
   * the files referenced by this configuration will be examined, with the exception of .d.ts and external
   * library files.
   */
  tsConfigFilePath?: string

  /**
   * Prints details in stdout, default is false
   */
  debug?: boolean

  /**
   * Instead of writing existing files, will create a copy of the project, with modified files, at this folder
   */
  out?: string

  /**
   * Shows usage help and exit.
   */
  help?: boolean

  /**
   * for third party using it programmatically, they can declare new CLI options and their descriptions so
   * they appear with --help
   */
  extraOptionsHelp?: {
    [optionName: string]: string
  }

  /**
   * If provided it will only modify files that match the given glob
   */
  filePattern?: string
}

/**
 * Options accepted by the low level call `replaceFunctionCall`. They describe the requirements of the
 * function call expressions in order to be changed. typescript-poor-man-reflection will iterate every file in
 * the project and if any function call expression satisfies this options then its attributes it will be
 * changed.
 */
export interface ReplaceFileFunctionCallOptions {
  /**
   * If true the tool will clean all arguments in matched function call expressions
   */
  clean?: boolean

  /**
   * Custom extracts declaring custom function names
   */
  extracts?: {
    [functionName: string]: Extractor
  }

  /**
   * Custom name of the import module specifier from which the target function in the function call expression
   * needs to be imported in order to perform the arguments modification. Default value:
   * `typescript-poor-man-reflection`.
   */
  moduleSpecifier?: string

  /**
   * In case custom `extracts` return `prependToFile` property, they also can configure the name of the array
   * variable prepended in the file that contains all values. By default it's `__extractor_prepend__`.
   */
  extractorDataVariableName?: string

  /**
   * Mode in which the extractor data is stored in the source code.
   *
   * If `prependVariable`, an array variable will be prepended at the top of the same file and function calls
   * will access the array directly.
   *
   * If `folderFile`, the data is stored in a separate file that exports a function to access to
   * array. An import declaration will be added to the file and function calls will use the imported function
   * to access the array. There will be one of these files per folder with the name given by option
   * `extractorDataFolderFileName` that will contain the data of all this folder's immediate children.
   * 
   * If `asStringLiteral` then the whole thing will be passed as a single string in the parameter (this is mostly useful for debugging since it will pollute the code a lot)
   */
  extractorDataMode?: ExtractorDataMode

  /**
   * The name of the file to store extractor data in case `extractorDataMode` is `'folderFile'`. By
   * default it will be named `__poor_man_reflection__.ts`. See [['folderFile']]
   */
  extractorDataFolderFileName?: string
}

interface ExtractorConfig{
  /** if extractor uses first (0-th) argument for their private API they would return 1 so WE can use 1-th to pass data */
freeArgumentNumber?: number
/** related to freeArgumentNumber, if we detect no arguments in extractor reserved args, we will need to fill them with dummy values, so here we request which type. */
unusedArgumentDefaultValue?: any
}
export interface ExtractorClass {
  getConfig?(): ExtractorConfig
  extract(options: ExtractOptions): ReturnType<ExtractorFn>
} 
export interface ExtractOptions{
  n: CallExpression,
  index: number,
  getter: ExtractorGetter,
  options: Partial<ReplaceProjectFunctionCallOptions>,
  variableAccessor?: FileVariableAccessor
}
export type Extractor  = (Partial<ExtractorClass>&ExtractorFn)|(ExtractorClass&{extract: ExtractorFn})
export type ExtractorFn = (
  n: CallExpression,
  index: number,
  getter: ExtractorGetter,
  options: Partial<ReplaceProjectFunctionCallOptions>,
  variableAccessor?: FileVariableAccessor
) => ExtractorResult | string

export interface ExtractorResult {
  argument: string
  prependToFile?: string
}

export type ExtractorGetter = (index: number) => string

export type ExtractorDataMode = 'prependVariable' | 'folderFile'|'asStringLiteral'
/** setter / getter for variables that are common between same function calls of same file or even different function files (to save data file space). The getter actually returns (at compile time) an expression that when evaluated will return the variable value (at runtime)*/
export type FileVariableAccessor = (name: string, value?: string) => string | undefined
