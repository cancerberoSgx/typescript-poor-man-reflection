[typescript-poor-man-reflection](../README.md) > ["extractors/core/if"](../modules/_extractors_core_if_.md) > [IfOptions](../interfaces/_extractors_core_if_.ifoptions.md)

# Interface: IfOptions

## Type parameters
#### T 
#### F 
#### E 
## Hierarchy

 [ExtractorOptions](_types_.extractoroptions.md)

**↳ IfOptions**

## Index

### Properties

* [condition](_extractors_core_if_.ifoptions.md#condition)
* [else](_extractors_core_if_.ifoptions.md#else)
* [error](_extractors_core_if_.ifoptions.md#error)
* [outputMode](_extractors_core_if_.ifoptions.md#outputmode)
* [outputVariableName](_extractors_core_if_.ifoptions.md#outputvariablename)
* [removeMe](_extractors_core_if_.ifoptions.md#removeme)
* [target](_extractors_core_if_.ifoptions.md#target)
* [then](_extractors_core_if_.ifoptions.md#then)
* [throwOnError](_extractors_core_if_.ifoptions.md#throwonerror)

---

## Properties

<a id="condition"></a>

###  condition

**● condition**: *`function`*

*Defined in [extractors/core/if.ts:33](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/ddc8b16/src/extractors/core/if.ts#L33)*

#### Type declaration
▸(): `boolean`

**Returns:** `boolean`

___
<a id="else"></a>

###  else

**● else**: *`function`*

*Defined in [extractors/core/if.ts:35](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/ddc8b16/src/extractors/core/if.ts#L35)*

#### Type declaration
▸(): `F`

**Returns:** `F`

___
<a id="error"></a>

### `<Optional>` error

**● error**: *`undefined` \| `function`*

*Defined in [extractors/core/if.ts:36](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/ddc8b16/src/extractors/core/if.ts#L36)*

___
<a id="outputmode"></a>

### `<Optional>` outputMode

**● outputMode**: *[ExtractorOutputMode](../modules/_types_.md#extractoroutputmode)*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[outputMode](_types_.extractoroptions.md#outputmode)*

*Defined in [types.ts:214](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/ddc8b16/src/types.ts#L214)*

Default is 'asReturnValue' in which case the output will be returned by the extractor function call.

If `assignToVariable` then it will be assigned to a variable in the ancestor Block. If there is a variable there called `outputVariableName` then that one will be used, otherwise a new variable will be created, next to the extractor call expression with a random name. IMPORTANT: variables created or assigned using this mode won't be removed or restored with `--clean`

___
<a id="outputvariablename"></a>

### `<Optional>` outputVariableName

**● outputVariableName**: *`string` \| "__IGNORE__"*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[outputVariableName](_types_.extractoroptions.md#outputvariablename)*

*Defined in [types.ts:218](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/ddc8b16/src/types.ts#L218)*

Name of the variable to assign the value in case outputMode is `assignToVariable`

___
<a id="removeme"></a>

### `<Optional>` removeMe

**● removeMe**: *`undefined` \| `false` \| `true`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[removeMe](_types_.extractoroptions.md#removeme)*

*Defined in [types.ts:230](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/ddc8b16/src/types.ts#L230)*

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

*Defined in [types.ts:235](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/ddc8b16/src/types.ts#L235)*

Can be used to reference a node in this file.

___
<a id="then"></a>

###  then

**● then**: *`function`*

*Defined in [extractors/core/if.ts:34](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/ddc8b16/src/extractors/core/if.ts#L34)*

#### Type declaration
▸(): `T`

**Returns:** `T`

___
<a id="throwonerror"></a>

### `<Optional>` throwOnError

**● throwOnError**: *`undefined` \| `false` \| `true`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[throwOnError](_types_.extractoroptions.md#throwonerror)*

*Defined in [types.ts:237](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/ddc8b16/src/types.ts#L237)*

___

