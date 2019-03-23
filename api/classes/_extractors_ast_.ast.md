[typescript-poor-man-reflection](../README.md) > ["extractors/ast"](../modules/_extractors_ast_.md) > [Ast](../classes/_extractors_ast_.ast.md)

# Class: Ast

## Hierarchy

 [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md)

**↳ Ast**

## Implements

* [ExtractorClass](../interfaces/_types_.extractorclass.md)
* [ExtractorClass](../interfaces/_types_.extractorclass.md)

## Index

### Properties

* [defaultExtractorOptions](_extractors_ast_.ast.md#defaultextractoroptions)

### Methods

* [buildAst](_extractors_ast_.ast.md#buildast)
* [buildExtractorResult](_extractors_ast_.ast.md#buildextractorresult)
* [extract](_extractors_ast_.ast.md#extract)
* [getConfig](_extractors_ast_.ast.md#getconfig)
* [getOptionsFromFistArg](_extractors_ast_.ast.md#getoptionsfromfistarg)
* [getTarget](_extractors_ast_.ast.md#gettarget)
* [parseOptionValue](_extractors_ast_.ast.md#parseoptionvalue)
* [printAncestors](_extractors_ast_.ast.md#printancestors)
* [printDescendants](_extractors_ast_.ast.md#printdescendants)
* [printNode](_extractors_ast_.ast.md#printnode)

---

## Properties

<a id="defaultextractoroptions"></a>

### `<Protected>` defaultExtractorOptions

**● defaultExtractorOptions**: *[ExtractorOptions](../interfaces/_types_.extractoroptions.md)*

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[defaultExtractorOptions](_extractors_abstractextractor_.abstractextractor.md#defaultextractoroptions)*

*Defined in [extractors/abstractExtractor.ts:15](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3569c96/src/extractors/abstractExtractor.ts#L15)*

___

## Methods

<a id="buildast"></a>

### `<Protected>` buildAst

▸ **buildAst**(n: *`Node`*, config?: *[AstOptions](../interfaces/_extractors_ast_.astoptions.md)*): `string` \| [AstNode](../interfaces/_extractors_ast_.astnode.md)

*Defined in [extractors/ast.ts:88](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3569c96/src/extractors/ast.ts#L88)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| n | `Node` | - |
| `Default value` config | [AstOptions](../interfaces/_extractors_ast_.astoptions.md) |  {} |

**Returns:** `string` \| [AstNode](../interfaces/_extractors_ast_.astnode.md)

___
<a id="buildextractorresult"></a>

### `<Protected>` buildExtractorResult

▸ **buildExtractorResult**(n: *`CallExpression`*, output: *`string`*, getter: *[ExtractorGetter](../modules/_types_.md#extractorgetter)*, index: *`number`*, extractOptions: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*, extractorOptions?: *[ExtractorOptions](../interfaces/_types_.extractoroptions.md)*): [ExtractorResult](../interfaces/_types_.extractorresult.md)

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[buildExtractorResult](_extractors_abstractextractor_.abstractextractor.md#buildextractorresult)*

*Defined in [extractors/abstractExtractor.ts:59](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3569c96/src/extractors/abstractExtractor.ts#L59)*

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

▸ **extract**(n: *`CallExpression`*, index: *`number`*, getter: *[ExtractorGetter](../modules/_types_.md#extractorgetter)*, options: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*, variableAccessor: *[FileVariableAccessor](../modules/_types_.md#filevariableaccessor)*, project?: *`Project`*): [ExtractorResult](../interfaces/_types_.extractorresult.md)

*Implementation of [ExtractorClass](../interfaces/_types_.extractorclass.md).[extract](../interfaces/_types_.extractorclass.md#extract)*

*Overrides [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[extract](_extractors_abstractextractor_.abstractextractor.md#extract)*

*Defined in [extractors/ast.ts:58](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3569c96/src/extractors/ast.ts#L58)*

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
<a id="getconfig"></a>

###  getConfig

▸ **getConfig**(): `object`

*Implementation of [ExtractorClass](../interfaces/_types_.extractorclass.md).[getConfig](../interfaces/_types_.extractorclass.md#getconfig)*

*Defined in [extractors/ast.ts:52](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3569c96/src/extractors/ast.ts#L52)*

**Returns:** `object`

___
<a id="getoptionsfromfistarg"></a>

### `<Protected>` getOptionsFromFistArg

▸ **getOptionsFromFistArg**<`T`>(n: *`CallExpression`*): `T` \| `undefined`

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[getOptionsFromFistArg](_extractors_abstractextractor_.abstractextractor.md#getoptionsfromfistarg)*

*Defined in [extractors/abstractExtractor.ts:36](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3569c96/src/extractors/abstractExtractor.ts#L36)*

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

*Defined in [extractors/abstractExtractor.ts:95](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3569c96/src/extractors/abstractExtractor.ts#L95)*

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

*Defined in [extractors/ast.ts:80](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3569c96/src/extractors/ast.ts#L80)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| value | `Node` \| `undefined` |

**Returns:** `any`

___
<a id="printancestors"></a>

### `<Protected>` printAncestors

▸ **printAncestors**(a: *`Node`[]*, level?: *`number`*, config?: *[AstOptions](../interfaces/_extractors_ast_.astoptions.md)*): [AstNode](../interfaces/_extractors_ast_.astnode.md) \| (`string` \| `object`)[]

*Defined in [extractors/ast.ts:132](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3569c96/src/extractors/ast.ts#L132)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| a | `Node`[] | - |
| `Default value` level | `number` | 0 |
| `Default value` config | [AstOptions](../interfaces/_extractors_ast_.astoptions.md) |  {} |

**Returns:** [AstNode](../interfaces/_extractors_ast_.astnode.md) \| (`string` \| `object`)[]

___
<a id="printdescendants"></a>

### `<Protected>` printDescendants

▸ **printDescendants**(n: *`Node`*, level: *`number`*, config?: *[AstOptions](../interfaces/_extractors_ast_.astoptions.md)*): `string` \| [AstNode](../interfaces/_extractors_ast_.astnode.md)

*Defined in [extractors/ast.ts:104](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3569c96/src/extractors/ast.ts#L104)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| n | `Node` | - |
| level | `number` | - |
| `Default value` config | [AstOptions](../interfaces/_extractors_ast_.astoptions.md) |  {} |

**Returns:** `string` \| [AstNode](../interfaces/_extractors_ast_.astnode.md)

___
<a id="printnode"></a>

### `<Protected>` printNode

▸ **printNode**(n: *`Node`*, level: *`number`*, config?: *[AstOptions](../interfaces/_extractors_ast_.astoptions.md)*): `string` \| `object`

*Defined in [extractors/ast.ts:116](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3569c96/src/extractors/ast.ts#L116)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| n | `Node` | - |
| level | `number` | - |
| `Default value` config | [AstOptions](../interfaces/_extractors_ast_.astoptions.md) |  {} |

**Returns:** `string` \| `object`

___

