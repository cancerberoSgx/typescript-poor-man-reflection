[typescript-poor-man-reflection](../README.md) > ["extractors/source/abstractRefactorExtractor"](../modules/_extractors_source_abstractrefactorextractor_.md) > [AbstractRefactorExtractor](../classes/_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md)

# Class: AbstractRefactorExtractor

## Hierarchy

 [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md)

**↳ AbstractRefactorExtractor**

↳  [InferTypesClass](_extractors_source_infertypes_.infertypesclass.md)

↳  [OrganizeImportsClass](_extractors_source_organizeimports_.organizeimportsclass.md)

↳  [RemoveUnusedClass](_extractors_source_removeunused_.removeunusedclass.md)

## Implements

* [ExtractorClass](../interfaces/_types_.extractorclass.md)

## Index

### Properties

* [defaultExtractorOptions](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md#defaultextractoroptions)
* [freeArgumentNumber](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md#freeargumentnumber)

### Methods

* [afterExtract](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md#afterextract)
* [beforeExtract](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md#beforeextract)
* [buildExtractorResult](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md#buildextractorresult)
* [extract](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md#extract)
* [getConfig](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md#getconfig)
* [getOptionsFromFistArg](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md#getoptionsfromfistarg)
* [getTarget](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md#gettarget)
* [parseOptionValue](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md#parseoptionvalue)
* [performRefactor](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md#performrefactor)

---

## Properties

<a id="defaultextractoroptions"></a>

### `<Protected>` defaultExtractorOptions

**● defaultExtractorOptions**: *[ExtractorOptions](../interfaces/_types_.extractoroptions.md)*

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[defaultExtractorOptions](_extractors_abstractextractor_.abstractextractor.md#defaultextractoroptions)*

*Defined in [extractors/abstractExtractor.ts:15](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b7b4f65/src/extractors/abstractExtractor.ts#L15)*

___
<a id="freeargumentnumber"></a>

### `<Protected>` freeArgumentNumber

**● freeArgumentNumber**: *`number`* = 1

*Overrides [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[freeArgumentNumber](_extractors_abstractextractor_.abstractextractor.md#freeargumentnumber)*

*Defined in [extractors/source/abstractRefactorExtractor.ts:16](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b7b4f65/src/extractors/source/abstractRefactorExtractor.ts#L16)*

___

## Methods

<a id="afterextract"></a>

###  afterExtract

▸ **afterExtract**(filePath: *`string`*, extractorName: *`string`*, options: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*): `void`

*Implementation of [ExtractorClass](../interfaces/_types_.extractorclass.md).[afterExtract](../interfaces/_types_.extractorclass.md#afterextract)*

*Overrides [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[afterExtract](_extractors_abstractextractor_.abstractextractor.md#afterextract)*

*Defined in [extractors/source/abstractRefactorExtractor.ts:30](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b7b4f65/src/extractors/source/abstractRefactorExtractor.ts#L30)*

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

*Defined in [extractors/abstractExtractor.ts:152](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b7b4f65/src/extractors/abstractExtractor.ts#L152)*

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

▸ **buildExtractorResult**(n: *`CallExpression`*, output: *`string` \| `Node`*, getter: *[ExtractorGetter](../modules/_types_.md#extractorgetter)*, index: *`number`*, extractOptions: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*, extractorOptions?: *[ExtractorOptions](../interfaces/_types_.extractoroptions.md)*): [ExtractorResult](../interfaces/_types_.extractorresult.md)

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[buildExtractorResult](_extractors_abstractextractor_.abstractextractor.md#buildextractorresult)*

*Defined in [extractors/abstractExtractor.ts:74](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b7b4f65/src/extractors/abstractExtractor.ts#L74)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| n | `CallExpression` |
| output | `string` \| `Node` |  if string, then it will be stored and returned in argument as a string literal. If node, it will be stored as string literal (not escaped) and it will be returned (in argument) as the Node literal no string. In later case, it needs to be an expression(cannot be a statement) but in general, it will be since they are using it in an argument value. |
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

*Defined in [extractors/source/abstractRefactorExtractor.ts:20](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b7b4f65/src/extractors/source/abstractRefactorExtractor.ts#L20)*

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

*Defined in [extractors/abstractExtractor.ts:17](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b7b4f65/src/extractors/abstractExtractor.ts#L17)*

**Returns:** `object`

___
<a id="getoptionsfromfistarg"></a>

### `<Protected>` getOptionsFromFistArg

▸ **getOptionsFromFistArg**<`T`>(n: *`CallExpression`*): `T` \| `undefined`

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[getOptionsFromFistArg](_extractors_abstractextractor_.abstractextractor.md#getoptionsfromfistarg)*

*Defined in [extractors/abstractExtractor.ts:39](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b7b4f65/src/extractors/abstractExtractor.ts#L39)*

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

*Defined in [extractors/abstractExtractor.ts:114](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b7b4f65/src/extractors/abstractExtractor.ts#L114)*

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

*Defined in [extractors/source/abstractRefactorExtractor.ts:53](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b7b4f65/src/extractors/source/abstractRefactorExtractor.ts#L53)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| value | `Node` \| `undefined` |

**Returns:** `any`

___
<a id="performrefactor"></a>

### `<Protected>``<Abstract>` performRefactor

▸ **performRefactor**(project: *`Project`*, f: *`SourceFile`*): `void`

*Defined in [extractors/source/abstractRefactorExtractor.ts:18](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b7b4f65/src/extractors/source/abstractRefactorExtractor.ts#L18)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| project | `Project` |
| f | `SourceFile` |

**Returns:** `void`

___

