[typescript-poor-man-reflection](../README.md) > ["extractors/source/organizeImports"](../modules/_extractors_source_organizeimports_.md) > [OrganizeImportsOptions](../interfaces/_extractors_source_organizeimports_.organizeimportsoptions.md)

# Interface: OrganizeImportsOptions

## Hierarchy

↳  [AbstractRefactorExtractorOptions](_extractors_source_abstractrefactorextractor_.abstractrefactorextractoroptions.md)

**↳ OrganizeImportsOptions**

## Index

### Properties

* [outputMode](_extractors_source_organizeimports_.organizeimportsoptions.md#outputmode)
* [outputVariableName](_extractors_source_organizeimports_.organizeimportsoptions.md#outputvariablename)
* [path](_extractors_source_organizeimports_.organizeimportsoptions.md#path)
* [removeMe](_extractors_source_organizeimports_.organizeimportsoptions.md#removeme)
* [target](_extractors_source_organizeimports_.organizeimportsoptions.md#target)

---

## Properties

<a id="outputmode"></a>

### `<Optional>` outputMode

**● outputMode**: *[ExtractorOutputMode](../modules/_types_.md#extractoroutputmode)*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[outputMode](_types_.extractoroptions.md#outputmode)*

*Defined in [types.ts:190](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/667880b/src/types.ts#L190)*

Default is 'asReturnValue' in which case the output will be returned by the extractor function call.

If `assignToVariable` then it will be assigned to a variable in the ancestor Block. If there is a variable there called `outputVariableName` then that one will be used, otherwise a new variable will be created, next to the extractor call expression with a random name. IMPORTANT: variables created or assigned using this mode won't be removed or restored with `--clean`

___
<a id="outputvariablename"></a>

### `<Optional>` outputVariableName

**● outputVariableName**: *`undefined` \| `string`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[outputVariableName](_types_.extractoroptions.md#outputvariablename)*

*Defined in [types.ts:194](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/667880b/src/types.ts#L194)*

Name of the variable to assign the value in case outputMode is `assignToVariable`

___
<a id="path"></a>

### `<Optional>` path

**● path**: *`undefined` \| `string`*

*Inherited from [AbstractRefactorExtractorOptions](_extractors_source_abstractrefactorextractor_.abstractrefactorextractoroptions.md).[path](_extractors_source_abstractrefactorextractor_.abstractrefactorextractoroptions.md#path)*

*Defined in [extractors/source/abstractRefactorExtractor.ts:12](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/667880b/src/extractors/source/abstractRefactorExtractor.ts#L12)*

Files on which to perform the action. If undefined, it will be applied on current file.

___
<a id="removeme"></a>

### `<Optional>` removeMe

**● removeMe**: *`undefined` \| `false` \| `true`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[removeMe](_types_.extractoroptions.md#removeme)*

*Defined in [types.ts:206](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/667880b/src/types.ts#L206)*

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

*Defined in [types.ts:211](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/667880b/src/types.ts#L211)*

Can be used to reference a node in this file.

___

