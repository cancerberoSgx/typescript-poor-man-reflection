[typescript-poor-man-reflection](../README.md) > ["extractors/source/codeFixes"](../modules/_extractors_source_codefixes_.md)

# External module: "extractors/source/codeFixes"

## Index

### Interfaces

* [CodeFixActionExtended](../interfaces/_extractors_source_codefixes_.codefixactionextended.md)
* [TsDiagnostic](../interfaces/_extractors_source_codefixes_.tsdiagnostic.md)

### Variables

* [allSupportedCodeFixCodes](_extractors_source_codefixes_.md#allsupportedcodefixcodes)
* [supportedCodeFixes](_extractors_source_codefixes_.md#supportedcodefixes)
* [unusedCodes](_extractors_source_codefixes_.md#unusedcodes)

### Functions

* [applyCodeFixes](_extractors_source_codefixes_.md#applycodefixes)
* [getAllCodeFixesErrorCodes](_extractors_source_codefixes_.md#getallcodefixeserrorcodes)
* [getAllSupportedCodeFixCodes](_extractors_source_codefixes_.md#getallsupportedcodefixcodes)
* [getAllSupportedCodeFixeDefinitions](_extractors_source_codefixes_.md#getallsupportedcodefixedefinitions)
* [getAllSupportedCodeFixes](_extractors_source_codefixes_.md#getallsupportedcodefixes)
* [getAllUnusedCodeFixes](_extractors_source_codefixes_.md#getallunusedcodefixes)
* [getTsDiagnostics](_extractors_source_codefixes_.md#gettsdiagnostics)
* [getUnusedCodeFixes](_extractors_source_codefixes_.md#getunusedcodefixes)
* [removeAllUnused](_extractors_source_codefixes_.md#removeallunused)

---

## Variables

<a id="allsupportedcodefixcodes"></a>

### `<Let>` allSupportedCodeFixCodes

**● allSupportedCodeFixCodes**: *`number`[]*

*Defined in [extractors/source/codeFixes.ts:98](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b99ab34/src/extractors/source/codeFixes.ts#L98)*

___
<a id="supportedcodefixes"></a>

### `<Let>` supportedCodeFixes

**● supportedCodeFixes**: *[TsDiagnostic](../interfaces/_extractors_source_codefixes_.tsdiagnostic.md)[]*

*Defined in [extractors/source/codeFixes.ts:88](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b99ab34/src/extractors/source/codeFixes.ts#L88)*

___
<a id="unusedcodes"></a>

### `<Const>` unusedCodes

**● unusedCodes**: *`number`[]* =  [6133, 6138]

*Defined in [extractors/source/codeFixes.ts:50](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b99ab34/src/extractors/source/codeFixes.ts#L50)*

___

## Functions

<a id="applycodefixes"></a>

###  applyCodeFixes

▸ **applyCodeFixes**(project: *`Project`*, f: *`SourceFile`*, d: *[CodeFixActionExtended](../interfaces/_extractors_source_codefixes_.codefixactionextended.md)[]*): `void`

*Defined in [extractors/source/codeFixes.ts:12](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b99ab34/src/extractors/source/codeFixes.ts#L12)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| project | `Project` |
| f | `SourceFile` |
| d | [CodeFixActionExtended](../interfaces/_extractors_source_codefixes_.codefixactionextended.md)[] |

**Returns:** `void`

___
<a id="getallcodefixeserrorcodes"></a>

###  getAllCodeFixesErrorCodes

▸ **getAllCodeFixesErrorCodes**(): `number`[]

*Defined in [extractors/source/codeFixes.ts:144](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b99ab34/src/extractors/source/codeFixes.ts#L144)*

**Returns:** `number`[]

___
<a id="getallsupportedcodefixcodes"></a>

###  getAllSupportedCodeFixCodes

▸ **getAllSupportedCodeFixCodes**(): `number`[]

*Defined in [extractors/source/codeFixes.ts:99](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b99ab34/src/extractors/source/codeFixes.ts#L99)*

**Returns:** `number`[]

___
<a id="getallsupportedcodefixedefinitions"></a>

###  getAllSupportedCodeFixeDefinitions

▸ **getAllSupportedCodeFixeDefinitions**(): [TsDiagnostic](../interfaces/_extractors_source_codefixes_.tsdiagnostic.md)[]

*Defined in [extractors/source/codeFixes.ts:89](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b99ab34/src/extractors/source/codeFixes.ts#L89)*

**Returns:** [TsDiagnostic](../interfaces/_extractors_source_codefixes_.tsdiagnostic.md)[]

___
<a id="getallsupportedcodefixes"></a>

###  getAllSupportedCodeFixes

▸ **getAllSupportedCodeFixes**(languageService: *`LanguageService`*, sourceFile: *`SourceFile`*, pos?: *`number`*, end?: *`number`*, errorCodes?: *`number`[]*, formatOptions?: *`FormatCodeSettings`*, preferences?: *`UserPreferences`*): [CodeFixActionExtended](../interfaces/_extractors_source_codefixes_.codefixactionextended.md)[]

*Defined in [extractors/source/codeFixes.ts:63](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b99ab34/src/extractors/source/codeFixes.ts#L63)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| languageService | `LanguageService` | - |
| sourceFile | `SourceFile` | - |
| `Default value` pos | `number` | 0 |
| `Default value` end | `number` |  sourceFile.getText().length - 1 |
| `Optional` errorCodes | `number`[] | - |
| `Default value` formatOptions | `FormatCodeSettings` |  {} |
| `Default value` preferences | `UserPreferences` |  {} |

**Returns:** [CodeFixActionExtended](../interfaces/_extractors_source_codefixes_.codefixactionextended.md)[]

___
<a id="getallunusedcodefixes"></a>

###  getAllUnusedCodeFixes

▸ **getAllUnusedCodeFixes**(languageService: *`LanguageService`*, sourceFile: *`SourceFile`*, formatOptions?: *`FormatCodeSettings`*, preferences?: *`UserPreferences`*): [CodeFixActionExtended](../interfaces/_extractors_source_codefixes_.codefixactionextended.md)[]

*Defined in [extractors/source/codeFixes.ts:33](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b99ab34/src/extractors/source/codeFixes.ts#L33)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| languageService | `LanguageService` | - |
| sourceFile | `SourceFile` | - |
| `Default value` formatOptions | `FormatCodeSettings` |  {} |
| `Default value` preferences | `UserPreferences` |  {} |

**Returns:** [CodeFixActionExtended](../interfaces/_extractors_source_codefixes_.codefixactionextended.md)[]

___
<a id="gettsdiagnostics"></a>

###  getTsDiagnostics

▸ **getTsDiagnostics**(): [TsDiagnostic](../interfaces/_extractors_source_codefixes_.tsdiagnostic.md)[]

*Defined in [extractors/source/codeFixes.ts:141](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b99ab34/src/extractors/source/codeFixes.ts#L141)*

**Returns:** [TsDiagnostic](../interfaces/_extractors_source_codefixes_.tsdiagnostic.md)[]

___
<a id="getunusedcodefixes"></a>

###  getUnusedCodeFixes

▸ **getUnusedCodeFixes**(languageService: *`LanguageService`*, sourceFile: *`SourceFile`*, pos?: *`number`*, end?: *`number`*, formatOptions?: *`FormatCodeSettings`*, preferences?: *`UserPreferences`*): [CodeFixActionExtended](../interfaces/_extractors_source_codefixes_.codefixactionextended.md)[]

*Defined in [extractors/source/codeFixes.ts:52](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b99ab34/src/extractors/source/codeFixes.ts#L52)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| languageService | `LanguageService` | - |
| sourceFile | `SourceFile` | - |
| `Default value` pos | `number` | 0 |
| `Default value` end | `number` |  sourceFile.getText().length - 1 |
| `Default value` formatOptions | `FormatCodeSettings` |  {} |
| `Default value` preferences | `UserPreferences` |  {} |

**Returns:** [CodeFixActionExtended](../interfaces/_extractors_source_codefixes_.codefixactionextended.md)[]

___
<a id="removeallunused"></a>

###  removeAllUnused

▸ **removeAllUnused**(project: *`Project`*, f: *`SourceFile`*, formatOptions?: *`FormatCodeSettings`*, preferences?: *`UserPreferences`*): `void`

*Defined in [extractors/source/codeFixes.ts:23](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b99ab34/src/extractors/source/codeFixes.ts#L23)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| project | `Project` | - |
| f | `SourceFile` | - |
| `Default value` formatOptions | `FormatCodeSettings` |  {} |
| `Default value` preferences | `UserPreferences` |  {} |

**Returns:** `void`

___

