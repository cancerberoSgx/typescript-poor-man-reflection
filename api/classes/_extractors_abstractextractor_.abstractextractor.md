[typescript-poor-man-reflection](../README.md) > ["extractors/abstractExtractor"](../modules/_extractors_abstractextractor_.md) > [AbstractExtractor](../classes/_extractors_abstractextractor_.abstractextractor.md)

# Class: AbstractExtractor

## Hierarchy

**AbstractExtractor**

↳  [Ast](_extractors_ast_.ast.md)

↳  [BodyText](_extractors_basic_bodytext_.bodytext.md)

↳  [NodeText](_extractors_basic_nodetext_.nodetext.md)

↳  [ThisBlockText](_extractors_basic_thisblocktext_.thisblocktext.md)

↳  [TypeText](_extractors_basic_typetext_.typetext.md)

## Implements

* [ExtractorClass](../interfaces/_types_.extractorclass.md)

## Index

### Properties

* [defaultExtractorOptions](_extractors_abstractextractor_.abstractextractor.md#defaultextractoroptions)

### Methods

* [buildExtractorResult](_extractors_abstractextractor_.abstractextractor.md#buildextractorresult)
* [extract](_extractors_abstractextractor_.abstractextractor.md#extract)
* [getOptionsFromFistArg](_extractors_abstractextractor_.abstractextractor.md#getoptionsfromfistarg)
* [parseOptionValue](_extractors_abstractextractor_.abstractextractor.md#parseoptionvalue)

---

## Properties

<a id="defaultextractoroptions"></a>

### `<Protected>` defaultExtractorOptions

**● defaultExtractorOptions**: *[ExtractorOptions](../interfaces/_types_.extractoroptions.md)*

*Defined in [extractors/abstractExtractor.ts:14](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8c7c887/src/extractors/abstractExtractor.ts#L14)*

___

## Methods

<a id="buildextractorresult"></a>

### `<Protected>` buildExtractorResult

▸ **buildExtractorResult**(n: *`CallExpression`*, output: *`string`*, getter: *[ExtractorGetter](../modules/_types_.md#extractorgetter)*, index: *`number`*, extractOptions: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*, extractorOptions?: *[ExtractorOptions](../interfaces/_types_.extractoroptions.md)*): [ExtractorResult](../interfaces/_types_.extractorresult.md)

*Defined in [extractors/abstractExtractor.ts:58](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8c7c887/src/extractors/abstractExtractor.ts#L58)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |
| output | `string` |
| getter | [ExtractorGetter](../modules/_types_.md#extractorgetter) |
| index | `number` |
| extractOptions | `Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)> |
| `Optional` extractorOptions | [ExtractorOptions](../interfaces/_types_.extractoroptions.md) |

**Returns:** [ExtractorResult](../interfaces/_types_.extractorresult.md)

___
<a id="extract"></a>

### `<Abstract>` extract

▸ **extract**(n: *`CallExpression`*, index: *`number`*, getter: *[ExtractorGetter](../modules/_types_.md#extractorgetter)*, options: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*, variableAccessor: *[FileVariableAccessor](../modules/_types_.md#filevariableaccessor)*, project?: *`Project`*): [ExtractorResult](../interfaces/_types_.extractorresult.md)

*Implementation of [ExtractorClass](../interfaces/_types_.extractorclass.md).[extract](../interfaces/_types_.extractorclass.md#extract)*

*Defined in [extractors/abstractExtractor.ts:19](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8c7c887/src/extractors/abstractExtractor.ts#L19)*

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

*Defined in [extractors/abstractExtractor.ts:35](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8c7c887/src/extractors/abstractExtractor.ts#L35)*

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
<a id="parseoptionvalue"></a>

### `<Protected>` parseOptionValue

▸ **parseOptionValue**(name: *`string`*, value: *`Node` \| `undefined`*): `any`

*Defined in [extractors/abstractExtractor.ts:54](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8c7c887/src/extractors/abstractExtractor.ts#L54)*

since options need to be parsed from a literal object Node, subclasses might need to override this method to parse their own options

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| value | `Node` \| `undefined` |

**Returns:** `any`

___

