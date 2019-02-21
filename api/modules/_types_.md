[typescript-poor-man-reflection](../README.md) > ["types"](../modules/_types_.md)

# External module: "types"

## Index

### Interfaces

* [ExtractorResult](../interfaces/_types_.extractorresult.md)
* [ReplaceFileFunctionCallOptions](../interfaces/_types_.replacefilefunctioncalloptions.md)
* [ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)
* [Replacement](../interfaces/_types_.replacement.md)

### Type aliases

* [Extractor](_types_.md#extractor)
* [ExtractorDataMode](_types_.md#extractordatamode)
* [ExtractorGetter](_types_.md#extractorgetter)

---

## Type aliases

<a id="extractor"></a>

###  Extractor

**Ƭ Extractor**: *`function`*

*Defined in [types.ts:105](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/2d517f2/src/types.ts#L105)*

#### Type declaration
▸(n: *`CallExpression`*, index: *`number`*, getterBuilder: *`function`*, options: *`Partial`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*): [ExtractorResult](../interfaces/_types_.extractorresult.md) \| `string`

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |
| index | `number` |
| getterBuilder | `function` |
| options | `Partial`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)> |

**Returns:** [ExtractorResult](../interfaces/_types_.extractorresult.md) \| `string`

___
<a id="extractordatamode"></a>

###  ExtractorDataMode

**Ƭ ExtractorDataMode**: *"prependVariable" \| "folderFile"*

*Defined in [types.ts:119](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/2d517f2/src/types.ts#L119)*

___
<a id="extractorgetter"></a>

###  ExtractorGetter

**Ƭ ExtractorGetter**: *`function`*

*Defined in [types.ts:117](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/2d517f2/src/types.ts#L117)*

#### Type declaration
▸(index: *`number`*): `string`

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** `string`

___

