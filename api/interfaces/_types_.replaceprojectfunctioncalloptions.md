[typescript-poor-man-reflection](../README.md) > ["types"](../modules/_types_.md) > [ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)

# Interface: ReplaceProjectFunctionCallOptions

Options for the command line tool, inherit from core options and add some extra ones. the default matching function call expressions will be those who have an import like `import TypeText from 'typescript-poor-man-reflection'` and a function call using that name `TypeText`. But you can make this configurable and reuse the tool in your own projects with other names.

## Hierarchy

 [ReplaceFileFunctionCallOptions](_types_.replacefilefunctioncalloptions.md)

**↳ ReplaceProjectFunctionCallOptions**

## Index

### Properties

* [clean](_types_.replaceprojectfunctioncalloptions.md#clean)
* [debug](_types_.replaceprojectfunctioncalloptions.md#debug)
* [extraOptionsHelp](_types_.replaceprojectfunctioncalloptions.md#extraoptionshelp)
* [extractorDataFolderFileName](_types_.replaceprojectfunctioncalloptions.md#extractordatafolderfilename)
* [extractorDataMode](_types_.replaceprojectfunctioncalloptions.md#extractordatamode)
* [extractorDataVariableName](_types_.replaceprojectfunctioncalloptions.md#extractordatavariablename)
* [extracts](_types_.replaceprojectfunctioncalloptions.md#extracts)
* [filePattern](_types_.replaceprojectfunctioncalloptions.md#filepattern)
* [help](_types_.replaceprojectfunctioncalloptions.md#help)
* [moduleSpecifier](_types_.replaceprojectfunctioncalloptions.md#modulespecifier)
* [out](_types_.replaceprojectfunctioncalloptions.md#out)
* [project](_types_.replaceprojectfunctioncalloptions.md#project)
* [register](_types_.replaceprojectfunctioncalloptions.md#register)
* [tsConfigFilePath](_types_.replaceprojectfunctioncalloptions.md#tsconfigfilepath)

---

## Properties

<a id="clean"></a>

### `<Optional>` clean

**● clean**: *`undefined` \| `false` \| `true`*

*Inherited from [ReplaceFileFunctionCallOptions](_types_.replacefilefunctioncalloptions.md).[clean](_types_.replacefilefunctioncalloptions.md#clean)*

*Defined in [types.ts:81](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8e8f86f/src/types.ts#L81)*

If true the tool will clean all arguments in matched function call expressions

___
<a id="debug"></a>

### `<Optional>` debug

**● debug**: *`undefined` \| `false` \| `true`*

*Defined in [types.ts:28](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8e8f86f/src/types.ts#L28)*

Prints details in stdout, default is false

___
<a id="extraoptionshelp"></a>

### `<Optional>` extraOptionsHelp

**● extraOptionsHelp**: *`undefined` \| `object`*

*Defined in [types.ts:44](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8e8f86f/src/types.ts#L44)*

for third party using it programmatically, they can declare new CLI options and their descriptions so they appear with --help

___
<a id="extractordatafolderfilename"></a>

### `<Optional>` extractorDataFolderFileName

**● extractorDataFolderFileName**: *`undefined` \| `string`*

*Inherited from [ReplaceFileFunctionCallOptions](_types_.replacefilefunctioncalloptions.md).[extractorDataFolderFileName](_types_.replacefilefunctioncalloptions.md#extractordatafolderfilename)*

*Defined in [types.ts:123](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8e8f86f/src/types.ts#L123)*

The name of the file to store extractor data in case `extractorDataMode` is `'folderFile'`. By default it will be named `__poor_man_reflection__.ts`. See \[\['folderFile'\]\]

___
<a id="extractordatamode"></a>

### `<Optional>` extractorDataMode

**● extractorDataMode**: *[ExtractorDataMode](../modules/_types_.md#extractordatamode)*

*Inherited from [ReplaceFileFunctionCallOptions](_types_.replacefilefunctioncalloptions.md).[extractorDataMode](_types_.replacefilefunctioncalloptions.md#extractordatamode)*

*Defined in [types.ts:117](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8e8f86f/src/types.ts#L117)*

Mode in which the extractor data is stored in the source code.

If `prependVariable`, an array variable will be prepended at the top of the same file and function calls will access the array directly.

If `folderFile`, the data is stored in a separate file that exports a function to access to array. An import declaration will be added to the file and function calls will use the imported function to access the array. There will be one of these files per folder with the name given by option `extractorDataFolderFileName` that will contain the data of all this folder's immediate children.

If `asArgument` then the whole thing will be passed as parameter in the extractor call expression (this is mostly useful for debugging since it will pollute the code a lot)

___
<a id="extractordatavariablename"></a>

### `<Optional>` extractorDataVariableName

**● extractorDataVariableName**: *`undefined` \| `string`*

*Inherited from [ReplaceFileFunctionCallOptions](_types_.replacefilefunctioncalloptions.md).[extractorDataVariableName](_types_.replacefilefunctioncalloptions.md#extractordatavariablename)*

*Defined in [types.ts:101](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8e8f86f/src/types.ts#L101)*

In case custom `extracts` return `prependToFile` property, they also can configure the name of the array variable prepended in the file that contains all values. By default it's `__extractor_prepend__`.

___
<a id="extracts"></a>

### `<Optional>` extracts

**● extracts**: *`undefined` \| `object`*

*Inherited from [ReplaceFileFunctionCallOptions](_types_.replacefilefunctioncalloptions.md).[extracts](_types_.replacefilefunctioncalloptions.md#extracts)*

*Defined in [types.ts:86](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8e8f86f/src/types.ts#L86)*

Custom extracts declaring custom function names

___
<a id="filepattern"></a>

### `<Optional>` filePattern

**● filePattern**: *`undefined` \| `string`*

*Defined in [types.ts:51](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8e8f86f/src/types.ts#L51)*

If provided it will only modify files that match the given glob

___
<a id="help"></a>

### `<Optional>` help

**● help**: *`undefined` \| `false` \| `true`*

*Defined in [types.ts:38](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8e8f86f/src/types.ts#L38)*

Shows usage help and exit.

___
<a id="modulespecifier"></a>

### `<Optional>` moduleSpecifier

**● moduleSpecifier**: *`undefined` \| `string`*

*Inherited from [ReplaceFileFunctionCallOptions](_types_.replacefilefunctioncalloptions.md).[moduleSpecifier](_types_.replacefilefunctioncalloptions.md#modulespecifier)*

*Defined in [types.ts:95](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8e8f86f/src/types.ts#L95)*

Custom name of the import module specifier from which the target function in the function call expression needs to be imported in order to perform the arguments modification. Default value: `typescript-poor-man-reflection`.

___
<a id="out"></a>

### `<Optional>` out

**● out**: *`undefined` \| `string`*

*Defined in [types.ts:33](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8e8f86f/src/types.ts#L33)*

Instead of writing existing files, will create a copy of the project, with modified files, at this folder

___
<a id="project"></a>

### `<Optional>` project

**● project**: *`Project`*

*Defined in [types.ts:57](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8e8f86f/src/types.ts#L57)*

Internal

*__internal__*: 

___
<a id="register"></a>

### `<Optional>` register

**● register**: *`undefined` \| `string`*

*Defined in [types.ts:64](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8e8f86f/src/types.ts#L64)*

CLI. Comma separated paths or globs to packages or .ts files (default) exporting [ExportedExtractor](_types_.exportedextractor.md) objects will be loaded and available to user code along with the built-in extractors. User code is responsible of importing the function signature and respecting [moduleSpecifier](_types_.replaceprojectfunctioncalloptions.md#modulespecifier)

___
<a id="tsconfigfilepath"></a>

### `<Optional>` tsConfigFilePath

**● tsConfigFilePath**: *`undefined` \| `string`*

*Defined in [types.ts:23](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8e8f86f/src/types.ts#L23)*

Default value `'./tsconfig.json'`. The target `tsconfig.json` file from which the project is loaded. `typescript-poor-man-reflection` will load and parse the project with this identical configuration. All the files referenced by this configuration will be examined, with the exception of .d.ts and external library files.

___

