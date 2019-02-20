[typescript-poor-man-reflection](../README.md) > ["types"](../modules/_types_.md) > [ReplaceFileFunctionCallOptions](../interfaces/_types_.replacefilefunctioncalloptions.md)

# Interface: ReplaceFileFunctionCallOptions

Options accepted by the low level call `replaceFunctionCall`. They describe the requirements of the function call expressions in order to be changed. typescript-poor-man-reflection will iterate every file in the project and if any function call expression satisfies this options then its attributes it will be changed.

## Hierarchy

**ReplaceFileFunctionCallOptions**

↳  [ReplaceProjectFunctionCallOptions](_types_.replaceprojectfunctioncalloptions.md)

## Index

### Properties

* [clean](_types_.replacefilefunctioncalloptions.md#clean)
* [extractorPrependVariableName](_types_.replacefilefunctioncalloptions.md#extractorprependvariablename)
* [extracts](_types_.replacefilefunctioncalloptions.md#extracts)
* [moduleSpecifier](_types_.replacefilefunctioncalloptions.md#modulespecifier)

---

## Properties

<a id="clean"></a>

### `<Optional>` clean

**● clean**: *`undefined` \| `false` \| `true`*

*Defined in [types.ts:50](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/6bd1408/src/types.ts#L50)*

If true the tool will clean all arguments in matched function call expressions

___
<a id="extractorprependvariablename"></a>

### `<Optional>` extractorPrependVariableName

**● extractorPrependVariableName**: *`undefined` \| `string`*

*Defined in [types.ts:69](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/6bd1408/src/types.ts#L69)*

In case custom `extracts` return `prependToFile` property, they also can configure the name of the array variable prepended in the file that contains all values. By default it's `__extractor_prepend__`.

___
<a id="extracts"></a>

### `<Optional>` extracts

**● extracts**: *`undefined` \| `object`*

*Defined in [types.ts:55](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/6bd1408/src/types.ts#L55)*

Custom extracts declaring custom function names

___
<a id="modulespecifier"></a>

### `<Optional>` moduleSpecifier

**● moduleSpecifier**: *`undefined` \| `string`*

*Defined in [types.ts:64](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/6bd1408/src/types.ts#L64)*

Custom name of the import module specifier from which the target function in the function call expression needs to be imported in order to perform the arguments modification. Default value: `typescript-poor-man-reflection`.

___
