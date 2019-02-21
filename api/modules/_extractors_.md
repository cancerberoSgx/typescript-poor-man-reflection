[typescript-poor-man-reflection](../README.md) > ["extractors"](../modules/_extractors_.md)

# External module: "extractors"

## Index

### Functions

* [getFirstTypeArgumentDefinitionBlock](_extractors_.md#getfirsttypeargumentdefinitionblock)

### Object literals

* [defaultExtractors](_extractors_.md#defaultextractors)

---

## Functions

<a id="getfirsttypeargumentdefinitionblock"></a>

###  getFirstTypeArgumentDefinitionBlock

▸ **getFirstTypeArgumentDefinitionBlock**(n: *`CallExpression`*): `undefined` \| `Node`<`Node`>

*Defined in [extractors.ts:30](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/d8ab253/src/extractors.ts#L30)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |

**Returns:** `undefined` \| `Node`<`Node`>

___

## Object literals

<a id="defaultextractors"></a>

### `<Const>` defaultExtractors

**defaultExtractors**: *`object`*

*Defined in [extractors.ts:5](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/d8ab253/src/extractors.ts#L5)*

<a id="defaultextractors.bodytext"></a>

####  BodyText

▸ **BodyText**(n: *`CallExpression`*): `string`

*Defined in [extractors.ts:11](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/d8ab253/src/extractors.ts#L11)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |

**Returns:** `string`

___
<a id="defaultextractors.nodetext"></a>

####  NodeText

▸ **NodeText**(n: *`CallExpression`*): `string`

*Defined in [extractors.ts:7](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/d8ab253/src/extractors.ts#L7)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |

**Returns:** `string`

___
<a id="defaultextractors.thisblocktext"></a>

####  ThisBlockText

▸ **ThisBlockText**(n: *`CallExpression`*): `string`

*Defined in [extractors.ts:19](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/d8ab253/src/extractors.ts#L19)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |

**Returns:** `string`

___
<a id="defaultextractors.typetext"></a>

####  TypeText

▸ **TypeText**(n: *`CallExpression`*): `string`

*Defined in [extractors.ts:6](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/d8ab253/src/extractors.ts#L6)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |

**Returns:** `string`

___

___

