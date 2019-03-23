[typescript-poor-man-reflection](../README.md) > ["types"](../modules/_types_.md) > [ExtractorConfig](../interfaces/_types_.extractorconfig.md)

# Interface: ExtractorConfig

## Hierarchy

**ExtractorConfig**

## Index

### Properties

* [freeArgumentNumber](_types_.extractorconfig.md#freeargumentnumber)
* [unusedArgumentDefaultValue](_types_.extractorconfig.md#unusedargumentdefaultvalue)

---

## Properties

<a id="freeargumentnumber"></a>

### `<Optional>` freeArgumentNumber

**● freeArgumentNumber**: *`undefined` \| `number`*

*Defined in [types.ts:113](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/53d739a/src/types.ts#L113)*

if extractor uses first (0-th) argument for their private API they would return 1 so WE can use 1-th to pass data

___
<a id="unusedargumentdefaultvalue"></a>

### `<Optional>` unusedArgumentDefaultValue

**● unusedArgumentDefaultValue**: *`undefined` \| `string`*

*Defined in [types.ts:116](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/53d739a/src/types.ts#L116)*

related to freeArgumentNumber, if we detect no arguments in extractor reserved args, we will need to fill them with dummy values, so here we request which type.

___

