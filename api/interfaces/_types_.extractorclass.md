[typescript-poor-man-reflection](../README.md) > ["types"](../modules/_types_.md) > [ExtractorClass](../interfaces/_types_.extractorclass.md)

# Interface: ExtractorClass

## Hierarchy

**ExtractorClass**

## Implemented by

* [AbstractExtractor](../classes/_extractors_abstractextractor_.abstractextractor.md)
* [Ast](../classes/_extractors_source_printast_.ast.md)
* [Ast](../classes/_extractors_source_printast_.ast.md)
* [BodyTextClass](../classes/_extractors_basic_bodytext_.bodytextclass.md)
* [CatClass](../classes/_extractors_fs_cat_.catclass.md)
* [LsClass](../classes/_extractors_fs_ls_.lsclass.md)
* [NodeTextClass](../classes/_extractors_basic_nodetext_.nodetextclass.md)
* [NodeTypeClass](../classes/_extractors_source_nodetype_.nodetypeclass.md)
* [OrganizeImportsClass](../classes/_extractors_source_organizeimports_.organizeimportsclass.md)
* [ProjectFilesClass](../classes/_extractors_source_projectfiles_.projectfilesclass.md)
* [ReadFilesClass](../classes/_extractors_fs_readfiles_.readfilesclass.md)
* [ThisBlockTextClass](../classes/_extractors_basic_thisblocktext_.thisblocktextclass.md)
* [TypeTextClass](../classes/_extractors_basic_typetext_.typetextclass.md)

## Index

### Methods

* [afterWriteExtractorData](_types_.extractorclass.md#afterwriteextractordata)
* [extract](_types_.extractorclass.md#extract)
* [getConfig](_types_.extractorclass.md#getconfig)

---

## Methods

<a id="afterwriteextractordata"></a>

### `<Optional>` afterWriteExtractorData

▸ **afterWriteExtractorData**(c: *`CallExpression`*, index: *`number`*, options: *`Required`<[ReplaceProjectFunctionCallOptions](_types_.replaceprojectfunctioncalloptions.md)>*): `void`

*Defined in [types.ts:129](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/7a14814/src/types.ts#L129)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| c | `CallExpression` |
| index | `number` |
| options | `Required`<[ReplaceProjectFunctionCallOptions](_types_.replaceprojectfunctioncalloptions.md)> |

**Returns:** `void`

___
<a id="extract"></a>

###  extract

▸ **extract**(n: *`CallExpression`*, index: *`number`*, getter: *[ExtractorGetter](../modules/_types_.md#extractorgetter)*, options: *`Required`<[ReplaceProjectFunctionCallOptions](_types_.replaceprojectfunctioncalloptions.md)>*, variableAccessor: *[FileVariableAccessor](../modules/_types_.md#filevariableaccessor)*): [ExtractorResult](_types_.extractorresult.md)

*Defined in [types.ts:121](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/7a14814/src/types.ts#L121)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |
| index | `number` |
| getter | [ExtractorGetter](../modules/_types_.md#extractorgetter) |
| options | `Required`<[ReplaceProjectFunctionCallOptions](_types_.replaceprojectfunctioncalloptions.md)> |
| variableAccessor | [FileVariableAccessor](../modules/_types_.md#filevariableaccessor) |

**Returns:** [ExtractorResult](_types_.extractorresult.md)

___
<a id="getconfig"></a>

### `<Optional>` getConfig

▸ **getConfig**(): [ExtractorConfig](_types_.extractorconfig.md)

*Defined in [types.ts:120](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/7a14814/src/types.ts#L120)*

**Returns:** [ExtractorConfig](_types_.extractorconfig.md)

___

