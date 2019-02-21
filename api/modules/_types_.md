[typescript-poor-man-reflection](../README.md) > ["types"](../modules/_types_.md)

# External module: "types"

## Index

### Interfaces

* [ExtractOptions](../interfaces/_types_.extractoptions.md)
* [ExtractorClass](../interfaces/_types_.extractorclass.md)
* [ExtractorConfig](../interfaces/_types_.extractorconfig.md)
* [ExtractorResult](../interfaces/_types_.extractorresult.md)
* [ReplaceFileFunctionCallOptions](../interfaces/_types_.replacefilefunctioncalloptions.md)
* [ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)
* [Replacement](../interfaces/_types_.replacement.md)

### Type aliases

* [Extractor](_types_.md#extractor)
* [ExtractorDataMode](_types_.md#extractordatamode)
* [ExtractorFn](_types_.md#extractorfn)
* [ExtractorGetter](_types_.md#extractorgetter)
* [FileVariableAccessor](_types_.md#filevariableaccessor)

---

## Type aliases

<a id="extractor"></a>

###  Extractor

**Ƭ Extractor**: *`object` & `function` \| [ExtractorClass](../interfaces/_types_.extractorclass.md) & `object`*

*Defined in [types.ts:124](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/types.ts#L124)*

___
<a id="extractordatamode"></a>

###  ExtractorDataMode

**Ƭ ExtractorDataMode**: *"prependVariable" \| "folderFile" \| "asStringLiteral"*

*Defined in [types.ts:140](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/types.ts#L140)*

___
<a id="extractorfn"></a>

###  ExtractorFn

**Ƭ ExtractorFn**: *`function`*

*Defined in [types.ts:125](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/types.ts#L125)*

#### Type declaration
▸(n: *`CallExpression`*, index: *`number`*, getter: *[ExtractorGetter](_types_.md#extractorgetter)*, options: *`Partial`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*, variableAccessor?: *[FileVariableAccessor](_types_.md#filevariableaccessor)*): [ExtractorResult](../interfaces/_types_.extractorresult.md) \| `string`

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |
| index | `number` |
| getter | [ExtractorGetter](_types_.md#extractorgetter) |
| options | `Partial`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)> |
| `Optional` variableAccessor | [FileVariableAccessor](_types_.md#filevariableaccessor) |

**Returns:** [ExtractorResult](../interfaces/_types_.extractorresult.md) \| `string`

___
<a id="extractorgetter"></a>

###  ExtractorGetter

**Ƭ ExtractorGetter**: *`function`*

*Defined in [types.ts:138](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/types.ts#L138)*

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

*Defined in [types.ts:142](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/types.ts#L142)*

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

