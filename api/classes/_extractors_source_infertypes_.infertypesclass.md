[typescript-poor-man-reflection](../README.md) > ["extractors/source/inferTypes"](../modules/_extractors_source_infertypes_.md) > [InferTypesClass](../classes/_extractors_source_infertypes_.infertypesclass.md)

# Class: InferTypesClass

## Hierarchy

↳  [AbstractRefactorExtractor](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md)

**↳ InferTypesClass**

## Implements

* [ExtractorClass](../interfaces/_types_.extractorclass.md)

## Index

### Properties

* [defaultExtractorOptions](_extractors_source_infertypes_.infertypesclass.md#defaultextractoroptions)
* [freeArgumentNumber](_extractors_source_infertypes_.infertypesclass.md#freeargumentnumber)

### Methods

* [afterWriteExtractorData](_extractors_source_infertypes_.infertypesclass.md#afterwriteextractordata)
* [buildExtractorResult](_extractors_source_infertypes_.infertypesclass.md#buildextractorresult)
* [extract](_extractors_source_infertypes_.infertypesclass.md#extract)
* [getConfig](_extractors_source_infertypes_.infertypesclass.md#getconfig)
* [getOptionsFromFistArg](_extractors_source_infertypes_.infertypesclass.md#getoptionsfromfistarg)
* [getTarget](_extractors_source_infertypes_.infertypesclass.md#gettarget)
* [parseOptionValue](_extractors_source_infertypes_.infertypesclass.md#parseoptionvalue)
* [performRefactor](_extractors_source_infertypes_.infertypesclass.md#performrefactor)

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

**● freeArgumentNumber**: *`number`* = 1

*Inherited from [AbstractRefactorExtractor](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md).[freeArgumentNumber](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md#freeargumentnumber)*

*Overrides [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[freeArgumentNumber](_extractors_abstractextractor_.abstractextractor.md#freeargumentnumber)*

*Defined in [extractors/source/abstractRefactorExtractor.ts:56](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/e3a07d8/src/extractors/source/abstractRefactorExtractor.ts#L56)*

___

## Methods

<a id="afterwriteextractordata"></a>

###  afterWriteExtractorData

▸ **afterWriteExtractorData**(n: *`CallExpression`*, index: *`number`*, options: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*): `void`

*Implementation of [ExtractorClass](../interfaces/_types_.extractorclass.md).[afterWriteExtractorData](../interfaces/_types_.extractorclass.md#afterwriteextractordata)*

*Inherited from [AbstractRefactorExtractor](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md).[afterWriteExtractorData](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md#afterwriteextractordata)*

*Overrides [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[afterWriteExtractorData](_extractors_abstractextractor_.abstractextractor.md#afterwriteextractordata)*

*Defined in [extractors/source/abstractRefactorExtractor.ts:32](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/e3a07d8/src/extractors/source/abstractRefactorExtractor.ts#L32)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |
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

*Inherited from [AbstractRefactorExtractor](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md).[extract](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md#extract)*

*Overrides [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[extract](_extractors_abstractextractor_.abstractextractor.md#extract)*

*Defined in [extractors/source/abstractRefactorExtractor.ts:21](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/e3a07d8/src/extractors/source/abstractRefactorExtractor.ts#L21)*

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

*Inherited from [AbstractRefactorExtractor](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md).[parseOptionValue](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md#parseoptionvalue)*

*Overrides [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[parseOptionValue](_extractors_abstractextractor_.abstractextractor.md#parseoptionvalue)*

*Defined in [extractors/source/abstractRefactorExtractor.ts:48](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/e3a07d8/src/extractors/source/abstractRefactorExtractor.ts#L48)*

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

*Defined in [extractors/source/inferTypes.ts:21](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/e3a07d8/src/extractors/source/inferTypes.ts#L21)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| project | `Project` |
| f | `SourceFile` |

**Returns:** `void`

___

