[typescript-poor-man-reflection](../README.md) > ["extractors/fs/cat"](../modules/_extractors_fs_cat_.md) > [CatClass](../classes/_extractors_fs_cat_.catclass.md)

# Class: CatClass

## Hierarchy

 [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md)

**↳ CatClass**

## Implements

* [ExtractorClass](../interfaces/_types_.extractorclass.md)

## Index

### Properties

* [defaultExtractorOptions](_extractors_fs_cat_.catclass.md#defaultextractoroptions)

### Methods

* [afterWriteExtractorData](_extractors_fs_cat_.catclass.md#afterwriteextractordata)
* [buildExtractorResult](_extractors_fs_cat_.catclass.md#buildextractorresult)
* [extract](_extractors_fs_cat_.catclass.md#extract)
* [getConfig](_extractors_fs_cat_.catclass.md#getconfig)
* [getOptionsFromFistArg](_extractors_fs_cat_.catclass.md#getoptionsfromfistarg)
* [getTarget](_extractors_fs_cat_.catclass.md#gettarget)
* [parseOptionValue](_extractors_fs_cat_.catclass.md#parseoptionvalue)

---

## Properties

<a id="defaultextractoroptions"></a>

### `<Protected>` defaultExtractorOptions

**● defaultExtractorOptions**: *[ExtractorOptions](../interfaces/_types_.extractoroptions.md)*

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[defaultExtractorOptions](_extractors_abstractextractor_.abstractextractor.md#defaultextractoroptions)*

*Defined in [extractors/abstractExtractor.ts:15](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3b7b7d6/src/extractors/abstractExtractor.ts#L15)*

___

## Methods

<a id="afterwriteextractordata"></a>

###  afterWriteExtractorData

▸ **afterWriteExtractorData**(c: *`CallExpression`*, index: *`number`*, options: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*): `void`

*Implementation of [ExtractorClass](../interfaces/_types_.extractorclass.md).[afterWriteExtractorData](../interfaces/_types_.extractorclass.md#afterwriteextractordata)*

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[afterWriteExtractorData](_extractors_abstractextractor_.abstractextractor.md#afterwriteextractordata)*

*Defined in [extractors/abstractExtractor.ts:118](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3b7b7d6/src/extractors/abstractExtractor.ts#L118)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| c | `CallExpression` |
| index | `number` |
| options | `Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)> |

**Returns:** `void`

___
<a id="buildextractorresult"></a>

### `<Protected>` buildExtractorResult

▸ **buildExtractorResult**(n: *`CallExpression`*, output: *`string`*, getter: *[ExtractorGetter](../modules/_types_.md#extractorgetter)*, index: *`number`*, extractOptions: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*, extractorOptions?: *[ExtractorOptions](../interfaces/_types_.extractoroptions.md)*): [ExtractorResult](../interfaces/_types_.extractorresult.md)

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[buildExtractorResult](_extractors_abstractextractor_.abstractextractor.md#buildextractorresult)*

*Defined in [extractors/abstractExtractor.ts:62](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3b7b7d6/src/extractors/abstractExtractor.ts#L62)*

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

###  extract

▸ **extract**(n: *`CallExpression`*, index: *`number`*, getter: *[ExtractorGetter](../modules/_types_.md#extractorgetter)*, options: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*, variableAccessor: *[FileVariableAccessor](../modules/_types_.md#filevariableaccessor)*): [ExtractorResult](../interfaces/_types_.extractorresult.md)

*Implementation of [ExtractorClass](../interfaces/_types_.extractorclass.md).[extract](../interfaces/_types_.extractorclass.md#extract)*

*Overrides [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[extract](_extractors_abstractextractor_.abstractextractor.md#extract)*

*Defined in [extractors/fs/cat.ts:33](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3b7b7d6/src/extractors/fs/cat.ts#L33)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |
| index | `number` |
| getter | [ExtractorGetter](../modules/_types_.md#extractorgetter) |
| options | `Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)> |
| variableAccessor | [FileVariableAccessor](../modules/_types_.md#filevariableaccessor) |

**Returns:** [ExtractorResult](../interfaces/_types_.extractorresult.md)

___
<a id="getconfig"></a>

###  getConfig

▸ **getConfig**(): `object`

*Implementation of [ExtractorClass](../interfaces/_types_.extractorclass.md).[getConfig](../interfaces/_types_.extractorclass.md#getconfig)*

*Overrides [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[getConfig](_extractors_abstractextractor_.abstractextractor.md#getconfig)*

*Defined in [extractors/fs/cat.ts:55](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3b7b7d6/src/extractors/fs/cat.ts#L55)*

**Returns:** `object`

___
<a id="getoptionsfromfistarg"></a>

### `<Protected>` getOptionsFromFistArg

▸ **getOptionsFromFistArg**<`T`>(n: *`CallExpression`*): `T` \| `undefined`

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[getOptionsFromFistArg](_extractors_abstractextractor_.abstractextractor.md#getoptionsfromfistarg)*

*Defined in [extractors/abstractExtractor.ts:39](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3b7b7d6/src/extractors/abstractExtractor.ts#L39)*

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
<a id="gettarget"></a>

### `<Protected>` getTarget

▸ **getTarget**(n: *`CallExpression`*, config: *[ExtractorOptions](../interfaces/_types_.extractoroptions.md)*): `undefined` \| `Node`<`Node`>

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[getTarget](_extractors_abstractextractor_.abstractextractor.md#gettarget)*

*Defined in [extractors/abstractExtractor.ts:98](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3b7b7d6/src/extractors/abstractExtractor.ts#L98)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |
| config | [ExtractorOptions](../interfaces/_types_.extractoroptions.md) |

**Returns:** `undefined` \| `Node`<`Node`>

___
<a id="parseoptionvalue"></a>

### `<Protected>` parseOptionValue

▸ **parseOptionValue**(name: *`string`*, value: *`Node` \| `undefined`*): `any`

*Overrides [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[parseOptionValue](_extractors_abstractextractor_.abstractextractor.md#parseoptionvalue)*

*Defined in [extractors/fs/cat.ts:48](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3b7b7d6/src/extractors/fs/cat.ts#L48)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| value | `Node` \| `undefined` |

**Returns:** `any`

___

