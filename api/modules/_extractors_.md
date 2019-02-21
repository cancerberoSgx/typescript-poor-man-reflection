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

*Defined in [extractors.ts:73](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/extractors.ts#L73)*

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

*Defined in [extractors.ts:6](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/extractors.ts#L6)*

<a id="defaultextractors.bodytext"></a>

####  BodyText

▸ **BodyText**(n: *`CallExpression`*, index: *`number`*, getter: *`function`*, options: *`object`*, fileVariableAccessor: *`undefined` \| `function`*): `string` \| `object`

*Defined in [extractors.ts:26](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/extractors.ts#L26)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |
| index | `number` |
| getter | `function` |
| options | `object` |
| fileVariableAccessor | `undefined` \| `function` |

**Returns:** `string` \| `object`

___
<a id="defaultextractors.nodetext"></a>

####  NodeText

▸ **NodeText**(n: *`CallExpression`*, index: *`number`*, getter: *`function`*, options: *`object`*, fileVariableAccessor: *`undefined` \| `function`*): `string` \| `object`

*Defined in [extractors.ts:15](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/extractors.ts#L15)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |
| index | `number` |
| getter | `function` |
| options | `object` |
| fileVariableAccessor | `undefined` \| `function` |

**Returns:** `string` \| `object`

___
<a id="defaultextractors.nodetype"></a>

####  NodeType

▸ **NodeType**(n: *`CallExpression`*, index: *`number`*, getter: *`function`*, options: *`object`*, fileVariableAccessor: *`undefined` \| `function`*): `object`

*Defined in [extractors.ts:59](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/extractors.ts#L59)*

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
| fileVariableAccessor | `undefined` \| `function` |

**Returns:** `object`

___
<a id="defaultextractors.thisblocktext"></a>

####  ThisBlockText

▸ **ThisBlockText**(n: *`CallExpression`*, index: *`number`*, getter: *`function`*, options: *`object`*, fileVariableAccessor: *`undefined` \| `function`*): `string` \| `object`

*Defined in [extractors.ts:37](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/extractors.ts#L37)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |
| index | `number` |
| getter | `function` |
| options | `object` |
| fileVariableAccessor | `undefined` \| `function` |

**Returns:** `string` \| `object`

___
<a id="defaultextractors.typetext"></a>

####  TypeText

▸ **TypeText**(n: *`CallExpression`*, index: *`number`*, getter: *`function`*, options: *`object`*, fileVariableAccessor: *`undefined` \| `function`*): `string` \| `object`

*Defined in [extractors.ts:7](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/extractors.ts#L7)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |
| index | `number` |
| getter | `function` |
| options | `object` |
| fileVariableAccessor | `undefined` \| `function` |

**Returns:** `string` \| `object`

___

___

