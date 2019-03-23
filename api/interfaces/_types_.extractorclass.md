[typescript-poor-man-reflection](../README.md) > ["types"](../modules/_types_.md) > [ExtractorClass](../interfaces/_types_.extractorclass.md)

# Interface: ExtractorClass

## Hierarchy

**ExtractorClass**

## Implemented by

* [AbstractExtractor](../classes/_extractors_abstractextractor_.abstractextractor.md)
* [AbstractRefactorExtractor](../classes/_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md)
* [Ast](../classes/_extractors_source_printast_.ast.md)
* [Ast](../classes/_extractors_source_printast_.ast.md)
* [BodyTextClass](../classes/_extractors_basic_bodytext_.bodytextclass.md)
* [CatClass](../classes/_extractors_fs_cat_.catclass.md)
* [ExecClass](../classes/_extractors_fs_exec_.execclass.md)
* [ExtractInterfaceClass](../classes/_extractors_source_extractinterface_.extractinterfaceclass.md)
* [InferTypesClass](../classes/_extractors_source_infertypes_.infertypesclass.md)
* [LsClass](../classes/_extractors_fs_ls_.lsclass.md)
* [NodeTextClass](../classes/_extractors_basic_nodetext_.nodetextclass.md)
* [NodeTypeClass](../classes/_extractors_source_nodetype_.nodetypeclass.md)
* [OrganizeImportsClass](../classes/_extractors_source_organizeimports_.organizeimportsclass.md)
* [ProjectFilesClass](../classes/_extractors_source_projectfiles_.projectfilesclass.md)
* [ReadFilesClass](../classes/_extractors_fs_readfiles_.readfilesclass.md)
* [RemoveUnusedClass](../classes/_extractors_source_removeunused_.removeunusedclass.md)
* [ThisBlockTextClass](../classes/_extractors_basic_thisblocktext_.thisblocktextclass.md)
* [TypeTextClass](../classes/_extractors_basic_typetext_.typetextclass.md)

## Index

### Methods

* [afterExtract](_types_.extractorclass.md#afterextract)
* [beforeExtract](_types_.extractorclass.md#beforeextract)
* [extract](_types_.extractorclass.md#extract)
* [getConfig](_types_.extractorclass.md#getconfig)

---

## Methods

<a id="afterextract"></a>

### `<Optional>` afterExtract

▸ **afterExtract**(filePath: *`string`*, extractorName: *`string`*, options: *`Required`<[ReplaceProjectFunctionCallOptions](_types_.replaceprojectfunctioncalloptions.md)>*): `void`

*Defined in [types.ts:151](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/types.ts#L151)*

Called after [extract](_types_.extractorclass.md#extract) method is called for all extractors in this sourceFile. It's safe here to transform the AST leaving nodes forgotten ([https://dsherret.github.io/ts-morph/manipulation/#strongwarningstrong](https://dsherret.github.io/ts-morph/manipulation/#strongwarningstrong) - can use `insertText`, `replaceText`, or `removeText` or `organizeImports`)

**Parameters:**

| Name | Type |
| ------ | ------ |
| filePath | `string` |
| extractorName | `string` |
| options | `Required`<[ReplaceProjectFunctionCallOptions](_types_.replaceprojectfunctioncalloptions.md)> |

**Returns:** `void`

___
<a id="beforeextract"></a>

### `<Optional>` beforeExtract

▸ **beforeExtract**(filePath: *`string`*, extractorName: *`string`*, options: *`Required`<[ReplaceProjectFunctionCallOptions](_types_.replaceprojectfunctioncalloptions.md)>*): `void`

*Defined in [types.ts:144](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/types.ts#L144)*

Called before [extract](_types_.extractorclass.md#extract) method is called for any extractors in this sourceFile. It's safe here to transform the AST leaving nodes forgotten ([https://dsherret.github.io/ts-morph/manipulation/#strongwarningstrong](https://dsherret.github.io/ts-morph/manipulation/#strongwarningstrong) - can use `insertText`, `replaceText`, or `removeText` or `organizeImports`)

**Parameters:**

| Name | Type |
| ------ | ------ |
| filePath | `string` |
| extractorName | `string` |
| options | `Required`<[ReplaceProjectFunctionCallOptions](_types_.replaceprojectfunctioncalloptions.md)> |

**Returns:** `void`

___
<a id="extract"></a>

###  extract

▸ **extract**(n: *`CallExpression`*, index: *`number`*, getter: *[ExtractorGetter](../modules/_types_.md#extractorgetter)*, options: *`Required`<[ReplaceProjectFunctionCallOptions](_types_.replaceprojectfunctioncalloptions.md)>*, variableAccessor: *[FileVariableAccessor](../modules/_types_.md#filevariableaccessor)*): [ExtractorResult](_types_.extractorresult.md)

*Defined in [types.ts:131](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/types.ts#L131)*

Implements the extraction or AST transformation. For each extractor function call expression found in a file, its method [extract](_types_.extractorclass.md#extract) is called respecting the order in the code.

If a transformation occurs here it must be safe ([https://dsherret.github.io/ts-morph/manipulation/#strongwarningstrong](https://dsherret.github.io/ts-morph/manipulation/#strongwarningstrong)) - don't use `insertText`, `replaceText`, or `removeText` or `organizeImports`or any operation that will leave nodes forgotten.

If you need to do so, please use [beforeExtract](_types_.extractorclass.md#beforeextract) or [afterExtract](_types_.extractorclass.md#afterextract)

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

*Defined in [types.ts:120](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/109bb8c/src/types.ts#L120)*

**Returns:** [ExtractorConfig](_types_.extractorconfig.md)

___

