[typescript-poor-man-reflection](../README.md) > ["types"](../modules/_types_.md) > [ExtractorClass](../interfaces/_types_.extractorclass.md)

# Interface: ExtractorClass

## Hierarchy

**ExtractorClass**

## Implemented by

* [AbstractExtractor](../classes/_extractors_abstractextractor_.abstractextractor.md)
* [Ast](../classes/_extractors_ast_.ast.md)
* [Ast](../classes/_extractors_ast_.ast.md)

## Index

### Methods

* [extract](_types_.extractorclass.md#extract)
* [getConfig](_types_.extractorclass.md#getconfig)

---

## Methods

<a id="extract"></a>

###  extract

▸ **extract**(n: *`CallExpression`*, index: *`number`*, getter: *[ExtractorGetter](../modules/_types_.md#extractorgetter)*, options: *`Required`<[ReplaceProjectFunctionCallOptions](_types_.replaceprojectfunctioncalloptions.md)>*, variableAccessor: *[FileVariableAccessor](../modules/_types_.md#filevariableaccessor)*, project?: *`Project`*): [ExtractorResult](_types_.extractorresult.md)

*Defined in [types.ts:118](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/055260d/src/types.ts#L118)*

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

*Defined in [types.ts:117](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/055260d/src/types.ts#L117)*

**Returns:** [ExtractorConfig](_types_.extractorconfig.md)

___

