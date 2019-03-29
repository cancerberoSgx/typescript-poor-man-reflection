[typescript-poor-man-reflection](../README.md) > ["astUtil"](../modules/_astutil_.md)

# External module: "astUtil"

## Index

### Functions

* [extractCallExpressions](_astutil_.md#extractcallexpressions)
* [getFirstTypeArgumentDefinitionBlock](_astutil_.md#getfirsttypeargumentdefinitionblock)
* [removeDataFolderFileNameImportDeclaration](_astutil_.md#removedatafolderfilenameimportdeclaration)
* [removePrependVariableDeclaration](_astutil_.md#removeprependvariabledeclaration)

---

## Functions

<a id="extractcallexpressions"></a>

###  extractCallExpressions

▸ **extractCallExpressions**(sourceFile: *`SourceFile`*, moduleSpecifier: *`string` \| "__IGNORE__"*, names: *`string`[]*): `CallExpression`<`CallExpression`>[]

*Defined in [astUtil.ts:19](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f1306fa/src/astUtil.ts#L19)*

extract those CallExpressions from given sourceFile which declared in a module specifier with given name and which function name is one of given names

**Parameters:**

| Name | Type |
| ------ | ------ |
| sourceFile | `SourceFile` |
| moduleSpecifier | `string` \| "__IGNORE__" |
| names | `string`[] |

**Returns:** `CallExpression`<`CallExpression`>[]

___
<a id="getfirsttypeargumentdefinitionblock"></a>

###  getFirstTypeArgumentDefinitionBlock

▸ **getFirstTypeArgumentDefinitionBlock**(n: *`CallExpression`*): `undefined` \| `Node`<`Node`>

*Defined in [astUtil.ts:66](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f1306fa/src/astUtil.ts#L66)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |

**Returns:** `undefined` \| `Node`<`Node`>

___
<a id="removedatafolderfilenameimportdeclaration"></a>

###  removeDataFolderFileNameImportDeclaration

▸ **removeDataFolderFileNameImportDeclaration**(sourceFile: *`SourceFile`*, options: *`object`*): `void`

*Defined in [astUtil.ts:56](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f1306fa/src/astUtil.ts#L56)*

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

*Defined in [astUtil.ts:43](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f1306fa/src/astUtil.ts#L43)*

**Parameters:**

**sourceFile: `SourceFile`**

**options: `object`**

| Name | Type |
| ------ | ------ |
| extractorDataVariableName | `string` |

**Returns:** `void`

___

