[typescript-poor-man-reflection](../README.md) > ["types"](../modules/_types_.md) > [ReplaceFileFunctionCallOptions](../interfaces/_types_.replacefilefunctioncalloptions.md)

# Interface: ReplaceFileFunctionCallOptions

Options accepted by the low level call `replaceFunctionCall`. They describe the requirements of the function call expressions in order to be changed. typescript-poor-man-reflection will iterate every file in the project and if any function call expression satisfies this options then its attributes it will be changed.

## Hierarchy

**ReplaceFileFunctionCallOptions**

↳  [ReplaceProjectFunctionCallOptions](_types_.replaceprojectfunctioncalloptions.md)

## Index

### Properties

* [clean](_types_.replacefilefunctioncalloptions.md#clean)
* [extractorDataFolderFileName](_types_.replacefilefunctioncalloptions.md#extractordatafolderfilename)
* [extractorDataMode](_types_.replacefilefunctioncalloptions.md#extractordatamode)
* [extractorDataVariableName](_types_.replacefilefunctioncalloptions.md#extractordatavariablename)
* [extracts](_types_.replacefilefunctioncalloptions.md#extracts)
* [moduleSpecifier](_types_.replacefilefunctioncalloptions.md#modulespecifier)

---

## Properties

<a id="clean"></a>

### `<Optional>` clean

**● clean**: *`undefined` \| `false` \| `true`*

*Defined in [types.ts:63](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/types.ts#L63)*

If true the tool will clean all arguments in matched function call expressions

___
<a id="extractordatafolderfilename"></a>

### `<Optional>` extractorDataFolderFileName

**● extractorDataFolderFileName**: *`undefined` \| `string`*

*Defined in [types.ts:104](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/types.ts#L104)*

The name of the file to store extractor data in case `extractorDataMode` is `'folderFile'`. By default it will be named `__poor_man_reflection__.ts`. See \[\['folderFile'\]\]

___
<a id="extractordatamode"></a>

### `<Optional>` extractorDataMode

**● extractorDataMode**: *[ExtractorDataMode](../modules/_types_.md#extractordatamode)*

*Defined in [types.ts:98](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/types.ts#L98)*

Mode in which the extractor data is stored in the source code.

If `prependVariable`, an array variable will be prepended at the top of the same file and function calls will access the array directly.

If `folderFile`, the data is stored in a separate file that exports a function to access to array. An import declaration will be added to the file and function calls will use the imported function to access the array. There will be one of these files per folder with the name given by option `extractorDataFolderFileName` that will contain the data of all this folder's immediate children.

If `asStringLiteral` then the whole thing will be passed as a single string in the parameter (this is mostly useful for debugging since it will pollute the code a lot)

___
<a id="extractordatavariablename"></a>

### `<Optional>` extractorDataVariableName

**● extractorDataVariableName**: *`undefined` \| `string`*

*Defined in [types.ts:83](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/types.ts#L83)*

In case custom `extracts` return `prependToFile` property, they also can configure the name of the array variable prepended in the file that contains all values. By default it's `__extractor_prepend__`.

___
<a id="extracts"></a>

### `<Optional>` extracts

**● extracts**: *`undefined` \| `object`*

*Defined in [types.ts:68](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/types.ts#L68)*

Custom extracts declaring custom function names

___
<a id="modulespecifier"></a>

### `<Optional>` moduleSpecifier

**● moduleSpecifier**: *`undefined` \| `string`*

*Defined in [types.ts:77](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/types.ts#L77)*

Custom name of the import module specifier from which the target function in the function call expression needs to be imported in order to perform the arguments modification. Default value: `typescript-poor-man-reflection`.

___

