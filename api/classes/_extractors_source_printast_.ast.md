[typescript-poor-man-reflection](../README.md) > ["extractors/source/printAst"](../modules/_extractors_source_printast_.md) > [Ast](../classes/_extractors_source_printast_.ast.md)

# Class: Ast

## Hierarchy

 [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md)

**↳ Ast**

## Implements

* [ExtractorClass](../interfaces/_types_.extractorclass.md)
* [ExtractorClass](../interfaces/_types_.extractorclass.md)

## Index

### Properties

* [defaultExtractorOptions](_extractors_source_printast_.ast.md#defaultextractoroptions)
* [freeArgumentNumber](_extractors_source_printast_.ast.md#freeargumentnumber)

### Methods

* [afterExtract](_extractors_source_printast_.ast.md#afterextract)
* [beforeExtract](_extractors_source_printast_.ast.md#beforeextract)
* [buildAst](_extractors_source_printast_.ast.md#buildast)
* [buildExtractorResult](_extractors_source_printast_.ast.md#buildextractorresult)
* [extract](_extractors_source_printast_.ast.md#extract)
* [getConfig](_extractors_source_printast_.ast.md#getconfig)
* [getOptionsFromFistArg](_extractors_source_printast_.ast.md#getoptionsfromfistarg)
* [getTarget](_extractors_source_printast_.ast.md#gettarget)
* [parseOptionValue](_extractors_source_printast_.ast.md#parseoptionvalue)
* [printAncestors](_extractors_source_printast_.ast.md#printancestors)
* [printDescendants](_extractors_source_printast_.ast.md#printdescendants)
* [printNode](_extractors_source_printast_.ast.md#printnode)

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

*Overrides [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[freeArgumentNumber](_extractors_abstractextractor_.abstractextractor.md#freeargumentnumber)*

*Defined in [extractors/source/printAst.ts:136](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/extractors/source/printAst.ts#L136)*

___

## Methods

<a id="afterextract"></a>

###  afterExtract

▸ **afterExtract**(filePath: *`string`*, extractorName: *`string`*, options: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*): `void`

*Implementation of [ExtractorClass](../interfaces/_types_.extractorclass.md).[afterExtract](../interfaces/_types_.extractorclass.md#afterextract)*

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[afterExtract](_extractors_abstractextractor_.abstractextractor.md#afterextract)*

*Defined in [extractors/abstractExtractor.ts:117](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/extractors/abstractExtractor.ts#L117)*

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
<a id="buildast"></a>

### `<Protected>` buildAst

▸ **buildAst**(n: *`Node`*, config?: *[AstOptions](../interfaces/_extractors_source_printast_.astoptions.md)*): `string` \| [AstNode](../interfaces/_extractors_source_printast_.astnode.md)

*Defined in [extractors/source/printAst.ts:73](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/extractors/source/printAst.ts#L73)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| n | `Node` | - |
| `Default value` config | [AstOptions](../interfaces/_extractors_source_printast_.astoptions.md) |  {} |

**Returns:** `string` \| [AstNode](../interfaces/_extractors_source_printast_.astnode.md)

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

*Overrides [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[extract](_extractors_abstractextractor_.abstractextractor.md#extract)*

*Defined in [extractors/source/printAst.ts:45](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/extractors/source/printAst.ts#L45)*

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

*Overrides [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[parseOptionValue](_extractors_abstractextractor_.abstractextractor.md#parseoptionvalue)*

*Defined in [extractors/source/printAst.ts:65](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/extractors/source/printAst.ts#L65)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| value | `Node` \| `undefined` |

**Returns:** `any`

___
<a id="printancestors"></a>

### `<Protected>` printAncestors

▸ **printAncestors**(a: *`Node`[]*, level?: *`number`*, config?: *[AstOptions](../interfaces/_extractors_source_printast_.astoptions.md)*): [AstNode](../interfaces/_extractors_source_printast_.astnode.md) \| (`string` \| `object`)[]

*Defined in [extractors/source/printAst.ts:117](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/extractors/source/printAst.ts#L117)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| a | `Node`[] | - |
| `Default value` level | `number` | 0 |
| `Default value` config | [AstOptions](../interfaces/_extractors_source_printast_.astoptions.md) |  {} |

**Returns:** [AstNode](../interfaces/_extractors_source_printast_.astnode.md) \| (`string` \| `object`)[]

___
<a id="printdescendants"></a>

### `<Protected>` printDescendants

▸ **printDescendants**(n: *`Node`*, level: *`number`*, config?: *[AstOptions](../interfaces/_extractors_source_printast_.astoptions.md)*): `string` \| [AstNode](../interfaces/_extractors_source_printast_.astnode.md)

*Defined in [extractors/source/printAst.ts:89](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/extractors/source/printAst.ts#L89)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| n | `Node` | - |
| level | `number` | - |
| `Default value` config | [AstOptions](../interfaces/_extractors_source_printast_.astoptions.md) |  {} |

**Returns:** `string` \| [AstNode](../interfaces/_extractors_source_printast_.astnode.md)

___
<a id="printnode"></a>

### `<Protected>` printNode

▸ **printNode**(n: *`Node`*, level: *`number`*, config?: *[AstOptions](../interfaces/_extractors_source_printast_.astoptions.md)*): `string` \| `object`

*Defined in [extractors/source/printAst.ts:101](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/extractors/source/printAst.ts#L101)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| n | `Node` | - |
| level | `number` | - |
| `Default value` config | [AstOptions](../interfaces/_extractors_source_printast_.astoptions.md) |  {} |

**Returns:** `string` \| `object`

___

