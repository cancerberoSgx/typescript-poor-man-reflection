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
* [prependVariableModePlace](_types_.replacefilefunctioncalloptions.md#prependvariablemodeplace)

---

## Properties

<a id="clean"></a>

### `<Optional>` clean

**● clean**: *`undefined` \| `false` \| `true`*

*Defined in [types.ts:86](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L86)*

If true the tool will clean all arguments in matched function call expressions

___
<a id="extractordatafolderfilename"></a>

### `<Optional>` extractorDataFolderFileName

**● extractorDataFolderFileName**: *`undefined` \| `string`*

*Defined in [types.ts:132](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L132)*

The name of the file to store extractor data in case `extractorDataMode` is `'folderFile'`. By default it will be named `__poor_man_reflection__.ts`. See \[\['folderFile'\]\]

___
<a id="extractordatamode"></a>

### `<Optional>` extractorDataMode

**● extractorDataMode**: *[ExtractorDataMode](../modules/_types_.md#extractordatamode)*

*Defined in [types.ts:126](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L126)*

Mode in which the extractor data is stored in the source code.

If `prependVariable`, an array variable will be prepended at the top of the same file and function calls will access the array directly.

If `folderFile`, the data is stored in a separate file that exports a function to access to array. An import declaration will be added to the file and function calls will use the imported function to access the array. There will be one of these files per folder with the name given by option `extractorDataFolderFileName` that will contain the data of all this folder's immediate children.

If `asArgument` then the whole thing will be passed as parameter in the extractor call expression (this is mostly useful for debugging since it will pollute the code a lot)

___
<a id="extractordatavariablename"></a>

### `<Optional>` extractorDataVariableName

**● extractorDataVariableName**: *`undefined` \| `string`*

*Defined in [types.ts:106](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L106)*

In case custom `extracts` return `prependToFile` property, they also can configure the name of the array variable prepended in the file that contains all values. By default it's `__extractor_prepend__`.

___
<a id="extracts"></a>

### `<Optional>` extracts

**● extracts**: *`undefined` \| `object`*

*Defined in [types.ts:91](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L91)*

Custom extracts declaring custom function names

___
<a id="modulespecifier"></a>

### `<Optional>` moduleSpecifier

**● moduleSpecifier**: *`undefined` \| `string`*

*Defined in [types.ts:100](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L100)*

Custom name of the import module specifier from which the target function in the function call expression needs to be imported in order to perform the arguments modification. Default value: `typescript-poor-man-reflection`.

___
<a id="prependvariablemodeplace"></a>

### `<Optional>` prependVariableModePlace

**● prependVariableModePlace**: *"top" \| "bottom"*

*Defined in [types.ts:111](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L111)*

in case mode `prependToFile` is selected where to create the variable declarations, on top of the file or at the bottom=. Default:TODO

___

