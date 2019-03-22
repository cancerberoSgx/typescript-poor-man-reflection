[typescript-poor-man-reflection](../README.md) > ["extractors/ast"](../modules/_extractors_ast_.md) > [Ast](../classes/_extractors_ast_.ast.md)

# Class: Ast

## Hierarchy

 [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md)

**↳ Ast**

## Implements

* [ExtractorClass](../interfaces/_types_.extractorclass.md)
* [ExtractorClass](../interfaces/_types_.extractorclass.md)

## Index

### Methods

* [buildAst](_extractors_ast_.ast.md#buildast)
* [buildExtractorResult](_extractors_ast_.ast.md#buildextractorresult)
* [extract](_extractors_ast_.ast.md#extract)
* [getConfig](_extractors_ast_.ast.md#getconfig)
* [getOptionsFromFistArg](_extractors_ast_.ast.md#getoptionsfromfistarg)
* [printAncestors](_extractors_ast_.ast.md#printancestors)
* [printDescendants](_extractors_ast_.ast.md#printdescendants)
* [printNode](_extractors_ast_.ast.md#printnode)

### Object literals

* [defaultExtractorOptions](_extractors_ast_.ast.md#defaultextractoroptions)

---

## Methods

<a id="buildast"></a>

### `<Protected>` buildAst

▸ **buildAst**(n: *`Node`*, config?: *[AstOptions](../interfaces/_extractors_ast_.astoptions.md)*): `any`

*Defined in [extractors/ast.ts:76](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/527e8dd/src/extractors/ast.ts#L76)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| n | `Node` | - |
| `Default value` config | [AstOptions](../interfaces/_extractors_ast_.astoptions.md) |  {} |

**Returns:** `any`

___
<a id="buildextractorresult"></a>

### `<Protected>` buildExtractorResult

▸ **buildExtractorResult**(n: *`CallExpression`*, output: *`string`*, getter: *[ExtractorGetter](../modules/_types_.md#extractorgetter)*, index: *`number`*, extractOptions: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*, extractorOptions?: *[ExtractorOptions](../interfaces/_types_.extractoroptions.md)*): [ExtractorResult](../interfaces/_types_.extractorresult.md)

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[buildExtractorResult](_extractors_abstractextractor_.abstractextractor.md#buildextractorresult)*

*Defined in [extractors/abstractExtractor.ts:52](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/527e8dd/src/extractors/abstractExtractor.ts#L52)*

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

*Defined in [extractors/ast.ts:48](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/527e8dd/src/extractors/ast.ts#L48)*

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

*Defined in [extractors/ast.ts:104](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/527e8dd/src/extractors/ast.ts#L104)*

**Returns:** `object`

___
<a id="getoptionsfromfistarg"></a>

### `<Protected>` getOptionsFromFistArg

▸ **getOptionsFromFistArg**<`T`>(n: *`CallExpression`*): `T` \| `undefined`

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[getOptionsFromFistArg](_extractors_abstractextractor_.abstractextractor.md#getoptionsfromfistarg)*

*Defined in [extractors/abstractExtractor.ts:35](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/527e8dd/src/extractors/abstractExtractor.ts#L35)*

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
<a id="printancestors"></a>

### `<Protected>` printAncestors

▸ **printAncestors**(a: *`Node`[]*, level?: *`number`*, config?: *[AstOptions](../interfaces/_extractors_ast_.astoptions.md)*): `string`

*Defined in [extractors/ast.ts:96](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/527e8dd/src/extractors/ast.ts#L96)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| a | `Node`[] | - |
| `Default value` level | `number` | 0 |
| `Default value` config | [AstOptions](../interfaces/_extractors_ast_.astoptions.md) |  {} |

**Returns:** `string`

___
<a id="printdescendants"></a>

### `<Protected>` printDescendants

▸ **printDescendants**(n: *`Node`*, level: *`number`*, config?: *[AstOptions](../interfaces/_extractors_ast_.astoptions.md)*): `string`

*Defined in [extractors/ast.ts:83](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/527e8dd/src/extractors/ast.ts#L83)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| n | `Node` | - |
| level | `number` | - |
| `Default value` config | [AstOptions](../interfaces/_extractors_ast_.astoptions.md) |  {} |

**Returns:** `string`

___
<a id="printnode"></a>

### `<Protected>` printNode

▸ **printNode**(n: *`Node`*, level: *`number`*, config?: *[AstOptions](../interfaces/_extractors_ast_.astoptions.md)*): `string`

*Defined in [extractors/ast.ts:89](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/527e8dd/src/extractors/ast.ts#L89)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| n | `Node` | - |
| level | `number` | - |
| `Default value` config | [AstOptions](../interfaces/_extractors_ast_.astoptions.md) |  {} |

**Returns:** `string`

___

## Object literals

<a id="defaultextractoroptions"></a>

### `<Protected>` defaultExtractorOptions

**defaultExtractorOptions**: *`object`*

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[defaultExtractorOptions](_extractors_abstractextractor_.abstractextractor.md#defaultextractoroptions)*

*Defined in [extractors/abstractExtractor.ts:14](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/527e8dd/src/extractors/abstractExtractor.ts#L14)*

<a id="defaultextractoroptions.outputmode"></a>

####  outputMode

**● outputMode**: *"asReturnValue"* = "asReturnValue"

*Defined in [extractors/abstractExtractor.ts:15](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/527e8dd/src/extractors/abstractExtractor.ts#L15)*

___
<a id="defaultextractoroptions.targetmode"></a>

####  targetMode

**● targetMode**: *"self"* = "self"

*Defined in [extractors/abstractExtractor.ts:16](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/527e8dd/src/extractors/abstractExtractor.ts#L16)*

___

___

