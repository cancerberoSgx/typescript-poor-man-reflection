[typescript-poor-man-reflection](../README.md) > ["extractors/fs/cat"](../modules/_extractors_fs_cat_.md) > [LsOptions](../interfaces/_extractors_fs_cat_.lsoptions.md)

# Interface: LsOptions

## Hierarchy

 [ExtractorOptions](_types_.extractoroptions.md)

**↳ LsOptions**

## Index

### Properties

* [outputMode](_extractors_fs_cat_.lsoptions.md#outputmode)
* [outputVariableName](_extractors_fs_cat_.lsoptions.md#outputvariablename)
* [path](_extractors_fs_cat_.lsoptions.md#path)
* [removeMe](_extractors_fs_cat_.lsoptions.md#removeme)
* [target](_extractors_fs_cat_.lsoptions.md#target)

---

## Properties

<a id="outputmode"></a>

### `<Optional>` outputMode

**● outputMode**: *[ExtractorOutputMode](../modules/_types_.md#extractoroutputmode)*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[outputMode](_types_.extractoroptions.md#outputmode)*

*Defined in [types.ts:153](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3b7b7d6/src/types.ts#L153)*

Default is 'asReturnValue' in which case the output will be returned by the extractor function call.

If `assignToVariable` then it will be assigned to a variable in the ancestor Block. If there is a variable there called `outputVariableName` then that one will be used, otherwise a new variable will be created, next to the extractor call expression with a random name. IMPORTANT: variables created or assigned using this mode won't be removed or restored with `--clean`

___
<a id="outputvariablename"></a>

### `<Optional>` outputVariableName

**● outputVariableName**: *`undefined` \| `string`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[outputVariableName](_types_.extractoroptions.md#outputvariablename)*

*Defined in [types.ts:157](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3b7b7d6/src/types.ts#L157)*

Name of the variable to assign the value in case outputMode is `assignToVariable`

___
<a id="path"></a>

###  path

**● path**: *`string`*

*Defined in [extractors/fs/cat.ts:29](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3b7b7d6/src/extractors/fs/cat.ts#L29)*

Path to read. Could be a glob.

___
<a id="removeme"></a>

### `<Optional>` removeMe

**● removeMe**: *`undefined` \| `false` \| `true`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[removeMe](_types_.extractoroptions.md#removeme)*

*Defined in [types.ts:164](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3b7b7d6/src/types.ts#L164)*

TODO If true, this extractor function call expression will be removed. Important: this won't be undoable or restored with `--clean`

___
<a id="target"></a>

### `<Optional>` target

**● target**: *`any`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[target](_types_.extractoroptions.md#target)*

*Defined in [types.ts:169](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3b7b7d6/src/types.ts#L169)*

Can be used to reference a node in this file.

___

