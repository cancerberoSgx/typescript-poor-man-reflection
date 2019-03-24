[typescript-poor-man-reflection](../README.md) > ["extractors/core/attribute"](../modules/_extractors_core_attribute_.md) > [AttributeOptions](../interfaces/_extractors_core_attribute_.attributeoptions.md)

# Interface: AttributeOptions

## Type parameters
#### T 
#### F 
#### E 
## Hierarchy

 [ExtractorOptions](_types_.extractoroptions.md)

**↳ AttributeOptions**

## Index

### Properties

* [action](_extractors_core_attribute_.attributeoptions.md#action)
* [name](_extractors_core_attribute_.attributeoptions.md#name)
* [outputMode](_extractors_core_attribute_.attributeoptions.md#outputmode)
* [outputVariableName](_extractors_core_attribute_.attributeoptions.md#outputvariablename)
* [removeMe](_extractors_core_attribute_.attributeoptions.md#removeme)
* [target](_extractors_core_attribute_.attributeoptions.md#target)
* [value](_extractors_core_attribute_.attributeoptions.md#value)

---

## Properties

<a id="action"></a>

### `<Optional>` action

**● action**: *"set" \| "get" \| "remove" \| "list"*

*Defined in [extractors/core/attribute.ts:43](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/2b5b97c/src/extractors/core/attribute.ts#L43)*

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Defined in [extractors/core/attribute.ts:37](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/2b5b97c/src/extractors/core/attribute.ts#L37)*

___
<a id="outputmode"></a>

### `<Optional>` outputMode

**● outputMode**: *[ExtractorOutputMode](../modules/_types_.md#extractoroutputmode)*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[outputMode](_types_.extractoroptions.md#outputmode)*

*Defined in [types.ts:204](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/2b5b97c/src/types.ts#L204)*

Default is 'asReturnValue' in which case the output will be returned by the extractor function call.

If `assignToVariable` then it will be assigned to a variable in the ancestor Block. If there is a variable there called `outputVariableName` then that one will be used, otherwise a new variable will be created, next to the extractor call expression with a random name. IMPORTANT: variables created or assigned using this mode won't be removed or restored with `--clean`

___
<a id="outputvariablename"></a>

### `<Optional>` outputVariableName

**● outputVariableName**: *`string` \| "__IGNORE__"*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[outputVariableName](_types_.extractoroptions.md#outputvariablename)*

*Defined in [types.ts:208](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/2b5b97c/src/types.ts#L208)*

Name of the variable to assign the value in case outputMode is `assignToVariable`

___
<a id="removeme"></a>

### `<Optional>` removeMe

**● removeMe**: *`undefined` \| `false` \| `true`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[removeMe](_types_.extractoroptions.md#removeme)*

*Defined in [types.ts:220](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/2b5b97c/src/types.ts#L220)*

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

*Defined in [types.ts:225](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/2b5b97c/src/types.ts#L225)*

Can be used to reference a node in this file.

___
<a id="value"></a>

### `<Optional>` value

**● value**: *`string` \| `Node`*

*Defined in [extractors/core/attribute.ts:41](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/2b5b97c/src/extractors/core/attribute.ts#L41)*

if undefined means it's setter

___

