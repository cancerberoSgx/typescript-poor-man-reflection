[typescript-poor-man-reflection](../README.md) > ["extractors/ast"](../modules/_extractors_ast_.md) > [Ast](../classes/_extractors_ast_.ast.md)

# Class: Ast

## Hierarchy

 [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md)

**↳ Ast**

## Implements

* [ExtractorClass](../interfaces/_types_.extractorclass.md)
* [ExtractorClass](../interfaces/_types_.extractorclass.md)

## Index

### Methods

* [buildExtractorResult](_extractors_ast_.ast.md#buildextractorresult)
* [extract](_extractors_ast_.ast.md#extract)
* [getConfig](_extractors_ast_.ast.md#getconfig)
* [getOptionsFromFistArg](_extractors_ast_.ast.md#getoptionsfromfistarg)

### Object literals

* [defaultAbstractExtractorOptions](_extractors_ast_.ast.md#defaultabstractextractoroptions)

---

## Methods

<a id="buildextractorresult"></a>

### `<Protected>` buildExtractorResult

▸ **buildExtractorResult**(n: *`CallExpression`*, output: *`string`*, outputMode?: *[AbstractExtractorOutputMode](../modules/_extractors_abstractextractor_.md#abstractextractoroutputmode)*): `object`

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[buildExtractorResult](_extractors_abstractextractor_.abstractextractor.md#buildextractorresult)*

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

###  extract

▸ **extract**(n: *`CallExpression`*, index: *`number`*, getter: *[ExtractorGetter](../modules/_types_.md#extractorgetter)*, options: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*, variableAccessor: *[FileVariableAccessor](../modules/_types_.md#filevariableaccessor)*, project?: *`Project`*): [ExtractorResult](../interfaces/_types_.extractorresult.md)

*Implementation of [ExtractorClass](../interfaces/_types_.extractorclass.md).[extract](../interfaces/_types_.extractorclass.md#extract)*

*Overrides [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[extract](_extractors_abstractextractor_.abstractextractor.md#extract)*

*Defined in extractors/ast.ts:12*

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
<a id="getconfig"></a>

###  getConfig

▸ **getConfig**(): `object`

*Implementation of [ExtractorClass](../interfaces/_types_.extractorclass.md).[getConfig](../interfaces/_types_.extractorclass.md#getconfig)*

*Defined in extractors/ast.ts:27*

**Returns:** `object`

___
<a id="getoptionsfromfistarg"></a>

### `<Protected>` getOptionsFromFistArg

▸ **getOptionsFromFistArg**<`T`>(options: *[ExtractOptions](../interfaces/_types_.extractoptions.md)*): `T` \| `undefined`

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[getOptionsFromFistArg](_extractors_abstractextractor_.abstractextractor.md#getoptionsfromfistarg)*

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

*Inherited from [AbstractExtractor](_extractors_abstractextractor_.abstractextractor.md).[defaultAbstractExtractorOptions](_extractors_abstractextractor_.abstractextractor.md#defaultabstractextractoroptions)*

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

