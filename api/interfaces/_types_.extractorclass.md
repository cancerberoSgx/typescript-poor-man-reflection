[typescript-poor-man-reflection](../README.md) > ["types"](../modules/_types_.md) > [ExtractorClass](../interfaces/_types_.extractorclass.md)

# Interface: ExtractorClass

## Hierarchy

**ExtractorClass**

## Implemented by

* [AbstractExtractor](../classes/_extractors_abstractextractor_.abstractextractor.md)
* [Ast](../classes/_extractors_ast_.ast.md)
* [Ast](../classes/_extractors_ast_.ast.md)
* [BodyText](../classes/_extractors_basic_bodytext_.bodytext.md)
* [NodeText](../classes/_extractors_basic_nodetext_.nodetext.md)
* [ThisBlockText](../classes/_extractors_basic_thisblocktext_.thisblocktext.md)
* [TypeText](../classes/_extractors_basic_typetext_.typetext.md)

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

*Defined in [types.ts:129](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8c7c887/src/types.ts#L129)*

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

▸ **extract**(n: *`CallExpression`*, index: *`number`*, getter: *[ExtractorGetter](../modules/_types_.md#extractorgetter)*, options: *`Required`<[ReplaceProjectFunctionCallOptions](_types_.replaceprojectfunctioncalloptions.md)>*, variableAccessor: *[FileVariableAccessor](../modules/_types_.md#filevariableaccessor)*, project?: *`Project`*): [ExtractorResult](_types_.extractorresult.md)

*Defined in [types.ts:121](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8c7c887/src/types.ts#L121)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |
| index | `number` |
| getter | [ExtractorGetter](../modules/_types_.md#extractorgetter) |
| options | `Required`<[ReplaceProjectFunctionCallOptions](_types_.replaceprojectfunctioncalloptions.md)> |
| variableAccessor | [FileVariableAccessor](../modules/_types_.md#filevariableaccessor) |
| `Optional` project | `Project` |

**Returns:** [ExtractorResult](_types_.extractorresult.md)

___
<a id="getconfig"></a>

### `<Optional>` getConfig

▸ **getConfig**(): [ExtractorConfig](_types_.extractorconfig.md)

*Defined in [types.ts:120](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8c7c887/src/types.ts#L120)*

**Returns:** [ExtractorConfig](_types_.extractorconfig.md)

___

