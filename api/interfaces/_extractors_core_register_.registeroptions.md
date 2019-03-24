[typescript-poor-man-reflection](../README.md) > ["extractors/core/register"](../modules/_extractors_core_register_.md) > [RegisterOptions](../interfaces/_extractors_core_register_.registeroptions.md)

# Interface: RegisterOptions

## Hierarchy

 [ExtractorOptions](_types_.extractoroptions.md)

**↳ RegisterOptions**

## Index

### Properties

* [extractor](_extractors_core_register_.registeroptions.md#extractor)
* [fn](_extractors_core_register_.registeroptions.md#fn)
* [name](_extractors_core_register_.registeroptions.md#name)
* [outputMode](_extractors_core_register_.registeroptions.md#outputmode)
* [outputVariableName](_extractors_core_register_.registeroptions.md#outputvariablename)
* [removeMe](_extractors_core_register_.registeroptions.md#removeme)
* [target](_extractors_core_register_.registeroptions.md#target)
* [throwOnError](_extractors_core_register_.registeroptions.md#throwonerror)

---

## Properties

<a id="extractor"></a>

###  extractor

**● extractor**: *[AbstractExtractor](../classes/_extractors_abstractextractor_.abstractextractor.md)*

*Defined in [extractors/core/register.ts:43](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f49b48b/src/extractors/core/register.ts#L43)*

___
<a id="fn"></a>

###  fn

**● fn**: *[Fn](../modules/_util_.md#fn)*

*Defined in [extractors/core/register.ts:42](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f49b48b/src/extractors/core/register.ts#L42)*

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Defined in [extractors/core/register.ts:41](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f49b48b/src/extractors/core/register.ts#L41)*

___
<a id="outputmode"></a>

### `<Optional>` outputMode

**● outputMode**: *[ExtractorOutputMode](../modules/_types_.md#extractoroutputmode)*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[outputMode](_types_.extractoroptions.md#outputmode)*

*Defined in [types.ts:204](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f49b48b/src/types.ts#L204)*

Default is 'asReturnValue' in which case the output will be returned by the extractor function call.

If `assignToVariable` then it will be assigned to a variable in the ancestor Block. If there is a variable there called `outputVariableName` then that one will be used, otherwise a new variable will be created, next to the extractor call expression with a random name. IMPORTANT: variables created or assigned using this mode won't be removed or restored with `--clean`

___
<a id="outputvariablename"></a>

### `<Optional>` outputVariableName

**● outputVariableName**: *`string` \| "__IGNORE__"*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[outputVariableName](_types_.extractoroptions.md#outputvariablename)*

*Defined in [types.ts:208](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f49b48b/src/types.ts#L208)*

Name of the variable to assign the value in case outputMode is `assignToVariable`

___
<a id="removeme"></a>

### `<Optional>` removeMe

**● removeMe**: *`undefined` \| `false` \| `true`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[removeMe](_types_.extractoroptions.md#removeme)*

*Defined in [types.ts:220](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f49b48b/src/types.ts#L220)*

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

*Defined in [types.ts:225](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f49b48b/src/types.ts#L225)*

Can be used to reference a node in this file.

___
<a id="throwonerror"></a>

### `<Optional>` throwOnError

**● throwOnError**: *`undefined` \| `false` \| `true`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[throwOnError](_types_.extractoroptions.md#throwonerror)*

*Defined in [types.ts:227](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f49b48b/src/types.ts#L227)*

___

