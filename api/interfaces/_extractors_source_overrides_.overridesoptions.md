[typescript-poor-man-reflection](../README.md) > ["extractors/source/overrides"](../modules/_extractors_source_overrides_.md) > [OverridesOptions](../interfaces/_extractors_source_overrides_.overridesoptions.md)

# Interface: OverridesOptions

## Hierarchy

 [ExtractorOptions](_types_.extractoroptions.md)

**↳ OverridesOptions**

## Index

### Properties

* [outputMode](_extractors_source_overrides_.overridesoptions.md#outputmode)
* [outputVariableName](_extractors_source_overrides_.overridesoptions.md#outputvariablename)
* [removeMe](_extractors_source_overrides_.overridesoptions.md#removeme)
* [target](_extractors_source_overrides_.overridesoptions.md#target)
* [throwOnError](_extractors_source_overrides_.overridesoptions.md#throwonerror)

---

## Properties

<a id="outputmode"></a>

### `<Optional>` outputMode

**● outputMode**: *[ExtractorOutputMode](../modules/_types_.md#extractoroutputmode)*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[outputMode](_types_.extractoroptions.md#outputmode)*

*Defined in [types.ts:213](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L213)*

Default is 'asReturnValue' in which case the output will be returned by the extractor function call.

If `assignToVariable` then it will be assigned to a variable in the ancestor Block. If there is a variable there called `outputVariableName` then that one will be used, otherwise a new variable will be created, next to the extractor call expression with a random name. IMPORTANT: variables created or assigned using this mode won't be removed or restored with `--clean`

___
<a id="outputvariablename"></a>

### `<Optional>` outputVariableName

**● outputVariableName**: *`string` \| "__IGNORE__"*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[outputVariableName](_types_.extractoroptions.md#outputvariablename)*

*Defined in [types.ts:217](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L217)*

Name of the variable to assign the value in case outputMode is `assignToVariable`

___
<a id="removeme"></a>

### `<Optional>` removeMe

**● removeMe**: *`undefined` \| `false` \| `true`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[removeMe](_types_.extractoroptions.md#removeme)*

*Defined in [types.ts:229](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L229)*

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

*Defined in [types.ts:234](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L234)*

Can be used to reference a node in this file.

___
<a id="throwonerror"></a>

### `<Optional>` throwOnError

**● throwOnError**: *`undefined` \| `false` \| `true`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[throwOnError](_types_.extractoroptions.md#throwonerror)*

*Defined in [types.ts:236](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L236)*

___

