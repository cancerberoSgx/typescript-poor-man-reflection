[typescript-poor-man-reflection](../README.md) > ["extractors/source/inferTypes"](../modules/_extractors_source_infertypes_.md) > [InferTypesOptions](../interfaces/_extractors_source_infertypes_.infertypesoptions.md)

# Interface: InferTypesOptions

Will add Types to variables, parameters, etc inferring from usage on given files. If no file is provided then it will call for the current file. Returns `undefined`.

```ts
InferTypes({path: 'src/** /*.ts*'})
```

## Hierarchy

↳  [AbstractRefactorExtractorOptions](_extractors_source_abstractrefactorextractor_.abstractrefactorextractoroptions.md)

**↳ InferTypesOptions**

## Index

### Properties

* [outputMode](_extractors_source_infertypes_.infertypesoptions.md#outputmode)
* [outputVariableName](_extractors_source_infertypes_.infertypesoptions.md#outputvariablename)
* [path](_extractors_source_infertypes_.infertypesoptions.md#path)
* [removeMe](_extractors_source_infertypes_.infertypesoptions.md#removeme)
* [target](_extractors_source_infertypes_.infertypesoptions.md#target)

---

## Properties

<a id="outputmode"></a>

### `<Optional>` outputMode

**● outputMode**: *[ExtractorOutputMode](../modules/_types_.md#extractoroutputmode)*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[outputMode](_types_.extractoroptions.md#outputmode)*

*Defined in [types.ts:153](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f57c9f6/src/types.ts#L153)*

Default is 'asReturnValue' in which case the output will be returned by the extractor function call.

If `assignToVariable` then it will be assigned to a variable in the ancestor Block. If there is a variable there called `outputVariableName` then that one will be used, otherwise a new variable will be created, next to the extractor call expression with a random name. IMPORTANT: variables created or assigned using this mode won't be removed or restored with `--clean`

___
<a id="outputvariablename"></a>

### `<Optional>` outputVariableName

**● outputVariableName**: *`undefined` \| `string`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[outputVariableName](_types_.extractoroptions.md#outputvariablename)*

*Defined in [types.ts:157](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f57c9f6/src/types.ts#L157)*

Name of the variable to assign the value in case outputMode is `assignToVariable`

___
<a id="path"></a>

### `<Optional>` path

**● path**: *`undefined` \| `string`*

*Inherited from [AbstractRefactorExtractorOptions](_extractors_source_abstractrefactorextractor_.abstractrefactorextractoroptions.md).[path](_extractors_source_abstractrefactorextractor_.abstractrefactorextractoroptions.md#path)*

*Defined in [extractors/source/abstractRefactorExtractor.ts:17](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f57c9f6/src/extractors/source/abstractRefactorExtractor.ts#L17)*

Files on which to perform the action. If undefined, it will be applied on current file.

___
<a id="removeme"></a>

### `<Optional>` removeMe

**● removeMe**: *`undefined` \| `false` \| `true`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[removeMe](_types_.extractoroptions.md#removeme)*

*Defined in [types.ts:164](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f57c9f6/src/types.ts#L164)*

TODO If true, this extractor function call expression will be removed. Important: this won't be undoable or restored with `--clean`

___
<a id="target"></a>

### `<Optional>` target

**● target**: *`any`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[target](_types_.extractoroptions.md#target)*

*Defined in [types.ts:169](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f57c9f6/src/types.ts#L169)*

Can be used to reference a node in this file.

___

