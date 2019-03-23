[typescript-poor-man-reflection](../README.md) > ["extractors/source/removeUnused"](../modules/_extractors_source_removeunused_.md) > [RemoveUnusedClass](../classes/_extractors_source_removeunused_.removeunusedclass.md)

# Class: RemoveUnusedClass

## Hierarchy

↳  [AbstractRefactorExtractor](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md)

**↳ RemoveUnusedClass**

## Implements

* [ExtractorClass](../interfaces/_types_.extractorclass.md)

## Index

### Properties

* [defaultExtractorOptions](_extractors_source_removeunused_.removeunusedclass.md#defaultextractoroptions)
* [freeArgumentNumber](_extractors_source_removeunused_.removeunusedclass.md#freeargumentnumber)

### Methods

* [afterExtract](_extractors_source_removeunused_.removeunusedclass.md#afterextract)
* [beforeExtract](_extractors_source_removeunused_.removeunusedclass.md#beforeextract)
* [buildExtractorResult](_extractors_source_removeunused_.removeunusedclass.md#buildextractorresult)
* [extract](_extractors_source_removeunused_.removeunusedclass.md#extract)
* [getConfig](_extractors_source_removeunused_.removeunusedclass.md#getconfig)
* [getOptionsFromFistArg](_extractors_source_removeunused_.removeunusedclass.md#getoptionsfromfistarg)
* [getTarget](_extractors_source_removeunused_.removeunusedclass.md#gettarget)
* [parseOptionValue](_extractors_source_removeunused_.removeunusedclass.md#parseoptionvalue)
* [performRefactor](_extractors_source_removeunused_.removeunusedclass.md#performrefactor)

---

## Properties

<a id="defaultextractoroptions"></a>

### `<Protected>` defaultExtractorOptions

**● defaultExtractorOptions**: *[ExtractorOptions](../interfaces/_types_.extractoroptions.md)*

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[defaultExtractorOptions](_extractors_abstractextractor_.abstractextractor.md#defaultextractoroptions)*

*Defined in [extractors/abstractExtractor.ts:8](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/extractors/abstractExtractor.ts#L8)*

___
<a id="freeargumentnumber"></a>

### `<Protected>` freeArgumentNumber

**● freeArgumentNumber**: *`number`* = 1

*Inherited from [AbstractRefactorExtractor](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md).[freeArgumentNumber](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md#freeargumentnumber)*

*Overrides [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[freeArgumentNumber](_extractors_abstractextractor_.abstractextractor.md#freeargumentnumber)*

*Defined in [extractors/source/abstractRefactorExtractor.ts:16](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/extractors/source/abstractRefactorExtractor.ts#L16)*

___

## Methods

<a id="afterextract"></a>

###  afterExtract

▸ **afterExtract**(filePath: *`string`*, extractorName: *`string`*, options: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*): `void`

*Implementation of [ExtractorClass](../interfaces/_types_.extractorclass.md).[afterExtract](../interfaces/_types_.extractorclass.md#afterextract)*

*Inherited from [AbstractRefactorExtractor](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md).[afterExtract](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md#afterextract)*

*Overrides [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[afterExtract](_extractors_abstractextractor_.abstractextractor.md#afterextract)*

*Defined in [extractors/source/abstractRefactorExtractor.ts:29](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/extractors/source/abstractRefactorExtractor.ts#L29)*

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

*Defined in [extractors/abstractExtractor.ts:133](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/extractors/abstractExtractor.ts#L133)*

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

▸ **buildExtractorResult**(n: *`CallExpression`*, output: *`string`*, getter: *[ExtractorGetter](../modules/_types_.md#extractorgetter)*, index: *`number`*, extractOptions: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*, extractorOptions?: *[ExtractorOptions](../interfaces/_types_.extractoroptions.md)*): [ExtractorResult](../interfaces/_types_.extractorresult.md)

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[buildExtractorResult](_extractors_abstractextractor_.abstractextractor.md#buildextractorresult)*

*Defined in [extractors/abstractExtractor.ts:61](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/extractors/abstractExtractor.ts#L61)*

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

*Inherited from [AbstractRefactorExtractor](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md).[extract](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md#extract)*

*Overrides [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[extract](_extractors_abstractextractor_.abstractextractor.md#extract)*

*Defined in [extractors/source/abstractRefactorExtractor.ts:19](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/extractors/source/abstractRefactorExtractor.ts#L19)*

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

*Defined in [extractors/abstractExtractor.ts:10](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/extractors/abstractExtractor.ts#L10)*

**Returns:** `object`

___
<a id="getoptionsfromfistarg"></a>

### `<Protected>` getOptionsFromFistArg

▸ **getOptionsFromFistArg**<`T`>(n: *`CallExpression`*): `T` \| `undefined`

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[getOptionsFromFistArg](_extractors_abstractextractor_.abstractextractor.md#getoptionsfromfistarg)*

*Defined in [extractors/abstractExtractor.ts:32](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/extractors/abstractExtractor.ts#L32)*

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

*Defined in [extractors/abstractExtractor.ts:97](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/extractors/abstractExtractor.ts#L97)*

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

*Inherited from [AbstractRefactorExtractor](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md).[parseOptionValue](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md#parseoptionvalue)*

*Overrides [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[parseOptionValue](_extractors_abstractextractor_.abstractextractor.md#parseoptionvalue)*

*Defined in [extractors/source/abstractRefactorExtractor.ts:52](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/extractors/source/abstractRefactorExtractor.ts#L52)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| value | `Node` \| `undefined` |

**Returns:** `any`

___
<a id="performrefactor"></a>

### `<Protected>` performRefactor

▸ **performRefactor**(project: *`Project`*, f: *`SourceFile`*): `void`

*Overrides [AbstractRefactorExtractor](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md).[performRefactor](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md#performrefactor)*

*Defined in [extractors/source/removeUnused.ts:23](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/extractors/source/removeUnused.ts#L23)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| project | `Project` |
| f | `SourceFile` |

**Returns:** `void`

___

