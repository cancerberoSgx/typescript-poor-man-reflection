[typescript-poor-man-reflection](../README.md) > ["extractors/internal/register"](../modules/_extractors_internal_register_.md) > [RegisterOptions](../interfaces/_extractors_internal_register_.registeroptions.md)

# Interface: RegisterOptions

## Hierarchy

 [ExtractorOptions](_types_.extractoroptions.md)

**↳ RegisterOptions**

## Index

### Properties

* [extractor](_extractors_internal_register_.registeroptions.md#extractor)
* [fn](_extractors_internal_register_.registeroptions.md#fn)
* [name](_extractors_internal_register_.registeroptions.md#name)
* [outputMode](_extractors_internal_register_.registeroptions.md#outputmode)
* [outputVariableName](_extractors_internal_register_.registeroptions.md#outputvariablename)
* [removeMe](_extractors_internal_register_.registeroptions.md#removeme)
* [target](_extractors_internal_register_.registeroptions.md#target)

---

## Properties

<a id="extractor"></a>

###  extractor

**● extractor**: *[AbstractExtractor](../classes/_extractors_abstractextractor_.abstractextractor.md)*

*Defined in [extractors/internal/register.ts:54](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/24513f8/src/extractors/internal/register.ts#L54)*

___
<a id="fn"></a>

###  fn

**● fn**: *[Fn](../modules/_util_.md#fn)*

*Defined in [extractors/internal/register.ts:53](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/24513f8/src/extractors/internal/register.ts#L53)*

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Defined in [extractors/internal/register.ts:52](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/24513f8/src/extractors/internal/register.ts#L52)*

___
<a id="outputmode"></a>

### `<Optional>` outputMode

**● outputMode**: *[ExtractorOutputMode](../modules/_types_.md#extractoroutputmode)*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[outputMode](_types_.extractoroptions.md#outputmode)*

*Defined in [types.ts:190](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/24513f8/src/types.ts#L190)*

Default is 'asReturnValue' in which case the output will be returned by the extractor function call.

If `assignToVariable` then it will be assigned to a variable in the ancestor Block. If there is a variable there called `outputVariableName` then that one will be used, otherwise a new variable will be created, next to the extractor call expression with a random name. IMPORTANT: variables created or assigned using this mode won't be removed or restored with `--clean`

___
<a id="outputvariablename"></a>

### `<Optional>` outputVariableName

**● outputVariableName**: *`string` \| "__IGNORE__"*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[outputVariableName](_types_.extractoroptions.md#outputvariablename)*

*Defined in [types.ts:194](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/24513f8/src/types.ts#L194)*

Name of the variable to assign the value in case outputMode is `assignToVariable`

___
<a id="removeme"></a>

### `<Optional>` removeMe

**● removeMe**: *`undefined` \| `false` \| `true`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[removeMe](_types_.extractoroptions.md#removeme)*

*Defined in [types.ts:206](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/24513f8/src/types.ts#L206)*

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

*Defined in [types.ts:211](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/24513f8/src/types.ts#L211)*

Can be used to reference a node in this file.

___

