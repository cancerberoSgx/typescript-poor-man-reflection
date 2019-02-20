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
* [extractorPrependVariableName](_types_.replaceprojectfunctioncalloptions.md#extractorprependvariablename)
* [extracts](_types_.replaceprojectfunctioncalloptions.md#extracts)
* [help](_types_.replaceprojectfunctioncalloptions.md#help)
* [moduleSpecifier](_types_.replaceprojectfunctioncalloptions.md#modulespecifier)
* [out](_types_.replaceprojectfunctioncalloptions.md#out)
* [tsConfigFilePath](_types_.replaceprojectfunctioncalloptions.md#tsconfigfilepath)

---

## Properties

<a id="clean"></a>

### `<Optional>` clean

**● clean**: *`undefined` \| `false` \| `true`*

*Inherited from [ReplaceFileFunctionCallOptions](_types_.replacefilefunctioncalloptions.md).[clean](_types_.replacefilefunctioncalloptions.md#clean)*

*Defined in [types.ts:50](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/c31dfc4/src/types.ts#L50)*

If true the tool will clean all arguments in matched function call expressions

___
<a id="debug"></a>

### `<Optional>` debug

**● debug**: *`undefined` \| `false` \| `true`*

*Defined in [types.ts:27](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/c31dfc4/src/types.ts#L27)*

Prints details in stdout, default is false

___
<a id="extractorprependvariablename"></a>

### `<Optional>` extractorPrependVariableName

**● extractorPrependVariableName**: *`undefined` \| `string`*

*Inherited from [ReplaceFileFunctionCallOptions](_types_.replacefilefunctioncalloptions.md).[extractorPrependVariableName](_types_.replacefilefunctioncalloptions.md#extractorprependvariablename)*

*Defined in [types.ts:69](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/c31dfc4/src/types.ts#L69)*

In case custom `extracts` return `prependToFile` property, they also can configure the name of the array variable prepended in the file that contains all values. By default it's `__extractor_prepend__`.

___
<a id="extracts"></a>

### `<Optional>` extracts

**● extracts**: *`undefined` \| `object`*

*Inherited from [ReplaceFileFunctionCallOptions](_types_.replacefilefunctioncalloptions.md).[extracts](_types_.replacefilefunctioncalloptions.md#extracts)*

*Defined in [types.ts:55](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/c31dfc4/src/types.ts#L55)*

Custom extracts declaring custom function names

___
<a id="help"></a>

### `<Optional>` help

**● help**: *`undefined` \| `string`*

*Defined in [types.ts:37](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/c31dfc4/src/types.ts#L37)*

Shows usage help and exit.

___
<a id="modulespecifier"></a>

### `<Optional>` moduleSpecifier

**● moduleSpecifier**: *`undefined` \| `string`*

*Inherited from [ReplaceFileFunctionCallOptions](_types_.replacefilefunctioncalloptions.md).[moduleSpecifier](_types_.replacefilefunctioncalloptions.md#modulespecifier)*

*Defined in [types.ts:64](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/c31dfc4/src/types.ts#L64)*

Custom name of the import module specifier from which the target function in the function call expression needs to be imported in order to perform the arguments modification. Default value: `typescript-poor-man-reflection`.

___
<a id="out"></a>

### `<Optional>` out

**● out**: *`undefined` \| `string`*

*Defined in [types.ts:32](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/c31dfc4/src/types.ts#L32)*

Instead of writing existing files, will create a copy of the project, with modified files, at this folder

___
<a id="tsconfigfilepath"></a>

### `<Optional>` tsConfigFilePath

**● tsConfigFilePath**: *`undefined` \| `string`*

*Defined in [types.ts:22](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/c31dfc4/src/types.ts#L22)*

Default value `'./tsconfig.json'`. The target `tsconfig.json` file from which the project is loaded. `typescript-poor-man-reflection` will load and parse the project with this identical configuration. All the files referenced by this configuration will be examined, with the exception of .d.ts and external library files.

___

