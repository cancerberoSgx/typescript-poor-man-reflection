[typescript-poor-man-reflection](../README.md) > ["astUtil"](../modules/_astutil_.md)

# External module: "astUtil"

## Index

### Variables

* [astUtil](_astutil_.md#astutil)

### Functions

* [array2DInsert](_astutil_.md#array2dinsert)
* [ensureArrayLength](_astutil_.md#ensurearraylength)
* [extractCallExpressions](_astutil_.md#extractcallexpressions)

---

## Variables

<a id="astutil"></a>

### `<Let>` astUtil

**● astUtil**: *`any`*

*Defined in [astUtil.ts:3](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/2d517f2/src/astUtil.ts#L3)*

___

## Functions

<a id="array2dinsert"></a>

###  array2DInsert

▸ **array2DInsert**(init: *`ArrayLiteralExpression`*, fileId: *`number`*, index: *`number`*, data: *`string`*): `void`

*Defined in [astUtil.ts:28](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/2d517f2/src/astUtil.ts#L28)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| init | `ArrayLiteralExpression` |
| fileId | `number` |
| index | `number` |
| data | `string` |

**Returns:** `void`

___
<a id="ensurearraylength"></a>

###  ensureArrayLength

▸ **ensureArrayLength**(a: *`ArrayLiteralExpression`*, index: *`number`*, item: *`string`*): `void`

*Defined in [astUtil.ts:43](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/2d517f2/src/astUtil.ts#L43)*

make sure there are items until index-1 (se we can add the index-th)

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | `ArrayLiteralExpression` |
| index | `number` |
| item | `string` |

**Returns:** `void`

___
<a id="extractcallexpressions"></a>

###  extractCallExpressions

▸ **extractCallExpressions**(sourceFile: *`SourceFile`*, moduleSpecifier: *`string`*, names: *`string`[]*): `CallExpression`<`CallExpression`>[]

*Defined in [astUtil.ts:8](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/2d517f2/src/astUtil.ts#L8)*

extract those CallExpressions from given sourceFile which declared in a module specifier with given name and which function name is one of given names

**Parameters:**

| Name | Type |
| ------ | ------ |
| sourceFile | `SourceFile` |
| moduleSpecifier | `string` |
| names | `string`[] |

**Returns:** `CallExpression`<`CallExpression`>[]

___

