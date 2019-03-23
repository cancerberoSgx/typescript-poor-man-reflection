# typescript-poor-man-reflection 

An unconventional way of getting TypeScript code information (like types), as text, at runtime

# Why ?

 * https://github.com/Microsoft/TypeScript/issues/14419
 * I need to get a type text at runtime and I cannot hardcode it as string since it will get outdated on code refactors
 * I don't want to use a tsc wrapper like ttypescript
 
# What ?

A preprocessor tool to modify input TypeScript files embedding requested types or nodes text in the code. Supports several extractor implementations. See [Default Extractors](api/modules/_extractors_.md#defaultextractors). 

The tool **will modify** TypeScript source files calling the library's functions, embedding referenced node's text in the source file. It should be called before `tsc` or before npm test, and it can be called with the option `--clean` to clean-up source files (for example before commit or after `npm test`).

**Cost**: You need to pre-process your TS files *before* compiling them with tsc in order for this to work and they will be modified. 

## Snippets

### ReadFiles

Embed files in your source, at compile time: 

```ts
// assets.ts - contains example files embedded from fs at compile time:
// files will contain an array of objects {name: string, content: string}
import { ReadFiles } from 'typescript-poor-man-reflection'
export files = ReadFiles({path: './src/examples/example*.ts'})
```

### TypeText

Be able to get types text so we don't hardcode them as strings. Taken from tsd-check-runtime - its sibling project - using jest matchers.

```ts
import { Type } from 'tsd-check-runtime';
import {UnionOf} from '../util'
interface A {}
describe('toMatchType', () => {
  var testVariable1: B = { b: 8 }
  it('using toMatchType against types, nodes and strings', () => {
    // hardcoded strings (no reflection - Bad will get outdated on refactor)
    expect('a').not.toMatchType(`UnionOf<[1, false]>`)
    // reflection - referencing nodes from several scopes
    expect(1).toMatchType(Type<UnionOf<[1, false]>>())
    interface B extends A { b: number }
    expect(testVariable1).toMatchType(Type<B>, { exactly: true })
    expect(testVariable1).toMatchType('B')
    interface II {
      foo: Date[][]
      m(): string[]
    }
    const var2 = number[]
    expect((II, mReturnType) =>
      `var a: ${II} = {foo: [], m() { return null as any as ${mReturnType} } }`
    ).not.toCompile(Type<II>(), Type<typeof var2>())
  })
})
```

As you can see I'm referencing types as text, declared in any scope. A call like `Type<typeof var2>()`, in this case, will return the string `"Type<UnionOf<[1, false]>>()"`. That's tsd-check-runtime project's implementation specialized for testing, builded un top of this framework which is easy to extend. 


## Usage

```sh
npm install -D typescript-poor-man-reflection 
```

We will use one of the built-in tools, `TypeText` that extracts given type text as a string. 

```ts
import { TypeText } from 'typescript-poor-man-reflection'
type UnionOf<T extends any[]> = T[number]
const x = TypeText<UnionOf<[1, Date[]]>>()
const z = TypeText<UnionOf<[1, boolean | string]>>()
console.log(x, z)
```
Executing the program, gives, as expected:

```sh
$ npx ts-node test.ts 
undefined undefined
```
But now we transpile our code and:
```sh
$ npx typescript-poor-man-reflection
$ npx ts-node test.ts 
UnionOf<[1, Date[]]> UnionOf<[1, boolean | string]>
```
But at a terrible cost, your files have been modified!

## Data Modes
   
 * `folderFile`, the data is stored in a separate file that exports a function to access to
    array. An import declaration will be added to the file and function calls will use the imported function
    to access the array. There will be one of these files per folder with the name given by option
    `extractorDataFolderFileName` that will contain the data of all this folder's immediate children.
   
 * If `prependVariable`, an array variable will be prepended at the top of the same file and function calls
    will access the array directly.

    If `asStringLiteral` then the whole thing will be passed as a single string in the parameter (this is mostly useful for debugging since it will pollute the code a lot)
  

## Options
In general all API options are supported in the CLI as long as their types supported (function options are not supported in the CLI). All options are documented in [ReplaceProjectFunctionCallOptions interface](api/interfaces/_types_.replaceprojectfunctioncalloptions.md).

### CLI API

```
npx typescript-poor-man-reflection
```

### Options: 

 * --clean                       clean up arguments from project previously modified with this tool

 * --tsConfigFilePath            get project configuration from different file than default './tsconfig.json'

 * --extractorDataMode           data extraction mode: 'folderFile': (default) all folder's files data is stored in a single new file (--extractorDataFolderFileName). 'prependVariable' each file data is stored in a variable which is declared at the top of the file (--extractorDataVariableName)

 * --filePattern                 if provided it will only modify files that match the given glob. Example: --filePattern "**/__tests__/**/withTypes/**/*.ts*"
  
 * --moduleSpecifier             extract only from function calls imported from this module
  
 * --extractorDataVariableName   name of the variable for --extractorDataMode==='prependVariable'
  
  
 * --extractorDataFolderFileName name of the file for --extractorDataMode==='folderFile'
  
 * --out                         write modified files in that folder instead of writing files in-place
  
 * --debug                       print debug information while executing

## Workflow

Basically use this only for test projects. Run `npx typescript-poor-man-reflection` before `npm test` or `tsc`, `ts-node`, `jest`, etc. 

To rollback the changes execute the following command. It will clean all the added arguments:

```sh
npx get-type-string --clean
```

# API

 * [Per-project JS API](api/modules/_replaceprojectfunctioncall_.md)
 * [Per-file JS API](api/modules/_replacefilefunctioncall_.md)
 * [CLI main function](api/modules/_main_.md)

All the options apply to the CLI if their type supports it (not functions)


## Motivation

Trying to test types utilities, like:

```ts
import TypeText from 'typescript-poor-man-reflection'
import { UnionOf } from '..'
test('UnionOf transform a tuple into an union type', () => {
  expect(2).not.toMatchType(TypeText<UnionOf<[1, false]>>)
  expect(1).toMatchType(TypeText<UnionOf<[1, false]>>)
})
```

Trying to develop a preprocessing tool to mutate TypeScript and replace certain function call expressions with referenced type text so we have access to this info at runtime. tsd-check is not enough for me since I need to verify types at runtime to reproduce false positives, and isNot helpers. (I cannot reproduce an error at compile time in a test)

## TODO / ISSUES

### fs

FileName<Type>(orNode) to get the file path where a node was declared

## Done

 * Tool configuration - api so I can ThisBlockText<>({withoutParens: true})
 * test if --clean only cleans --filePattern or all - -DONE it cleans only --filePattern
 * test with all the extractors together DONE
 * extractor that perform type inference DONE

## IDEAS

### References<Type>({}, orNode)



### dataMode configurable from call
And more general, by convention, let the first arg to be the configuration object
```
const a = TypeText<SomeType>({mode: 'asStringLiteral'})
```

### Idea: refactor tools programmatically API: example: 

```
 import {Fruit} from './other'
 Rename<Fruit>('Vegetable')
 ```

 ```
function f(){}
Move(f, '../util')
 ```

###  data serialization 

(DONE - see Ls, Cat, ReadFiles)

```// assets.ts
type files = Tuple<Ls('-l', '../assets/**/*.json')> // type ['f1.json', ...]
export jsonfiles = Map<files>(fileName=>({fileName, content: readFileSync(f))}) // array with file contents {fileName, content}[]
```

### IoC

```
const impl = GetImplementation<SomeInterface>({some: 'options'})

class Impl1 implements SomeInterface {...}
RegisterImplementation<SomeInterface>(some, Impl1)
...

