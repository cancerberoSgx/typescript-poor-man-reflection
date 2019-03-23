[typescript-poor-man-reflection](../README.md) > ["extractors/source/projectFiles"](../modules/_extractors_source_projectfiles_.md) > [ProjectFilesClass](../classes/_extractors_source_projectfiles_.projectfilesclass.md)

# Class: ProjectFilesClass

## Hierarchy

 [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md)

**↳ ProjectFilesClass**

## Implements

* [ExtractorClass](../interfaces/_types_.extractorclass.md)

## Index

### Properties

* [defaultExtractorOptions](_extractors_source_projectfiles_.projectfilesclass.md#defaultextractoroptions)
* [freeArgumentNumber](_extractors_source_projectfiles_.projectfilesclass.md#freeargumentnumber)

### Methods

* [afterWriteExtractorData](_extractors_source_projectfiles_.projectfilesclass.md#afterwriteextractordata)
* [buildExtractorResult](_extractors_source_projectfiles_.projectfilesclass.md#buildextractorresult)
* [extract](_extractors_source_projectfiles_.projectfilesclass.md#extract)
* [getConfig](_extractors_source_projectfiles_.projectfilesclass.md#getconfig)
* [getOptionsFromFistArg](_extractors_source_projectfiles_.projectfilesclass.md#getoptionsfromfistarg)
* [getTarget](_extractors_source_projectfiles_.projectfilesclass.md#gettarget)
* [parseOptionValue](_extractors_source_projectfiles_.projectfilesclass.md#parseoptionvalue)

---

## Properties

<a id="defaultextractoroptions"></a>

### `<Protected>` defaultExtractorOptions

**● defaultExtractorOptions**: *[ExtractorOptions](../interfaces/_types_.extractoroptions.md)*

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[defaultExtractorOptions](_extractors_abstractextractor_.abstractextractor.md#defaultextractoroptions)*

*Defined in [extractors/abstractExtractor.ts:15](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/e3a07d8/src/extractors/abstractExtractor.ts#L15)*

___
<a id="freeargumentnumber"></a>

### `<Protected>` freeArgumentNumber

**● freeArgumentNumber**: *`number`* = 0

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[freeArgumentNumber](_extractors_abstractextractor_.abstractextractor.md#freeargumentnumber)*

*Defined in [extractors/abstractExtractor.ts:16](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/e3a07d8/src/extractors/abstractExtractor.ts#L16)*

___

## Methods

<a id="afterwriteextractordata"></a>

###  afterWriteExtractorData

▸ **afterWriteExtractorData**(c: *`CallExpression`*, index: *`number`*, options: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*): `void`

*Implementation of [ExtractorClass](../interfaces/_types_.extractorclass.md).[afterWriteExtractorData](../interfaces/_types_.extractorclass.md#afterwriteextractordata)*

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[afterWriteExtractorData](_extractors_abstractextractor_.abstractextractor.md#afterwriteextractordata)*

*Defined in [extractors/abstractExtractor.ts:124](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/e3a07d8/src/extractors/abstractExtractor.ts#L124)*

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

*Defined in [extractors/abstractExtractor.ts:68](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/e3a07d8/src/extractors/abstractExtractor.ts#L68)*

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

▸ **extract**(n: *`CallExpression`*, index: *`number`*, getter: *[ExtractorGetter](../modules/_types_.md#extractorgetter)*, options: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*): [ExtractorResult](../interfaces/_types_.extractorresult.md)

*Overrides [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[extract](_extractors_abstractextractor_.abstractextractor.md#extract)*

*Defined in [extractors/source/projectFiles.ts:26](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/e3a07d8/src/extractors/source/projectFiles.ts#L26)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |
| index | `number` |
| getter | [ExtractorGetter](../modules/_types_.md#extractorgetter) |
| options | `Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)> |

**Returns:** [ExtractorResult](../interfaces/_types_.extractorresult.md)

___
<a id="getconfig"></a>

###  getConfig

▸ **getConfig**(): `object`

*Implementation of [ExtractorClass](../interfaces/_types_.extractorclass.md).[getConfig](../interfaces/_types_.extractorclass.md#getconfig)*

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[getConfig](_extractors_abstractextractor_.abstractextractor.md#getconfig)*

*Defined in [extractors/abstractExtractor.ts:17](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/e3a07d8/src/extractors/abstractExtractor.ts#L17)*

**Returns:** `object`

___
<a id="getoptionsfromfistarg"></a>

### `<Protected>` getOptionsFromFistArg

▸ **getOptionsFromFistArg**<`T`>(n: *`CallExpression`*): `T` \| `undefined`

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[getOptionsFromFistArg](_extractors_abstractextractor_.abstractextractor.md#getoptionsfromfistarg)*

*Defined in [extractors/abstractExtractor.ts:39](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/e3a07d8/src/extractors/abstractExtractor.ts#L39)*

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

*Defined in [extractors/abstractExtractor.ts:104](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/e3a07d8/src/extractors/abstractExtractor.ts#L104)*

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

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[parseOptionValue](_extractors_abstractextractor_.abstractextractor.md#parseoptionvalue)*

*Defined in [extractors/abstractExtractor.ts:58](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/e3a07d8/src/extractors/abstractExtractor.ts#L58)*

since options need to be parsed from a literal object Node, subclasses might need to override this method to parse their own options

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| value | `Node` \| `undefined` |

**Returns:** `any`

___

