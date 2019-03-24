[typescript-poor-man-reflection](../README.md) > ["types"](../modules/_types_.md)

# External module: "types"

## Index

### Interfaces

* [ExportedExtractor](../interfaces/_types_.exportedextractor.md)
* [ExtractOptions](../interfaces/_types_.extractoptions.md)
* [ExtractorClass](../interfaces/_types_.extractorclass.md)
* [ExtractorConfig](../interfaces/_types_.extractorconfig.md)
* [ExtractorOptions](../interfaces/_types_.extractoroptions.md)
* [ExtractorResult](../interfaces/_types_.extractorresult.md)
* [FileVariableAccessorNamePredicate](../interfaces/_types_.filevariableaccessornamepredicate.md)
* [FileVariableDefinition](../interfaces/_types_.filevariabledefinition.md)
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

*Defined in [types.ts:232](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/be10635/src/types.ts#L232)*

___
<a id="extractordatamode"></a>

###  ExtractorDataMode

**Ƭ ExtractorDataMode**: *"prependVariable" \| "folderFile" \| "asArgument"*

*Defined in [types.ts:249](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/be10635/src/types.ts#L249)*

___
<a id="extractorfn"></a>

###  ExtractorFn

**Ƭ ExtractorFn**: *`function`*

*Defined in [types.ts:234](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/be10635/src/types.ts#L234)*

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

*Defined in [types.ts:247](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/be10635/src/types.ts#L247)*

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

*Defined in [types.ts:230](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/be10635/src/types.ts#L230)*

___
<a id="filevariableaccessor"></a>

###  FileVariableAccessor

**Ƭ FileVariableAccessor**: *`function`*

*Defined in [types.ts:256](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/be10635/src/types.ts#L256)*

Setter / getter for variables that are common between same function calls of same file or even different function files (to save data file space). The getter actually returns (at compile time) an expression that when evaluated will return the variable value (at runtime)

#### Type declaration
▸(name: *`string` \| [FileVariableAccessorNamePredicate](../interfaces/_types_.filevariableaccessornamepredicate.md)*, index: *`number`*, value?: *`undefined` \| `string`*): `string` \| `undefined`

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` \| [FileVariableAccessorNamePredicate](../interfaces/_types_.filevariableaccessornamepredicate.md) |
| index | `number` |
| `Optional` value | `undefined` \| `string` |

**Returns:** `string` \| `undefined`

___

