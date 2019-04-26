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

▸ **ensureDataFile**(sourceFile: *`SourceFile`*, options: *[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)*, prependToFile: *`string`[]*, fileVariables: *`object`*, fileId: *`number`*): `object`

*Defined in [extractorData.ts:104](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/extractorData.ts#L104)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sourceFile | `SourceFile` |
| options | [ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md) |
| prependToFile | `string`[] |
| fileVariables | `object` |
| fileId | `number` |

**Returns:** `object`

___
<a id="extractorgetterbuilder"></a>

###  extractorGetterBuilder

▸ **extractorGetterBuilder**(options: *[ReplaceFileFunctionCallOptions](../interfaces/_types_.replacefilefunctioncalloptions.md) & `object`*, index: *`number`*, sourceFile: *`SourceFile`*, c: *`CallExpression`*): [ExtractorGetter](_types_.md#extractorgetter)

*Defined in [extractorData.ts:16](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/extractorData.ts#L16)*

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

*Defined in [extractorData.ts:156](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/extractorData.ts#L156)*

TODO: memoize

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

▸ **writeExtractorData**(sourceFile: *`SourceFile`*, options_?: *[ReplaceFileFunctionCallOptions](../interfaces/_types_.replacefilefunctioncalloptions.md)*, callExpressions: *`CallExpression`[]*, prependToFile: *`string`[]*, fileVariables: *`object`*): `void`

*Defined in [extractorData.ts:39](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/extractorData.ts#L39)*

Responsible of writing extractor data according to extractorDataMode. instead of fileName as string, we use the file index in the directory's children sorted alphabetically so the get() expressions are smaller. Instead of `Name<T>(get('myCustomComponentTest.tsx',9))` we just have `Name<T>(get(2,9))`

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| sourceFile | `SourceFile` | - |
| `Default value` options_ | [ReplaceFileFunctionCallOptions](../interfaces/_types_.replacefilefunctioncalloptions.md) |  defaultOptions |
| callExpressions | `CallExpression`[] | - |
| prependToFile | `string`[] | - |
| fileVariables | `object` | - |

**Returns:** `void`

___

