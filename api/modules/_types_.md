[typescript-poor-man-reflection](../README.md) > ["types"](../modules/_types_.md)

# External module: "types"

## Index

### Interfaces

* [ExtractorResult](../interfaces/_types_.extractorresult.md)
* [ReplaceFileFunctionCallOptions](../interfaces/_types_.replacefilefunctioncalloptions.md)
* [ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)
* [Replacement](../interfaces/_types_.replacement.md)

### Type aliases

* [Extractor](_types_.md#extractor)
* [ExtractorDataMode](_types_.md#extractordatamode)
* [ExtractorGetter](_types_.md#extractorgetter)
* [FileVariableAccessor](_types_.md#filevariableaccessor)

---

## Type aliases

<a id="extractor"></a>

###  Extractor

**Ƭ Extractor**: *`function`*

*Defined in [types.ts:105](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/d8ab253/src/types.ts#L105)*

#### Type declaration
▸(n: *`CallExpression`*, index: *`number`*, getter: *[ExtractorGetter](_types_.md#extractorgetter)*, options: *`Partial`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*, fileVariable?: *[FileVariableAccessor](_types_.md#filevariableaccessor)*): [ExtractorResult](../interfaces/_types_.extractorresult.md) \| `string`

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |
| index | `number` |
| getter | [ExtractorGetter](_types_.md#extractorgetter) |
| options | `Partial`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)> |
| `Optional` fileVariable | [FileVariableAccessor](_types_.md#filevariableaccessor) |

**Returns:** [ExtractorResult](../interfaces/_types_.extractorresult.md) \| `string`

___
<a id="extractordatamode"></a>

###  ExtractorDataMode

**Ƭ ExtractorDataMode**: *"prependVariable" \| "folderFile"*

*Defined in [types.ts:120](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/d8ab253/src/types.ts#L120)*

___
<a id="extractorgetter"></a>

###  ExtractorGetter

**Ƭ ExtractorGetter**: *`function`*

*Defined in [types.ts:118](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/d8ab253/src/types.ts#L118)*

#### Type declaration
▸(index: *`number`*): `string`

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** `string`

___
<a id="filevariableaccessor"></a>

###  FileVariableAccessor

**Ƭ FileVariableAccessor**: *`function`*

*Defined in [types.ts:122](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/d8ab253/src/types.ts#L122)*

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

