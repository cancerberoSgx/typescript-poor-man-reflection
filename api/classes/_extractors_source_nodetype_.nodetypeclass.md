[typescript-poor-man-reflection](../README.md) > ["extractors/source/nodeType"](../modules/_extractors_source_nodetype_.md) > [NodeTypeClass](../classes/_extractors_source_nodetype_.nodetypeclass.md)

# Class: NodeTypeClass

## Hierarchy

 [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md)

**↳ NodeTypeClass**

## Implements

* [ExtractorClass](../interfaces/_types_.extractorclass.md)

## Index

### Properties

* [config](_extractors_source_nodetype_.nodetypeclass.md#config)
* [defaultExtractorOptions](_extractors_source_nodetype_.nodetypeclass.md#defaultextractoroptions)
* [freeArgumentNumber](_extractors_source_nodetype_.nodetypeclass.md#freeargumentnumber)
* [name](_extractors_source_nodetype_.nodetypeclass.md#name)

### Methods

* [afterExtract](_extractors_source_nodetype_.nodetypeclass.md#afterextract)
* [beforeExtract](_extractors_source_nodetype_.nodetypeclass.md#beforeextract)
* [buildExtractorResult](_extractors_source_nodetype_.nodetypeclass.md#buildextractorresult)
* [buildType](_extractors_source_nodetype_.nodetypeclass.md#buildtype)
* [error](_extractors_source_nodetype_.nodetypeclass.md#error)
* [extract](_extractors_source_nodetype_.nodetypeclass.md#extract)
* [getConfig](_extractors_source_nodetype_.nodetypeclass.md#getconfig)
* [getOptionsFromFistArg](_extractors_source_nodetype_.nodetypeclass.md#getoptionsfromfistarg)
* [getTarget](_extractors_source_nodetype_.nodetypeclass.md#gettarget)
* [parseOptionValue](_extractors_source_nodetype_.nodetypeclass.md#parseoptionvalue)

---

## Properties

<a id="config"></a>

### `<Protected>` config

**● config**: *[ExtractorOptions](../interfaces/_types_.extractoroptions.md)*

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[config](_extractors_abstractextractor_.abstractextractor.md#config)*

*Defined in [extractors/abstractExtractor.ts:24](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3c8d91b/src/extractors/abstractExtractor.ts#L24)*

___
<a id="defaultextractoroptions"></a>

### `<Protected>` defaultExtractorOptions

**● defaultExtractorOptions**: *[ExtractorOptions](../interfaces/_types_.extractoroptions.md)*

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[defaultExtractorOptions](_extractors_abstractextractor_.abstractextractor.md#defaultextractoroptions)*

*Defined in [extractors/abstractExtractor.ts:22](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3c8d91b/src/extractors/abstractExtractor.ts#L22)*

___
<a id="freeargumentnumber"></a>

### `<Protected>` freeArgumentNumber

**● freeArgumentNumber**: *`number`* = 1

*Overrides [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[freeArgumentNumber](_extractors_abstractextractor_.abstractextractor.md#freeargumentnumber)*

*Defined in [extractors/source/nodeType.ts:82](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3c8d91b/src/extractors/source/nodeType.ts#L82)*

___
<a id="name"></a>

### `<Optional>` name

**● name**: *`undefined` \| `string`*

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[name](_extractors_abstractextractor_.abstractextractor.md#name)*

*Defined in [extractors/abstractExtractor.ts:26](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3c8d91b/src/extractors/abstractExtractor.ts#L26)*

___

## Methods

<a id="afterextract"></a>

###  afterExtract

▸ **afterExtract**(filePath: *`string`*, extractorName: *`string`*, options: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*): `void`

*Implementation of [ExtractorClass](../interfaces/_types_.extractorclass.md).[afterExtract](../interfaces/_types_.extractorclass.md#afterextract)*

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[afterExtract](_extractors_abstractextractor_.abstractextractor.md#afterextract)*

*Defined in [extractors/abstractExtractor.ts:162](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3c8d91b/src/extractors/abstractExtractor.ts#L162)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| filePath | `string` |
| extractorName | `string` |
| options | `Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)> |

**Returns:** `void`

___
<a id="beforeextract"></a>

###  beforeExtract

▸ **beforeExtract**(filePath: *`string`*, extractorName: *`string`*, options: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*): `void`

*Implementation of [ExtractorClass](../interfaces/_types_.extractorclass.md).[beforeExtract](../interfaces/_types_.extractorclass.md#beforeextract)*

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[beforeExtract](_extractors_abstractextractor_.abstractextractor.md#beforeextract)*

*Defined in [extractors/abstractExtractor.ts:180](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3c8d91b/src/extractors/abstractExtractor.ts#L180)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| filePath | `string` |
| extractorName | `string` |
| options | `Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)> |

**Returns:** `void`

___
<a id="buildextractorresult"></a>

### `<Protected>` buildExtractorResult

▸ **buildExtractorResult**(n: *`CallExpression`*, output: *[BuildExtractorResultOutput](../modules/_extractors_abstractextractor_.md#buildextractorresultoutput)*, getter: *[ExtractorGetter](../modules/_types_.md#extractorgetter)*, index: *`number`*, extractOptions: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*, extractorOptions?: *[ExtractorOptions](../interfaces/_types_.extractoroptions.md)*): [ExtractorResult](../interfaces/_types_.extractorresult.md)

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[buildExtractorResult](_extractors_abstractextractor_.abstractextractor.md#buildextractorresult)*

*Defined in [extractors/abstractExtractor.ts:86](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3c8d91b/src/extractors/abstractExtractor.ts#L86)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| n | `CallExpression` |
| output | [BuildExtractorResultOutput](../modules/_extractors_abstractextractor_.md#buildextractorresultoutput) |  if string, then it will be stored and returned in argument as a string literal. If node, it will be stored as string literal (not escaped) and it will be returned (in argument) as the Node literal no string. In later case, it needs to be an expression(cannot be a statement) but in general, it will be since they are using it in an argument value. |
| getter | [ExtractorGetter](../modules/_types_.md#extractorgetter) |
| index | `number` |
| extractOptions | `Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)> |
| `Optional` extractorOptions | [ExtractorOptions](../interfaces/_types_.extractoroptions.md) |

**Returns:** [ExtractorResult](../interfaces/_types_.extractorresult.md)

___
<a id="buildtype"></a>

### `<Protected>` buildType

▸ **buildType**(n: *`Node`*, config: *[NodeTypeOptions](../interfaces/_extractors_source_nodetype_.nodetypeoptions.md)*, options: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*): `any`

*Defined in [extractors/source/nodeType.ts:52](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3c8d91b/src/extractors/source/nodeType.ts#L52)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `Node` |
| config | [NodeTypeOptions](../interfaces/_extractors_source_nodetype_.nodetypeoptions.md) |
| options | `Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)> |

**Returns:** `any`

___
<a id="error"></a>

### `<Protected>` error

▸ **error**(m: *`string`*): `void`

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[error](_extractors_abstractextractor_.abstractextractor.md#error)*

*Defined in [extractors/abstractExtractor.ts:194](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3c8d91b/src/extractors/abstractExtractor.ts#L194)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| m | `string` |

**Returns:** `void`

___
<a id="extract"></a>

###  extract

▸ **extract**(n: *`CallExpression`*, index: *`number`*, getter: *[ExtractorGetter](../modules/_types_.md#extractorgetter)*, options: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*): [ExtractorResult](../interfaces/_types_.extractorresult.md)

*Overrides [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[extract](_extractors_abstractextractor_.abstractextractor.md#extract)*

*Defined in [extractors/source/nodeType.ts:39](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3c8d91b/src/extractors/source/nodeType.ts#L39)*

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

*Defined in [extractors/abstractExtractor.ts:28](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3c8d91b/src/extractors/abstractExtractor.ts#L28)*

**Returns:** `object`

___
<a id="getoptionsfromfistarg"></a>

### `<Protected>` getOptionsFromFistArg

▸ **getOptionsFromFistArg**<`T`>(n: *`CallExpression`*): `T` \| `undefined`

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[getOptionsFromFistArg](_extractors_abstractextractor_.abstractextractor.md#getoptionsfromfistarg)*

*Defined in [extractors/abstractExtractor.ts:50](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3c8d91b/src/extractors/abstractExtractor.ts#L50)*

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

*Defined in [extractors/abstractExtractor.ts:140](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3c8d91b/src/extractors/abstractExtractor.ts#L140)*

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

*Defined in [extractors/source/nodeType.ts:75](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3c8d91b/src/extractors/source/nodeType.ts#L75)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| value | `Node` \| `undefined` |

**Returns:** `any`

___

