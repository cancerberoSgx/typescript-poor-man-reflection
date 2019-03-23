[typescript-poor-man-reflection](../README.md) > ["types"](../modules/_types_.md)

# External module: "types"

## Index

### Interfaces

* [ExtractOptions](../interfaces/_types_.extractoptions.md)
* [ExtractorClass](../interfaces/_types_.extractorclass.md)
* [ExtractorConfig](../interfaces/_types_.extractorconfig.md)
* [ExtractorOptions](../interfaces/_types_.extractoroptions.md)
* [ExtractorResult](../interfaces/_types_.extractorresult.md)
* [ReplaceFileFunctionCallOptions](../interfaces/_types_.replacefilefunctioncalloptions.md)
* [ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)
* [Replacement](../interfaces/_types_.replacement.md)

### Type aliases

* [Extractor](_types_.md#extractor)
* [ExtractorDataMode](_types_.md#extractordatamode)
* [ExtractorFn](_types_.md#extractorfn)
* [ExtractorGetter](_types_.md#extractorgetter)
* [ExtractorOutputMode](_types_.md#extractoroutputmode)
* [FileVariableAccessor](_types_.md#filevariableaccessor)

---

## Type aliases

<a id="extractor"></a>

###  Extractor

**Ƭ Extractor**: *`object` & `function` \| [ExtractorClass](../interfaces/_types_.extractorclass.md)*

*Defined in [types.ts:202](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/types.ts#L202)*

___
<a id="extractordatamode"></a>

###  ExtractorDataMode

**Ƭ ExtractorDataMode**: *"prependVariable" \| "folderFile" \| "asArgument"*

*Defined in [types.ts:220](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/types.ts#L220)*

___
<a id="extractorfn"></a>

###  ExtractorFn

**Ƭ ExtractorFn**: *`function`*

*Defined in [types.ts:204](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/types.ts#L204)*

#### Type declaration
▸(n: *`CallExpression`*, index: *`number`*, getter: *[ExtractorGetter](_types_.md#extractorgetter)*, options: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*, variableAccessor: *[FileVariableAccessor](_types_.md#filevariableaccessor)*): [ExtractorResult](../interfaces/_types_.extractorresult.md) \| `string`

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |
| index | `number` |
| getter | [ExtractorGetter](_types_.md#extractorgetter) |
| options | `Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)> |
| variableAccessor | [FileVariableAccessor](_types_.md#filevariableaccessor) |

**Returns:** [ExtractorResult](../interfaces/_types_.extractorresult.md) \| `string`

___
<a id="extractorgetter"></a>

###  ExtractorGetter

**Ƭ ExtractorGetter**: *`function`*

*Defined in [types.ts:218](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/types.ts#L218)*

#### Type declaration
▸(index: *`number`*): `string`

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** `string`

___
<a id="extractoroutputmode"></a>

###  ExtractorOutputMode

**Ƭ ExtractorOutputMode**: *"assignToVariable" \| "asReturnValue"*

*Defined in [types.ts:200](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/types.ts#L200)*

___
<a id="filevariableaccessor"></a>

###  FileVariableAccessor

**Ƭ FileVariableAccessor**: *`function`*

*Defined in [types.ts:227](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/types.ts#L227)*

setter / getter for variables that are common between same function calls of same file or even different function files (to save data file space). The getter actually returns (at compile time) an expression that when evaluated will return the variable value (at runtime)

#### Type declaration
▸(name: *`string`*, value?: *`undefined` \| `string`*): `string` \| `undefined`

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| `Optional` value | `undefined` \| `string` |

**Returns:** `string` \| `undefined`

___

