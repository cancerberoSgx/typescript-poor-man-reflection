import { Node, CallExpression } from 'ts-simple-ast';

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
}

/**
 * Options accepted by the low level call `replaceFunctionCall`. They describe the requirements of the
 * function call expressions in order to be changed. get-type-text will iterate every file in the project and
 * if any function call expression satisfies this options then its attributes it will be changed.
 */
export interface ReplaceFunctionCallsOptions {
  /**
   * Default value: `get-type-text`. Name of the import module specifier from which the target function in the
   * function call expression needs to be imported in order to perform the arguments modification.
   */
  moduleSpecifier?: string
  // /** The name of the function in the function call expression */
  // functionNames?: string[]
  /** if true the tool will clean all arguments in matched function call expressions */
  cleanArguments?: boolean

  extracts?: {[functionName:string]: (n: CallExpression)=>string}
}

export const MODULE_SPECIFIER_DEFAULT = 'get-type-text'

export const TYPE_TEXT_FUNCTION_NAME = 'TypeText'
