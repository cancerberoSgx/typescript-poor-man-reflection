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
* [dontSaveGeneratedSourceFiles](_types_.replaceprojectfunctioncalloptions.md#dontsavegeneratedsourcefiles)
* [extraOptionsHelp](_types_.replaceprojectfunctioncalloptions.md#extraoptionshelp)
* [extractorDataFolderFileName](_types_.replaceprojectfunctioncalloptions.md#extractordatafolderfilename)
* [extractorDataMode](_types_.replaceprojectfunctioncalloptions.md#extractordatamode)
* [extractorDataVariableName](_types_.replaceprojectfunctioncalloptions.md#extractordatavariablename)
* [extracts](_types_.replaceprojectfunctioncalloptions.md#extracts)
* [filePattern](_types_.replaceprojectfunctioncalloptions.md#filepattern)
* [help](_types_.replaceprojectfunctioncalloptions.md#help)
* [moduleSpecifier](_types_.replaceprojectfunctioncalloptions.md#modulespecifier)
* [out](_types_.replaceprojectfunctioncalloptions.md#out)
* [prependVariableModePlace](_types_.replaceprojectfunctioncalloptions.md#prependvariablemodeplace)
* [project](_types_.replaceprojectfunctioncalloptions.md#project)
* [register](_types_.replaceprojectfunctioncalloptions.md#register)
* [tsConfigFilePath](_types_.replaceprojectfunctioncalloptions.md#tsconfigfilepath)

---

## Properties

<a id="clean"></a>

### `<Optional>` clean

**● clean**: *`undefined` \| `false` \| `true`*

*Inherited from [ReplaceFileFunctionCallOptions](_types_.replacefilefunctioncalloptions.md).[clean](_types_.replacefilefunctioncalloptions.md#clean)*

*Defined in [types.ts:86](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L86)*

If true the tool will clean all arguments in matched function call expressions

___
<a id="debug"></a>

### `<Optional>` debug

**● debug**: *`undefined` \| `false` \| `true`*

*Defined in [types.ts:27](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L27)*

Prints details in stdout, default is false

___
<a id="dontsavegeneratedsourcefiles"></a>

### `<Optional>` dontSaveGeneratedSourceFiles

**● dontSaveGeneratedSourceFiles**: *`undefined` \| `false` \| `true`*

*Defined in [types.ts:69](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L69)*

*__internal__*: won't save generated data source files, like `folderFile`'s to disk. This is helpful for testing.

___
<a id="extraoptionshelp"></a>

### `<Optional>` extraOptionsHelp

**● extraOptionsHelp**: *`undefined` \| `object`*

*Defined in [types.ts:43](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L43)*

for third party using it programmatically, they can declare new CLI options and their descriptions so they appear with --help

___
<a id="extractordatafolderfilename"></a>

### `<Optional>` extractorDataFolderFileName

**● extractorDataFolderFileName**: *`undefined` \| `string`*

*Inherited from [ReplaceFileFunctionCallOptions](_types_.replacefilefunctioncalloptions.md).[extractorDataFolderFileName](_types_.replacefilefunctioncalloptions.md#extractordatafolderfilename)*

*Defined in [types.ts:132](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L132)*

The name of the file to store extractor data in case `extractorDataMode` is `'folderFile'`. By default it will be named `__poor_man_reflection__.ts`. See \[\['folderFile'\]\]

___
<a id="extractordatamode"></a>

### `<Optional>` extractorDataMode

**● extractorDataMode**: *[ExtractorDataMode](../modules/_types_.md#extractordatamode)*

*Inherited from [ReplaceFileFunctionCallOptions](_types_.replacefilefunctioncalloptions.md).[extractorDataMode](_types_.replacefilefunctioncalloptions.md#extractordatamode)*

*Defined in [types.ts:126](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L126)*

Mode in which the extractor data is stored in the source code.

If `prependVariable`, an array variable will be prepended at the top of the same file and function calls will access the array directly.

If `folderFile`, the data is stored in a separate file that exports a function to access to array. An import declaration will be added to the file and function calls will use the imported function to access the array. There will be one of these files per folder with the name given by option `extractorDataFolderFileName` that will contain the data of all this folder's immediate children.

If `asArgument` then the whole thing will be passed as parameter in the extractor call expression (this is mostly useful for debugging since it will pollute the code a lot)

___
<a id="extractordatavariablename"></a>

### `<Optional>` extractorDataVariableName

**● extractorDataVariableName**: *`undefined` \| `string`*

*Inherited from [ReplaceFileFunctionCallOptions](_types_.replacefilefunctioncalloptions.md).[extractorDataVariableName](_types_.replacefilefunctioncalloptions.md#extractordatavariablename)*

*Defined in [types.ts:106](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L106)*

In case custom `extracts` return `prependToFile` property, they also can configure the name of the array variable prepended in the file that contains all values. By default it's `__extractor_prepend__`.

___
<a id="extracts"></a>

### `<Optional>` extracts

**● extracts**: *`undefined` \| `object`*

*Inherited from [ReplaceFileFunctionCallOptions](_types_.replacefilefunctioncalloptions.md).[extracts](_types_.replacefilefunctioncalloptions.md#extracts)*

*Defined in [types.ts:91](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L91)*

Custom extracts declaring custom function names

___
<a id="filepattern"></a>

### `<Optional>` filePattern

**● filePattern**: *`undefined` \| `string`*

*Defined in [types.ts:50](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L50)*

If provided it will only modify files that match the given glob

___
<a id="help"></a>

### `<Optional>` help

**● help**: *`undefined` \| `false` \| `true`*

*Defined in [types.ts:37](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L37)*

Shows usage help and exit.

___
<a id="modulespecifier"></a>

### `<Optional>` moduleSpecifier

**● moduleSpecifier**: *`undefined` \| `string`*

*Inherited from [ReplaceFileFunctionCallOptions](_types_.replacefilefunctioncalloptions.md).[moduleSpecifier](_types_.replacefilefunctioncalloptions.md#modulespecifier)*

*Defined in [types.ts:100](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L100)*

Custom name of the import module specifier from which the target function in the function call expression needs to be imported in order to perform the arguments modification. Default value: `typescript-poor-man-reflection`.

___
<a id="out"></a>

### `<Optional>` out

**● out**: *`undefined` \| `string`*

*Defined in [types.ts:32](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L32)*

Instead of writing existing files, will create a copy of the project, with modified files, at this folder

___
<a id="prependvariablemodeplace"></a>

### `<Optional>` prependVariableModePlace

**● prependVariableModePlace**: *"top" \| "bottom"*

*Inherited from [ReplaceFileFunctionCallOptions](_types_.replacefilefunctioncalloptions.md).[prependVariableModePlace](_types_.replacefilefunctioncalloptions.md#prependvariablemodeplace)*

*Defined in [types.ts:111](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L111)*

in case mode `prependToFile` is selected where to create the variable declarations, on top of the file or at the bottom=. Default:TODO

___
<a id="project"></a>

### `<Optional>` project

**● project**: *`Project`*

*Defined in [types.ts:56](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L56)*

Internal

*__internal__*: 

___
<a id="register"></a>

### `<Optional>` register

**● register**: *`undefined` \| `string`*

*Defined in [types.ts:63](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L63)*

CLI. Comma separated paths or globs to packages or .ts files (default) exporting [ExportedExtractor](_types_.exportedextractor.md) objects will be loaded and available to user code along with the built-in extractors. User code is responsible of importing the function signature and respecting [moduleSpecifier](_types_.replaceprojectfunctioncalloptions.md#modulespecifier)

___
<a id="tsconfigfilepath"></a>

### `<Optional>` tsConfigFilePath

**● tsConfigFilePath**: *`undefined` \| `string`*

*Defined in [types.ts:22](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L22)*

Default value `'./tsconfig.json'`. The target `tsconfig.json` file from which the project is loaded. `typescript-poor-man-reflection` will load and parse the project with this identical configuration. All the files referenced by this configuration will be examined, with the exception of .d.ts and external library files.

___

