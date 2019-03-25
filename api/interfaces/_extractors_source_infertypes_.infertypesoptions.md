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
* [throwOnError](_extractors_source_infertypes_.infertypesoptions.md#throwonerror)

---

## Properties

<a id="outputmode"></a>

### `<Optional>` outputMode

**● outputMode**: *[ExtractorOutputMode](../modules/_types_.md#extractoroutputmode)*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[outputMode](_types_.extractoroptions.md#outputmode)*

*Defined in [types.ts:210](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3c8d91b/src/types.ts#L210)*

Default is 'asReturnValue' in which case the output will be returned by the extractor function call.

If `assignToVariable` then it will be assigned to a variable in the ancestor Block. If there is a variable there called `outputVariableName` then that one will be used, otherwise a new variable will be created, next to the extractor call expression with a random name. IMPORTANT: variables created or assigned using this mode won't be removed or restored with `--clean`

___
<a id="outputvariablename"></a>

### `<Optional>` outputVariableName

**● outputVariableName**: *`string` \| "__IGNORE__"*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[outputVariableName](_types_.extractoroptions.md#outputvariablename)*

*Defined in [types.ts:214](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3c8d91b/src/types.ts#L214)*

Name of the variable to assign the value in case outputMode is `assignToVariable`

___
<a id="path"></a>

### `<Optional>` path

**● path**: *`undefined` \| `string`*

*Inherited from [AbstractRefactorExtractorOptions](_extractors_source_abstractrefactorextractor_.abstractrefactorextractoroptions.md).[path](_extractors_source_abstractrefactorextractor_.abstractrefactorextractoroptions.md#path)*

*Defined in [extractors/source/abstractRefactorExtractor.ts:12](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3c8d91b/src/extractors/source/abstractRefactorExtractor.ts#L12)*

Files on which to perform the action. If undefined, it will be applied on current file.

___
<a id="removeme"></a>

### `<Optional>` removeMe

**● removeMe**: *`undefined` \| `false` \| `true`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[removeMe](_types_.extractoroptions.md#removeme)*

*Defined in [types.ts:226](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3c8d91b/src/types.ts#L226)*

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

*Defined in [types.ts:231](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3c8d91b/src/types.ts#L231)*

Can be used to reference a node in this file.

___
<a id="throwonerror"></a>

### `<Optional>` throwOnError

**● throwOnError**: *`undefined` \| `false` \| `true`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[throwOnError](_types_.extractoroptions.md#throwonerror)*

*Defined in [types.ts:233](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3c8d91b/src/types.ts#L233)*

___

