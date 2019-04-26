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
* [dontBindTargetNode](_extractors_core_attribute_.attributeoptions.md#dontbindtargetnode)
* [name](_extractors_core_attribute_.attributeoptions.md#name)
* [outputMode](_extractors_core_attribute_.attributeoptions.md#outputmode)
* [outputVariableName](_extractors_core_attribute_.attributeoptions.md#outputvariablename)
* [removeMe](_extractors_core_attribute_.attributeoptions.md#removeme)
* [target](_extractors_core_attribute_.attributeoptions.md#target)
* [throwOnError](_extractors_core_attribute_.attributeoptions.md#throwonerror)
* [validateTargetNodeNotChange](_extractors_core_attribute_.attributeoptions.md#validatetargetnodenotchange)
* [value](_extractors_core_attribute_.attributeoptions.md#value)

---

## Properties

<a id="action"></a>

### `<Optional>` action

**● action**: *"set" \| "get" \| "remove" \| "list"*

*Defined in [extractors/core/attribute.ts:47](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/extractors/core/attribute.ts#L47)*

which action to perform - now only supported set and get

___
<a id="dontbindtargetnode"></a>

### `<Optional>` dontBindTargetNode

**● dontBindTargetNode**: *`undefined` \| `false` \| `true`*

*Defined in [extractors/core/attribute.ts:53](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/extractors/core/attribute.ts#L53)*

if [target](_extractors_core_attribute_.attributeoptions.md#target) is not defined or this is true then the target node won't be bound to the attribute, this means it's a normal variable and you don't require tp pass the target node in order to get its value. Default: false

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Defined in [extractors/core/attribute.ts:39](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/extractors/core/attribute.ts#L39)*

___
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
<a id="validatetargetnodenotchange"></a>

### `<Optional>` validateTargetNodeNotChange

**● validateTargetNodeNotChange**: *`undefined` \| `false` \| `true`*

*Defined in [extractors/core/attribute.ts:60](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/extractors/core/attribute.ts#L60)*

If true, get getting a Node's attribute value, it will validate that the node structure/ancestors didn't change by other extractors, and in that case it will return undefined.

This ensure attribute definitions that the target node is valid, because if it's radically changed accessing the Node later will give error. Not so useful now,but think on attributes visible between different files or event different projects.

___
<a id="value"></a>

### `<Optional>` value

**● value**: *`string` \| `Node`*

*Defined in [extractors/core/attribute.ts:43](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/extractors/core/attribute.ts#L43)*

If undefined then action is 'set'

___

