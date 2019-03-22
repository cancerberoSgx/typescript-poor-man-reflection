[typescript-poor-man-reflection](../README.md) > ["extractors"](../modules/_extractors_.md)

# External module: "extractors"

## Index

### Functions

* [isExtractorFn](_extractors_.md#isextractorfn)

### Object literals

* [defaultExtractors](_extractors_.md#defaultextractors)

---

## Functions

<a id="isextractorfn"></a>

###  isExtractorFn

▸ **isExtractorFn**(e: *[Extractor](_types_.md#extractor)*): `boolean`

*Defined in [extractors.ts:91](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/055260d/src/extractors.ts#L91)*

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

*Defined in [extractors.ts:15](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/055260d/src/extractors.ts#L15)*

<a id="defaultextractors.printast"></a>

####  PrintAst

**● PrintAst**: *[Ast](../classes/_extractors_ast_.ast.md)* =  new Ast()

*Defined in [extractors.ts:87](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/055260d/src/extractors.ts#L87)*

___
<a id="defaultextractors.bodytext"></a>

####  BodyText

▸ **BodyText**(n: *`CallExpression`*, index: *`number`*, getter: *`function`*, options: *`object`*, fileVariableAccessor: *`function`*): `string` \| `object`

*Defined in [extractors.ts:35](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/055260d/src/extractors.ts#L35)*

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

*Defined in [extractors.ts:24](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/055260d/src/extractors.ts#L24)*

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

*Defined in [extractors.ts:68](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/055260d/src/extractors.ts#L68)*

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

*Defined in [extractors.ts:46](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/055260d/src/extractors.ts#L46)*

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

*Defined in [extractors.ts:16](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/055260d/src/extractors.ts#L16)*

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

