[typescript-poor-man-reflection](../README.md) > ["extractors/abstractExtractor"](../modules/_extractors_abstractextractor_.md) > [AbstractExtractor](../classes/_extractors_abstractextractor_.abstractextractor.md)

# Class: AbstractExtractor

## Hierarchy

**AbstractExtractor**

↳  [Ast](_extractors_ast_.ast.md)

## Implements

* [ExtractorClass](../interfaces/_types_.extractorclass.md)

## Index

### Methods

* [buildExtractorResult](_extractors_abstractextractor_.abstractextractor.md#buildextractorresult)
* [extract](_extractors_abstractextractor_.abstractextractor.md#extract)
* [getOptionsFromFistArg](_extractors_abstractextractor_.abstractextractor.md#getoptionsfromfistarg)

### Object literals

* [defaultExtractorOptions](_extractors_abstractextractor_.abstractextractor.md#defaultextractoroptions)

---

## Methods

<a id="buildextractorresult"></a>

### `<Protected>` buildExtractorResult

▸ **buildExtractorResult**(n: *`CallExpression`*, output: *`string`*, options?: *[ExtractorOptions](../interfaces/_types_.extractoroptions.md)*): `object`

*Defined in [extractors/abstractExtractor.ts:47](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/c505d33/src/extractors/abstractExtractor.ts#L47)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |
| output | `string` |
| `Optional` options | [ExtractorOptions](../interfaces/_types_.extractoroptions.md) |

**Returns:** `object`

___
<a id="extract"></a>

### `<Abstract>` extract

▸ **extract**(n: *`CallExpression`*, index: *`number`*, getter: *[ExtractorGetter](../modules/_types_.md#extractorgetter)*, options: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*, variableAccessor: *[FileVariableAccessor](../modules/_types_.md#filevariableaccessor)*, project?: *`Project`*): [ExtractorResult](../interfaces/_types_.extractorresult.md)

*Implementation of [ExtractorClass](../interfaces/_types_.extractorclass.md).[extract](../interfaces/_types_.extractorclass.md#extract)*

*Defined in [extractors/abstractExtractor.ts:21](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/c505d33/src/extractors/abstractExtractor.ts#L21)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |
| index | `number` |
| getter | [ExtractorGetter](../modules/_types_.md#extractorgetter) |
| options | `Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)> |
| variableAccessor | [FileVariableAccessor](../modules/_types_.md#filevariableaccessor) |
| `Optional` project | `Project` |

**Returns:** [ExtractorResult](../interfaces/_types_.extractorresult.md)

___
<a id="getoptionsfromfistarg"></a>

### `<Protected>` getOptionsFromFistArg

▸ **getOptionsFromFistArg**<`T`>(n: *`CallExpression`*): `T` \| `undefined`

*Defined in [extractors/abstractExtractor.ts:37](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/c505d33/src/extractors/abstractExtractor.ts#L37)*

Get options from first argument or undefined.

TODO: support references

TODO: dont eval

**Type parameters:**

#### T :  [ExtractorOptions](../interfaces/_types_.extractoroptions.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |

**Returns:** `T` \| `undefined`

___

## Object literals

<a id="defaultextractoroptions"></a>

### `<Protected>` defaultExtractorOptions

**defaultExtractorOptions**: *`object`*

*Defined in [extractors/abstractExtractor.ts:16](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/c505d33/src/extractors/abstractExtractor.ts#L16)*

<a id="defaultextractoroptions.outputmode"></a>

####  outputMode

**● outputMode**: *"asReturnValue"* = "asReturnValue"

*Defined in [extractors/abstractExtractor.ts:17](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/c505d33/src/extractors/abstractExtractor.ts#L17)*

___
<a id="defaultextractoroptions.targetmode"></a>

####  targetMode

**● targetMode**: *"self"* = "self"

*Defined in [extractors/abstractExtractor.ts:18](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/c505d33/src/extractors/abstractExtractor.ts#L18)*

___

___

