[typescript-poor-man-reflection](../README.md) > ["extractors/source/printAst"](../modules/_extractors_source_printast_.md) > [AstOptions](../interfaces/_extractors_source_printast_.astoptions.md)

# Interface: AstOptions

## Hierarchy

 [ExtractorOptions](_types_.extractoroptions.md)

**↳ AstOptions**

## Index

### Properties

* [asJson](_extractors_source_printast_.astoptions.md#asjson)
* [dontPrintIdentifier](_extractors_source_printast_.astoptions.md#dontprintidentifier)
* [dontPrintKindName](_extractors_source_printast_.astoptions.md#dontprintkindname)
* [dontPrintText](_extractors_source_printast_.astoptions.md#dontprinttext)
* [outputMode](_extractors_source_printast_.astoptions.md#outputmode)
* [outputVariableName](_extractors_source_printast_.astoptions.md#outputvariablename)
* [removeMe](_extractors_source_printast_.astoptions.md#removeme)
* [target](_extractors_source_printast_.astoptions.md#target)
* [throwOnError](_extractors_source_printast_.astoptions.md#throwonerror)

---

## Properties

<a id="asjson"></a>

### `<Optional>` asJson

**● asJson**: *`undefined` \| `false` \| `true`*

*Defined in [extractors/source/printAst.ts:47](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/ddc8b16/src/extractors/source/printAst.ts#L47)*

If true it will return the AST as JSON object. If false if will return a string with indentation representing the AST

___
<a id="dontprintidentifier"></a>

### `<Optional>` dontPrintIdentifier

**● dontPrintIdentifier**: *`undefined` \| `false` \| `true`*

*Defined in [extractors/source/printAst.ts:41](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/ddc8b16/src/extractors/source/printAst.ts#L41)*

___
<a id="dontprintkindname"></a>

### `<Optional>` dontPrintKindName

**● dontPrintKindName**: *`undefined` \| `false` \| `true`*

*Defined in [extractors/source/printAst.ts:40](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/ddc8b16/src/extractors/source/printAst.ts#L40)*

___
<a id="dontprinttext"></a>

### `<Optional>` dontPrintText

**● dontPrintText**: *`undefined` \| `false` \| `true`*

*Defined in [extractors/source/printAst.ts:42](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/ddc8b16/src/extractors/source/printAst.ts#L42)*

___
<a id="outputmode"></a>

### `<Optional>` outputMode

**● outputMode**: *[ExtractorOutputMode](../modules/_types_.md#extractoroutputmode)*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[outputMode](_types_.extractoroptions.md#outputmode)*

*Defined in [types.ts:214](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/ddc8b16/src/types.ts#L214)*

Default is 'asReturnValue' in which case the output will be returned by the extractor function call.

If `assignToVariable` then it will be assigned to a variable in the ancestor Block. If there is a variable there called `outputVariableName` then that one will be used, otherwise a new variable will be created, next to the extractor call expression with a random name. IMPORTANT: variables created or assigned using this mode won't be removed or restored with `--clean`

___
<a id="outputvariablename"></a>

### `<Optional>` outputVariableName

**● outputVariableName**: *`string` \| "__IGNORE__"*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[outputVariableName](_types_.extractoroptions.md#outputvariablename)*

*Defined in [types.ts:218](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/ddc8b16/src/types.ts#L218)*

Name of the variable to assign the value in case outputMode is `assignToVariable`

___
<a id="removeme"></a>

### `<Optional>` removeMe

**● removeMe**: *`undefined` \| `false` \| `true`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[removeMe](_types_.extractoroptions.md#removeme)*

*Defined in [types.ts:230](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/ddc8b16/src/types.ts#L230)*

If true, this extractor function call expression will be removed as long as it's on an ExpressionStatement. Example:

```ts
MyExtractor({removeMe: true}) // Will be removed
const a = MyExtractor({removeMe: true}) // Won't be removed
foo(MyExtractor({removeMe: true}))// Won't be removed
```

Important: removed extractor call expressions are not restored when using --clean.

___
<a id="target"></a>

### `<Optional>` target

**● target**: *`any`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[target](_types_.extractoroptions.md#target)*

*Defined in [types.ts:235](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/ddc8b16/src/types.ts#L235)*

Can be used to reference a node in this file.

___
<a id="throwonerror"></a>

### `<Optional>` throwOnError

**● throwOnError**: *`undefined` \| `false` \| `true`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[throwOnError](_types_.extractoroptions.md#throwonerror)*

*Defined in [types.ts:237](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/ddc8b16/src/types.ts#L237)*

___

