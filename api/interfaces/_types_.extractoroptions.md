[typescript-poor-man-reflection](../README.md) > ["types"](../modules/_types_.md) > [ExtractorOptions](../interfaces/_types_.extractoroptions.md)

# Interface: ExtractorOptions

These are options that user can use to configure a Extractor, could be as convention in the first arg, ex: `PrintAst({ target: foo, outputMode: 'assignToVariable', outputVariableName: 'existingVar')`

## Hierarchy

**ExtractorOptions**

↳  [AstOptions](_extractors_ast_.astoptions.md)

## Index

### Properties

* [outputMode](_types_.extractoroptions.md#outputmode)
* [outputVariableName](_types_.extractoroptions.md#outputvariablename)
* [removeMe](_types_.extractoroptions.md#removeme)
* [targetMode](_types_.extractoroptions.md#targetmode)

---

## Properties

<a id="outputmode"></a>

### `<Optional>` outputMode

**● outputMode**: *[ExtractorOutputMode](../modules/_types_.md#extractoroutputmode)*

*Defined in [types.ts:148](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/527e8dd/src/types.ts#L148)*

___
<a id="outputvariablename"></a>

### `<Optional>` outputVariableName

**● outputVariableName**: *`undefined` \| `string`*

*Defined in [types.ts:149](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/527e8dd/src/types.ts#L149)*

___
<a id="removeme"></a>

### `<Optional>` removeMe

**● removeMe**: *`undefined` \| `false` \| `true`*

*Defined in [types.ts:147](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/527e8dd/src/types.ts#L147)*

___
<a id="targetmode"></a>

### `<Optional>` targetMode

**● targetMode**: *"self" \| "definition" \| "allReferences"*

*Defined in [types.ts:150](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/527e8dd/src/types.ts#L150)*

___

