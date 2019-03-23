[typescript-poor-man-reflection](../README.md) > ["extractors/source/abstractRefactorExtractor"](../modules/_extractors_source_abstractrefactorextractor_.md) > [AbstractRefactorExtractorOptions](../interfaces/_extractors_source_abstractrefactorextractor_.abstractrefactorextractoroptions.md)

# Interface: AbstractRefactorExtractorOptions

## Hierarchy

 [ExtractorOptions](_types_.extractoroptions.md)

**↳ AbstractRefactorExtractorOptions**

↳  [InferTypesOptions](_extractors_source_infertypes_.infertypesoptions.md)

↳  [OrganizeImportsOptions](_extractors_source_organizeimports_.organizeimportsoptions.md)

↳  [RemoveUnusedOptions](_extractors_source_removeunused_.removeunusedoptions.md)

## Index

### Properties

* [outputMode](_extractors_source_abstractrefactorextractor_.abstractrefactorextractoroptions.md#outputmode)
* [outputVariableName](_extractors_source_abstractrefactorextractor_.abstractrefactorextractoroptions.md#outputvariablename)
* [path](_extractors_source_abstractrefactorextractor_.abstractrefactorextractoroptions.md#path)
* [removeMe](_extractors_source_abstractrefactorextractor_.abstractrefactorextractoroptions.md#removeme)
* [target](_extractors_source_abstractrefactorextractor_.abstractrefactorextractoroptions.md#target)

---

## Properties

<a id="outputmode"></a>

### `<Optional>` outputMode

**● outputMode**: *[ExtractorOutputMode](../modules/_types_.md#extractoroutputmode)*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[outputMode](_types_.extractoroptions.md#outputmode)*

*Defined in [types.ts:153](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/e3a07d8/src/types.ts#L153)*

Default is 'asReturnValue' in which case the output will be returned by the extractor function call.

If `assignToVariable` then it will be assigned to a variable in the ancestor Block. If there is a variable there called `outputVariableName` then that one will be used, otherwise a new variable will be created, next to the extractor call expression with a random name. IMPORTANT: variables created or assigned using this mode won't be removed or restored with `--clean`

___
<a id="outputvariablename"></a>

### `<Optional>` outputVariableName

**● outputVariableName**: *`undefined` \| `string`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[outputVariableName](_types_.extractoroptions.md#outputvariablename)*

*Defined in [types.ts:157](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/e3a07d8/src/types.ts#L157)*

Name of the variable to assign the value in case outputMode is `assignToVariable`

___
<a id="path"></a>

### `<Optional>` path

**● path**: *`undefined` \| `string`*

*Defined in [extractors/source/abstractRefactorExtractor.ts:17](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/e3a07d8/src/extractors/source/abstractRefactorExtractor.ts#L17)*

Files on which to perform the action. If undefined, it will be applied on current file.

___
<a id="removeme"></a>

### `<Optional>` removeMe

**● removeMe**: *`undefined` \| `false` \| `true`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[removeMe](_types_.extractoroptions.md#removeme)*

*Defined in [types.ts:168](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/e3a07d8/src/types.ts#L168)*

If true, this extractor function call expression will be removed as long as it's on an ExpressionStatement. Example:

```ts
MyExtractor({removeMe: true}) // Will be removed
const a = MyExtractor({removeMe: true}) // Won't be removed
foo(MyExtractor({removeMe: true}))// Won't be removed
```

Important: removed extractor call expressions are not restored when using --clean.

___
<a id="target"></a>

### `<Optional>` target

**● target**: *`any`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[target](_types_.extractoroptions.md#target)*

*Defined in [types.ts:173](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/e3a07d8/src/types.ts#L173)*

Can be used to reference a node in this file.

___

