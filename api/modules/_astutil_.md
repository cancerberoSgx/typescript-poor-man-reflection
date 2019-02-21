[typescript-poor-man-reflection](../README.md) > ["astUtil"](../modules/_astutil_.md)

# External module: "astUtil"

## Index

### Functions

* [array2DInsert](_astutil_.md#array2dinsert)
* [ensureArrayLength](_astutil_.md#ensurearraylength)
* [extractCallExpressions](_astutil_.md#extractcallexpressions)
* [objectLiteralInsert](_astutil_.md#objectliteralinsert)

---

## Functions

<a id="array2dinsert"></a>

###  array2DInsert

▸ **array2DInsert**(init: *`ArrayLiteralExpression`*, fileId: *`number`*, index: *`number`*, data: *`string`[]*): `void`

*Defined in [astUtil.ts:35](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/d8ab253/src/astUtil.ts#L35)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| init | `ArrayLiteralExpression` |
| fileId | `number` |
| index | `number` |
| data | `string`[] |

**Returns:** `void`

___
<a id="ensurearraylength"></a>

###  ensureArrayLength

▸ **ensureArrayLength**(a: *`ArrayLiteralExpression`*, index: *`number`*, item: *`string`*): `void`

*Defined in [astUtil.ts:45](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/d8ab253/src/astUtil.ts#L45)*

makes sure there are items until index-1 (se we can add the index-th)

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

*Defined in [astUtil.ts:15](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/d8ab253/src/astUtil.ts#L15)*

extract those CallExpressions from given sourceFile which declared in a module specifier with given name and which function name is one of given names

**Parameters:**

| Name | Type |
| ------ | ------ |
| sourceFile | `SourceFile` |
| moduleSpecifier | `string` |
| names | `string`[] |

**Returns:** `CallExpression`<`CallExpression`>[]

___
<a id="objectliteralinsert"></a>

###  objectLiteralInsert

▸ **objectLiteralInsert**(init: *`ObjectLiteralExpression`*, fileId: *`number`*, fileVariables: *`object`*): `void`

*Defined in [astUtil.ts:53](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/d8ab253/src/astUtil.ts#L53)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| init | `ObjectLiteralExpression` |
| fileId | `number` |
| fileVariables | `object` |

**Returns:** `void`

___

