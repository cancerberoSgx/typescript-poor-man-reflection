[typescript-poor-man-reflection](../README.md) > ["extractors"](../modules/_extractors_.md)

# External module: "extractors"

## Index

### Functions

* [isExtractorClass](_extractors_.md#isextractorclass)
* [isExtractorFn](_extractors_.md#isextractorfn)

### Object literals

* [defaultExtractors](_extractors_.md#defaultextractors)

---

## Functions

<a id="isextractorclass"></a>

###  isExtractorClass

▸ **isExtractorClass**(e: *[Extractor](_types_.md#extractor)*): `boolean`

*Defined in [extractors.ts:92](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/c505d33/src/extractors.ts#L92)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | [Extractor](_types_.md#extractor) |

**Returns:** `boolean`

___
<a id="isextractorfn"></a>

###  isExtractorFn

▸ **isExtractorFn**(e: *[Extractor](_types_.md#extractor)*): `boolean`

*Defined in [extractors.ts:89](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/c505d33/src/extractors.ts#L89)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | [Extractor](_types_.md#extractor) |

**Returns:** `boolean`

___

## Object literals

<a id="defaultextractors"></a>

### `<Const>` defaultExtractors

**defaultExtractors**: *`object`*

*Defined in [extractors.ts:16](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/c505d33/src/extractors.ts#L16)*

<a id="defaultextractors.printast"></a>

####  PrintAst

**● PrintAst**: *[Ast](../classes/_extractors_ast_.ast.md)* =  new Ast()

*Defined in [extractors.ts:86](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/c505d33/src/extractors.ts#L86)*

___
<a id="defaultextractors.bodytext"></a>

####  BodyText

▸ **BodyText**(n: *`CallExpression`*, index: *`number`*, getter: *`function`*, options: *`object`*, fileVariableAccessor: *`function`*): `string` \| `object`

*Defined in [extractors.ts:38](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/c505d33/src/extractors.ts#L38)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |
| index | `number` |
| getter | `function` |
| options | `object` |
| fileVariableAccessor | `function` |

**Returns:** `string` \| `object`

___
<a id="defaultextractors.nodetext"></a>

####  NodeText

▸ **NodeText**(n: *`CallExpression`*, index: *`number`*, getter: *`function`*, options: *`object`*, fileVariableAccessor: *`function`*): `string` \| `object`

*Defined in [extractors.ts:26](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/c505d33/src/extractors.ts#L26)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |
| index | `number` |
| getter | `function` |
| options | `object` |
| fileVariableAccessor | `function` |

**Returns:** `string` \| `object`

___
<a id="defaultextractors.nodetype"></a>

####  NodeType

▸ **NodeType**(n: *`CallExpression`*, index: *`number`*, getter: *`function`*, options: *`object`*, fileVariableAccessor: *`function`*): `object`

*Defined in [extractors.ts:73](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/c505d33/src/extractors.ts#L73)*

returns with node type inference information. Usage:

```
declare function f():number\|boolean\|string\|Date; var n = f(); var nType = NodeType(n)
```

Note : this tool uses the first argument for API and the second one for data

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |
| index | `number` |
| getter | `function` |
| options | `object` |
| fileVariableAccessor | `function` |

**Returns:** `object`

___
<a id="defaultextractors.thisblocktext"></a>

####  ThisBlockText

▸ **ThisBlockText**(n: *`CallExpression`*, index: *`number`*, getter: *`function`*, options: *`object`*, fileVariableAccessor: *`function`*): `string` \| `object`

*Defined in [extractors.ts:50](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/c505d33/src/extractors.ts#L50)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |
| index | `number` |
| getter | `function` |
| options | `object` |
| fileVariableAccessor | `function` |

**Returns:** `string` \| `object`

___
<a id="defaultextractors.typetext"></a>

####  TypeText

▸ **TypeText**(n: *`CallExpression`*, index: *`number`*, getter: *`function`*, options: *`object`*, fileVariableAccessor: *`function`*): `string` \| `object`

*Defined in [extractors.ts:17](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/c505d33/src/extractors.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |
| index | `number` |
| getter | `function` |
| options | `object` |
| fileVariableAccessor | `function` |

**Returns:** `string` \| `object`

___

___

