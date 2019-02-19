import {Node, CallExpression} from 'ts-simple-ast'

export interface Replacement {
  file: string
  replacement: string
  firstTime: boolean
}

/**
 * Options for the command line tool, inherit from core options and add some extra ones. the default matching
 * function call expressions will be those who have an import like `import TypeText from 'get-type-text'` and
 * a function call using that name `TypeText`. But you can make this configurable and reuse the tool in your
 * own projects with other names.
 */
export interface Config extends ReplaceFunctionCallsOptions {
  /** Default value `'./tsconfig.json'`. The target `tsconfig.json` file from which the project is loaded.
   * `get-type-text` will load and parse the project with this identical configuration. All the files
   * referenced by this configuration will be examined, with the exception of .d.ts and external library
   * files. */
  tsConfigFilePath?: string

  /** Prints details in stdout, default is false */
  debug?: boolean

  /**
   * Instead of writing existing files, will create a copy of the project, with modified files, at this folder
   */
  out?: string

  /** Shows usage help and exit. */
  help?: string
}

/**
 * Options accepted by the low level call `replaceFunctionCall`. They describe the requirements of the
 * function call expressions in order to be changed. get-type-text will iterate every file in the project and
 * if any function call expression satisfies this options then its attributes it will be changed.
 */
export interface ReplaceFunctionCallsOptions {
  /**
   * If true the tool will clean all arguments in matched function call expressions
   */
  clean?: boolean

  /**
   * Custom extracts declaring custom function names
   */
  extracts?: {[functionName: string]: (n: CallExpression) => string}

  /**
   * Custom name of the import module specifier from which the target function in the
   * function call expression needs to be imported in order to perform the arguments modification.
   * Default value: `get-type-text`.
   */
  moduleSpecifier?: string
}
