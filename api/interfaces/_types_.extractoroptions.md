[typescript-poor-man-reflection](../README.md) > ["types"](../modules/_types_.md) > [ExtractorOptions](../interfaces/_types_.extractoroptions.md)

# Interface: ExtractorOptions

These are options that user can use to configure a Extractor, could be as convention in the first arg, ex: NodeType({target: aNode, mode: 'asStringLiteral', assignTo: 'nextVariable})

## Hierarchy

**ExtractorOptions**

↳  [AstOptions](_extractors_ast_.astoptions.md)

## Index

### Properties

* [mode](_types_.extractoroptions.md#mode)
* [outputMode](_types_.extractoroptions.md#outputmode)
* [outputVariableName](_types_.extractoroptions.md#outputvariablename)
* [removeMe](_types_.extractoroptions.md#removeme)
* [targetMode](_types_.extractoroptions.md#targetmode)

---

## Properties

<a id="mode"></a>

### `<Optional>` mode

**● mode**: *[ExtractorDataMode](../modules/_types_.md#extractordatamode)*

*Defined in [types.ts:143](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/1f709c2/src/types.ts#L143)*

___
<a id="outputmode"></a>

### `<Optional>` outputMode

**● outputMode**: *[ExtractorOutputMode](../modules/_types_.md#extractoroutputmode)*

*Defined in [types.ts:145](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/1f709c2/src/types.ts#L145)*

___
<a id="outputvariablename"></a>

### `<Optional>` outputVariableName

**● outputVariableName**: *`undefined` \| `string`*

*Defined in [types.ts:146](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/1f709c2/src/types.ts#L146)*

___
<a id="removeme"></a>

### `<Optional>` removeMe

**● removeMe**: *`undefined` \| `false` \| `true`*

*Defined in [types.ts:144](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/1f709c2/src/types.ts#L144)*

___
<a id="targetmode"></a>

### `<Optional>` targetMode

**● targetMode**: *"self" \| "definition" \| "allReferences"*

*Defined in [types.ts:147](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/1f709c2/src/types.ts#L147)*

___

