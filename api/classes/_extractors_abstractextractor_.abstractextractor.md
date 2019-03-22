[typescript-poor-man-reflection](../README.md) > ["extractors/abstractExtractor"](../modules/_extractors_abstractextractor_.md) > [AbstractExtractor](../classes/_extractors_abstractextractor_.abstractextractor.md)

# Class: AbstractExtractor

## Hierarchy

**AbstractExtractor**

↳  [Ast](_extractors_ast_.ast.md)

## Implements

* [ExtractorClass](../interfaces/_types_.extractorclass.md)

## Index

### Methods

* [buildExtractorResult](_extractors_abstractextractor_.abstractextractor.md#buildextractorresult)
* [extract](_extractors_abstractextractor_.abstractextractor.md#extract)
* [getOptionsFromFistArg](_extractors_abstractextractor_.abstractextractor.md#getoptionsfromfistarg)

### Object literals

* [defaultAbstractExtractorOptions](_extractors_abstractextractor_.abstractextractor.md#defaultabstractextractoroptions)

---

## Methods

<a id="buildextractorresult"></a>

### `<Protected>` buildExtractorResult

▸ **buildExtractorResult**(n: *`CallExpression`*, output: *`string`*, outputMode?: *[AbstractExtractorOutputMode](../modules/_extractors_abstractextractor_.md#abstractextractoroutputmode)*): `object`

*Defined in extractors/abstractExtractor.ts:64*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| n | `CallExpression` | - |
| output | `string` | - |
| `Default value` outputMode | [AbstractExtractorOutputMode](../modules/_extractors_abstractextractor_.md#abstractextractoroutputmode) | &quot;asReturnValue&quot; |

**Returns:** `object`

___
<a id="extract"></a>

### `<Abstract>` extract

▸ **extract**(n: *`CallExpression`*, index: *`number`*, getter: *[ExtractorGetter](../modules/_types_.md#extractorgetter)*, options: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*, variableAccessor: *[FileVariableAccessor](../modules/_types_.md#filevariableaccessor)*, project?: *`Project`*): [ExtractorResult](../interfaces/_types_.extractorresult.md)

*Implementation of [ExtractorClass](../interfaces/_types_.extractorclass.md).[extract](../interfaces/_types_.extractorclass.md#extract)*

*Defined in extractors/abstractExtractor.ts:30*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |
| index | `number` |
| getter | [ExtractorGetter](../modules/_types_.md#extractorgetter) |
| options | `Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)> |
| variableAccessor | [FileVariableAccessor](../modules/_types_.md#filevariableaccessor) |
| `Optional` project | `Project` |

**Returns:** [ExtractorResult](../interfaces/_types_.extractorresult.md)

___
<a id="getoptionsfromfistarg"></a>

### `<Protected>` getOptionsFromFistArg

▸ **getOptionsFromFistArg**<`T`>(options: *[ExtractOptions](../interfaces/_types_.extractoptions.md)*): `T` \| `undefined`

*Defined in extractors/abstractExtractor.ts:48*

gets options from first argument or undefined.

TODO: support references

TODO: dont eval

**Type parameters:**

#### T :  [AbstractExtractorOptions](../interfaces/_extractors_abstractextractor_.abstractextractoroptions.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [ExtractOptions](../interfaces/_types_.extractoptions.md) |

**Returns:** `T` \| `undefined`

___

## Object literals

<a id="defaultabstractextractoroptions"></a>

### `<Protected>` defaultAbstractExtractorOptions

**defaultAbstractExtractorOptions**: *`object`*

*Defined in extractors/abstractExtractor.ts:21*

<a id="defaultabstractextractoroptions.outputmode"></a>

####  outputMode

**● outputMode**: *"asReturnValue"* = "asReturnValue"

*Defined in extractors/abstractExtractor.ts:22*

___
<a id="defaultabstractextractoroptions.targetmode"></a>

####  targetMode

**● targetMode**: *"self"* = "self"

*Defined in extractors/abstractExtractor.ts:23*

___

___

