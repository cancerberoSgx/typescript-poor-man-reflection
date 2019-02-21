[typescript-poor-man-reflection](../README.md) > ["extractorData"](../modules/_extractordata_.md)

# External module: "extractorData"

## Index

### Functions

* [ensureDataFile](_extractordata_.md#ensuredatafile)
* [extractorGetterBuilder](_extractordata_.md#extractorgetterbuilder)
* [getFileId](_extractordata_.md#getfileid)
* [writeExtractorData](_extractordata_.md#writeextractordata)

---

## Functions

<a id="ensuredatafile"></a>

###  ensureDataFile

▸ **ensureDataFile**(sourceFile: *`SourceFile`*, options: *`object`*, prependToFile: *`string`[]*): `object`

*Defined in [extractorData.ts:88](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/2d517f2/src/extractorData.ts#L88)*

**Parameters:**

**sourceFile: `SourceFile`**

**options: `object`**

| Name | Type |
| ------ | ------ |
| clean | `boolean` |
| extractorDataFolderFileName | `string` |
| `Optional` extractorDataMode | "prependVariable" \| "folderFile" \| `undefined` |
| extractorDataVariableName | `string` |

**prependToFile: `string`[]**

**Returns:** `object`

___
<a id="extractorgetterbuilder"></a>

###  extractorGetterBuilder

▸ **extractorGetterBuilder**(options: *[ReplaceFileFunctionCallOptions](../interfaces/_types_.replacefilefunctioncalloptions.md) & `object`*, index: *`number`*, sourceFile: *`SourceFile`*, c: *`CallExpression`*): [ExtractorGetter](_types_.md#extractorgetter)

*Defined in [extractorData.ts:10](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/2d517f2/src/extractorData.ts#L10)*

Responsible of reading the extractor data. It provides a getter function that returns a JS expression that should evaluate in the data value corresponding to given index, sourcefile, extractor.

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [ReplaceFileFunctionCallOptions](../interfaces/_types_.replacefilefunctioncalloptions.md) & `object` |
| index | `number` |
| sourceFile | `SourceFile` |
| c | `CallExpression` |

**Returns:** [ExtractorGetter](_types_.md#extractorgetter)

___
<a id="getfileid"></a>

###  getFileId

▸ **getFileId**(sourceFile: *`SourceFile`*, __namedParameters: *`object`*): `number`

*Defined in [extractorData.ts:127](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/2d517f2/src/extractorData.ts#L127)*

**Parameters:**

**sourceFile: `SourceFile`**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| extractorDataFolderFileName | `string` |

**Returns:** `number`

___
<a id="writeextractordata"></a>

###  writeExtractorData

▸ **writeExtractorData**(sourceFile: *`SourceFile`*, options?: *`object`*, callExpressions: *`CallExpression`[]*, prependToFile: *`string`[]*): `void`

*Defined in [extractorData.ts:31](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/2d517f2/src/extractorData.ts#L31)*

Responsible of writing extractor data according to extractorDataMode. instead of fileName as string, we use the file index in the directory's children sorted alphabetically so the get() expressions are smaller. Instead of `Name<T>(get('myCustomComponentTest.tsx',9))` we just have `Name<T>(get(2,9))`

**Parameters:**

**sourceFile: `SourceFile`**

**`Default value` options: `object`**

| Name | Type |
| ------ | ------ |
| clean | `boolean` |
| extractorDataFolderFileName | `string` |
| `Optional` extractorDataMode | [ExtractorDataMode](_types_.md#extractordatamode) |
| extractorDataVariableName | `string` |

**callExpressions: `CallExpression`[]**

**prependToFile: `string`[]**

**Returns:** `void`

___

