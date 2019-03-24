[typescript-poor-man-reflection](../README.md) > ["astUtil"](../modules/_astutil_.md)

# External module: "astUtil"

## Index

### Functions

* [array2DInsert](_astutil_.md#array2dinsert)
* [ensureArrayLength](_astutil_.md#ensurearraylength)
* [extractCallExpressions](_astutil_.md#extractcallexpressions)
* [getDefinitionsOf](_astutil_.md#getdefinitionsof)
* [getFirstTypeArgumentDefinitionBlock](_astutil_.md#getfirsttypeargumentdefinitionblock)
* [getNodeName](_astutil_.md#getnodename)
* [objectLiteralInsert](_astutil_.md#objectliteralinsert)
* [removeDataFolderFileNameImportDeclaration](_astutil_.md#removedatafolderfilenameimportdeclaration)
* [removePrependVariableDeclaration](_astutil_.md#removeprependvariabledeclaration)

---

## Functions

<a id="array2dinsert"></a>

###  array2DInsert

▸ **array2DInsert**(init: *`ArrayLiteralExpression`*, fileId: *`number`*, index: *`number`*, data: *`string`[]*): `void`

*Defined in [astUtil.ts:42](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/73575a8/src/astUtil.ts#L42)*

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

*Defined in [astUtil.ts:52](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/73575a8/src/astUtil.ts#L52)*

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

▸ **extractCallExpressions**(sourceFile: *`SourceFile`*, moduleSpecifier: *`string` \| "__IGNORE__"*, names: *`string`[]*): `CallExpression`<`CallExpression`>[]

*Defined in [astUtil.ts:18](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/73575a8/src/astUtil.ts#L18)*

extract those CallExpressions from given sourceFile which declared in a module specifier with given name and which function name is one of given names

**Parameters:**

| Name | Type |
| ------ | ------ |
| sourceFile | `SourceFile` |
| moduleSpecifier | `string` \| "__IGNORE__" |
| names | `string`[] |

**Returns:** `CallExpression`<`CallExpression`>[]

___
<a id="getdefinitionsof"></a>

###  getDefinitionsOf

▸ **getDefinitionsOf**(id: *`Identifier`*): `Node`<`Node`>[]

*Defined in [astUtil.ts:107](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/73575a8/src/astUtil.ts#L107)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `Identifier` |

**Returns:** `Node`<`Node`>[]

___
<a id="getfirsttypeargumentdefinitionblock"></a>

###  getFirstTypeArgumentDefinitionBlock

▸ **getFirstTypeArgumentDefinitionBlock**(n: *`CallExpression`*): `undefined` \| `Node`<`Node`>

*Defined in [astUtil.ts:97](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/73575a8/src/astUtil.ts#L97)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |

**Returns:** `undefined` \| `Node`<`Node`>

___
<a id="getnodename"></a>

###  getNodeName

▸ **getNodeName**(n: *`Node`*): `undefined` \| `string`

*Defined in [astUtil.ts:119](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/73575a8/src/astUtil.ts#L119)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `Node` |

**Returns:** `undefined` \| `string`

___
<a id="objectliteralinsert"></a>

###  objectLiteralInsert

▸ **objectLiteralInsert**(init: *`ObjectLiteralExpression`*, fileId: *`number`*, objectLiteral: *`object`*): `void`

*Defined in [astUtil.ts:60](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/73575a8/src/astUtil.ts#L60)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| init | `ObjectLiteralExpression` |
| fileId | `number` |
| objectLiteral | `object` |

**Returns:** `void`

___
<a id="removedatafolderfilenameimportdeclaration"></a>

###  removeDataFolderFileNameImportDeclaration

▸ **removeDataFolderFileNameImportDeclaration**(sourceFile: *`SourceFile`*, options: *`object`*): `void`

*Defined in [astUtil.ts:87](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/73575a8/src/astUtil.ts#L87)*

**Parameters:**

**sourceFile: `SourceFile`**

**options: `object`**

| Name | Type |
| ------ | ------ |
| extractorDataFolderFileName | `string` |

**Returns:** `void`

___
<a id="removeprependvariabledeclaration"></a>

###  removePrependVariableDeclaration

▸ **removePrependVariableDeclaration**(sourceFile: *`SourceFile`*, options: *`object`*): `void`

*Defined in [astUtil.ts:74](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/73575a8/src/astUtil.ts#L74)*

**Parameters:**

**sourceFile: `SourceFile`**

**options: `object`**

| Name | Type |
| ------ | ------ |
| extractorDataVariableName | `string` |

**Returns:** `void`

___

