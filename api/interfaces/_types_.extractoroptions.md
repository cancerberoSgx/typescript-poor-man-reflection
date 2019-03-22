[typescript-poor-man-reflection](../README.md) > ["types"](../modules/_types_.md) > [ExtractorOptions](../interfaces/_types_.extractoroptions.md)

# Interface: ExtractorOptions

These are options that user can use to configure a Extractor, could be as convention in the first arg, ex: NodeType({target: aNode, mode: 'asStringLiteral', assignTo: 'nextVariable})

## Hierarchy

**ExtractorOptions**

↳  [AbstractExtractorOptions](_extractors_abstractextractor_.abstractextractoroptions.md)

## Index

### Properties

* [destination](_types_.extractoroptions.md#destination)
* [mode](_types_.extractoroptions.md#mode)
* [removeMe](_types_.extractoroptions.md#removeme)

---

## Properties

<a id="destination"></a>

### `<Optional>` destination

**● destination**: *`undefined` \| "nextVariableDeclaration|nextReturnExpression"*

*Defined in [types.ts:144](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/055260d/src/types.ts#L144)*

___
<a id="mode"></a>

### `<Optional>` mode

**● mode**: *[ExtractorDataMode](../modules/_types_.md#extractordatamode)*

*Defined in [types.ts:142](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/055260d/src/types.ts#L142)*

___
<a id="removeme"></a>

### `<Optional>` removeMe

**● removeMe**: *`undefined` \| `false` \| `true`*

*Defined in [types.ts:143](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/055260d/src/types.ts#L143)*

___

