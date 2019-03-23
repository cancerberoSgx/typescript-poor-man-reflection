[typescript-poor-man-reflection](../README.md) > ["extractors/source/refactors"](../modules/_extractors_source_refactors_.md)

# External module: "extractors/source/refactors"

## Index

### Functions

* [addBracesToArrowFunction](_extractors_source_refactors_.md#addbracestoarrowfunction)
* [convertNamedImportsToNamespaceImport](_extractors_source_refactors_.md#convertnamedimportstonamespaceimport)
* [convertNamespaceImportToNamedImports](_extractors_source_refactors_.md#convertnamespaceimporttonamedimports)
* [convertToEs6Module](_extractors_source_refactors_.md#converttoes6module)
* [inferTypesFromUsage](_extractors_source_refactors_.md#infertypesfromusage)
* [moveToNewFile](_extractors_source_refactors_.md#movetonewfile)
* [removeAllUnused](_extractors_source_refactors_.md#removeallunused)
* [removeBracesFromArrowFunction](_extractors_source_refactors_.md#removebracesfromarrowfunction)

---

## Functions

<a id="addbracestoarrowfunction"></a>

###  addBracesToArrowFunction

▸ **addBracesToArrowFunction**(project: *`Project`*, arrowFunction: *`ArrowFunction`*): `undefined` \| [ApplyFileTextChangesResult](../interfaces/_extractors_source_changes_.applyfiletextchangesresult.md)

*Defined in [extractors/source/refactors.ts:8](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/4ce0fbf/src/extractors/source/refactors.ts#L8)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| project | `Project` |
| arrowFunction | `ArrowFunction` |

**Returns:** `undefined` \| [ApplyFileTextChangesResult](../interfaces/_extractors_source_changes_.applyfiletextchangesresult.md)

___
<a id="convertnamedimportstonamespaceimport"></a>

###  convertNamedImportsToNamespaceImport

▸ **convertNamedImportsToNamespaceImport**(project: *`Project`*, node: *`Node`*): `undefined` \| [ApplyFileTextChangesResult](../interfaces/_extractors_source_changes_.applyfiletextchangesresult.md)

*Defined in [extractors/source/refactors.ts:96](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/4ce0fbf/src/extractors/source/refactors.ts#L96)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| project | `Project` |
| node | `Node` |

**Returns:** `undefined` \| [ApplyFileTextChangesResult](../interfaces/_extractors_source_changes_.applyfiletextchangesresult.md)

___
<a id="convertnamespaceimporttonamedimports"></a>

###  convertNamespaceImportToNamedImports

▸ **convertNamespaceImportToNamedImports**(project: *`Project`*, node: *`Node`*): `undefined` \| [ApplyFileTextChangesResult](../interfaces/_extractors_source_changes_.applyfiletextchangesresult.md)

*Defined in [extractors/source/refactors.ts:80](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/4ce0fbf/src/extractors/source/refactors.ts#L80)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| project | `Project` |
| node | `Node` |

**Returns:** `undefined` \| [ApplyFileTextChangesResult](../interfaces/_extractors_source_changes_.applyfiletextchangesresult.md)

___
<a id="converttoes6module"></a>

###  convertToEs6Module

▸ **convertToEs6Module**(project: *`Project`*, node: *`Node`*): [ApplyFileTextChangesResult](../interfaces/_extractors_source_changes_.applyfiletextchangesresult.md)

*Defined in [extractors/source/refactors.ts:67](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/4ce0fbf/src/extractors/source/refactors.ts#L67)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| project | `Project` |
| node | `Node` |

**Returns:** [ApplyFileTextChangesResult](../interfaces/_extractors_source_changes_.applyfiletextchangesresult.md)

___
<a id="infertypesfromusage"></a>

###  inferTypesFromUsage

▸ **inferTypesFromUsage**(project: *`Project`*, node: *`Node`*): [ApplyFileTextChangesResult](../interfaces/_extractors_source_changes_.applyfiletextchangesresult.md)

*Defined in [extractors/source/refactors.ts:63](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/4ce0fbf/src/extractors/source/refactors.ts#L63)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| project | `Project` |
| node | `Node` |

**Returns:** [ApplyFileTextChangesResult](../interfaces/_extractors_source_changes_.applyfiletextchangesresult.md)

___
<a id="movetonewfile"></a>

###  moveToNewFile

▸ **moveToNewFile**(project: *`Project`*, node: *`Node`*, removeEmpty?: *`boolean`*): [ApplyFileTextChangesResult](../interfaces/_extractors_source_changes_.applyfiletextchangesresult.md) \| `undefined`

*Defined in [extractors/source/refactors.ts:42](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/4ce0fbf/src/extractors/source/refactors.ts#L42)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| project | `Project` | - |
| node | `Node` | - |
| `Default value` removeEmpty | `boolean` | false |

**Returns:** [ApplyFileTextChangesResult](../interfaces/_extractors_source_changes_.applyfiletextchangesresult.md) \| `undefined`

___
<a id="removeallunused"></a>

###  removeAllUnused

▸ **removeAllUnused**(project: *`Project`*, node: *`Node`*): [ApplyFileTextChangesResult](../interfaces/_extractors_source_changes_.applyfiletextchangesresult.md)

*Defined in [extractors/source/refactors.ts:71](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/4ce0fbf/src/extractors/source/refactors.ts#L71)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| project | `Project` |
| node | `Node` |

**Returns:** [ApplyFileTextChangesResult](../interfaces/_extractors_source_changes_.applyfiletextchangesresult.md)

___
<a id="removebracesfromarrowfunction"></a>

###  removeBracesFromArrowFunction

▸ **removeBracesFromArrowFunction**(project: *`Project`*, arrowFunction: *`ArrowFunction`*): `undefined` \| [ApplyFileTextChangesResult](../interfaces/_extractors_source_changes_.applyfiletextchangesresult.md)

*Defined in [extractors/source/refactors.ts:25](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/4ce0fbf/src/extractors/source/refactors.ts#L25)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| project | `Project` |
| arrowFunction | `ArrowFunction` |

**Returns:** `undefined` \| [ApplyFileTextChangesResult](../interfaces/_extractors_source_changes_.applyfiletextchangesresult.md)

___

