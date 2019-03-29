[typescript-poor-man-reflection](../README.md) > ["extractors/abstractExtractor"](../modules/_extractors_abstractextractor_.md) > [AbstractExtractor](../classes/_extractors_abstractextractor_.abstractextractor.md)

# Class: AbstractExtractor

## Hierarchy

**AbstractExtractor**

↳  [BodyTextClass](_extractors_basic_bodytext_.bodytextclass.md)

↳  [NodeTextClass](_extractors_basic_nodetext_.nodetextclass.md)

↳  [ThisBlockTextClass](_extractors_basic_thisblocktext_.thisblocktextclass.md)

↳  [TypeTextClass](_extractors_basic_typetext_.typetextclass.md)

↳  [ExecClass](_extractors_fs_exec_.execclass.md)

↳  [LsClass](_extractors_fs_ls_.lsclass.md)

↳  [ProjectFilesClass](_extractors_fs_projectfiles_.projectfilesclass.md)

↳  [ReadFilesClass](_extractors_fs_readfiles_.readfilesclass.md)

↳  [ExtractInterfaceClass](_extractors_source_extractinterface_.extractinterfaceclass.md)

↳  [IfClass](_extractors_core_if_.ifclass.md)

↳  [AbstractRefactorExtractor](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md)

↳  [NodeTypeClass](_extractors_source_nodetype_.nodetypeclass.md)

↳  [OverridesClass](_extractors_source_overrides_.overridesclass.md)

↳  [RegisterClass](_extractors_core_register_.registerclass.md)

↳  [Ast](_extractors_source_printast_.ast.md)

↳  [CatClass](_extractors_fs_cat_.catclass.md)

↳  [AttributeClass](_extractors_core_attribute_.attributeclass.md)

## Implements

* [ExtractorClass](../interfaces/_types_.extractorclass.md)

## Index

### Properties

* [config](_extractors_abstractextractor_.abstractextractor.md#config)
* [defaultExtractorOptions](_extractors_abstractextractor_.abstractextractor.md#defaultextractoroptions)
* [freeArgumentNumber](_extractors_abstractextractor_.abstractextractor.md#freeargumentnumber)
* [name](_extractors_abstractextractor_.abstractextractor.md#name)

### Methods

* [afterExtract](_extractors_abstractextractor_.abstractextractor.md#afterextract)
* [beforeExtract](_extractors_abstractextractor_.abstractextractor.md#beforeextract)
* [buildExtractorResult](_extractors_abstractextractor_.abstractextractor.md#buildextractorresult)
* [error](_extractors_abstractextractor_.abstractextractor.md#error)
* [extract](_extractors_abstractextractor_.abstractextractor.md#extract)
* [getConfig](_extractors_abstractextractor_.abstractextractor.md#getconfig)
* [getOptionsFromFistArg](_extractors_abstractextractor_.abstractextractor.md#getoptionsfromfistarg)
* [getTarget](_extractors_abstractextractor_.abstractextractor.md#gettarget)
* [parseOptionValue](_extractors_abstractextractor_.abstractextractor.md#parseoptionvalue)

---

## Properties

<a id="config"></a>

### `<Protected>` config

**● config**: *[ExtractorOptions](../interfaces/_types_.extractoroptions.md)*

*Defined in [extractors/abstractExtractor.ts:24](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f1306fa/src/extractors/abstractExtractor.ts#L24)*

___
<a id="defaultextractoroptions"></a>

### `<Protected>` defaultExtractorOptions

**● defaultExtractorOptions**: *[ExtractorOptions](../interfaces/_types_.extractoroptions.md)*

*Defined in [extractors/abstractExtractor.ts:22](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f1306fa/src/extractors/abstractExtractor.ts#L22)*

___
<a id="freeargumentnumber"></a>

### `<Protected>` freeArgumentNumber

**● freeArgumentNumber**: *`number`* = 0

*Defined in [extractors/abstractExtractor.ts:23](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f1306fa/src/extractors/abstractExtractor.ts#L23)*

___
<a id="name"></a>

### `<Optional>` name

**● name**: *`undefined` \| `string`*

*Defined in [extractors/abstractExtractor.ts:26](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f1306fa/src/extractors/abstractExtractor.ts#L26)*

___

## Methods

<a id="afterextract"></a>

###  afterExtract

▸ **afterExtract**(filePath: *`string`*, extractorName: *`string`*, options: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*): `void`

*Implementation of [ExtractorClass](../interfaces/_types_.extractorclass.md).[afterExtract](../interfaces/_types_.extractorclass.md#afterextract)*

*Defined in [extractors/abstractExtractor.ts:162](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f1306fa/src/extractors/abstractExtractor.ts#L162)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| filePath | `string` |
| extractorName | `string` |
| options | `Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)> |

**Returns:** `void`

___
<a id="beforeextract"></a>

###  beforeExtract

▸ **beforeExtract**(filePath: *`string`*, extractorName: *`string`*, options: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*): `void`

*Implementation of [ExtractorClass](../interfaces/_types_.extractorclass.md).[beforeExtract](../interfaces/_types_.extractorclass.md#beforeextract)*

*Defined in [extractors/abstractExtractor.ts:180](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f1306fa/src/extractors/abstractExtractor.ts#L180)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| filePath | `string` |
| extractorName | `string` |
| options | `Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)> |

**Returns:** `void`

___
<a id="buildextractorresult"></a>

### `<Protected>` buildExtractorResult

▸ **buildExtractorResult**(n: *`CallExpression`*, output: *[BuildExtractorResultOutput](../modules/_extractors_abstractextractor_.md#buildextractorresultoutput)*, getter: *[ExtractorGetter](../modules/_types_.md#extractorgetter)*, index: *`number`*, extractOptions: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*, extractorOptions?: *[ExtractorOptions](../interfaces/_types_.extractoroptions.md)*): [ExtractorResult](../interfaces/_types_.extractorresult.md)

*Defined in [extractors/abstractExtractor.ts:86](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f1306fa/src/extractors/abstractExtractor.ts#L86)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| n | `CallExpression` |
| output | [BuildExtractorResultOutput](../modules/_extractors_abstractextractor_.md#buildextractorresultoutput) |  if string, then it will be stored and returned in argument as a string literal. If node, it will be stored as string literal (not escaped) and it will be returned (in argument) as the Node literal no string. In later case, it needs to be an expression(cannot be a statement) but in general, it will be since they are using it in an argument value. |
| getter | [ExtractorGetter](../modules/_types_.md#extractorgetter) |
| index | `number` |
| extractOptions | `Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)> |
| `Optional` extractorOptions | [ExtractorOptions](../interfaces/_types_.extractoroptions.md) |

**Returns:** [ExtractorResult](../interfaces/_types_.extractorresult.md)

___
<a id="error"></a>

### `<Protected>` error

▸ **error**(m: *`string`*): `void`

*Defined in [extractors/abstractExtractor.ts:194](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f1306fa/src/extractors/abstractExtractor.ts#L194)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| m | `string` |

**Returns:** `void`

___
<a id="extract"></a>

### `<Abstract>` extract

▸ **extract**(n: *`CallExpression`*, index: *`number`*, getter: *[ExtractorGetter](../modules/_types_.md#extractorgetter)*, options: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*, variableAccessor: *[FileVariableAccessor](../interfaces/_types_.filevariableaccessor.md)*): [ExtractorResult](../interfaces/_types_.extractorresult.md)

*Implementation of [ExtractorClass](../interfaces/_types_.extractorclass.md).[extract](../interfaces/_types_.extractorclass.md#extract)*

*Defined in [extractors/abstractExtractor.ts:35](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f1306fa/src/extractors/abstractExtractor.ts#L35)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |
| index | `number` |
| getter | [ExtractorGetter](../modules/_types_.md#extractorgetter) |
| options | `Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)> |
| variableAccessor | [FileVariableAccessor](../interfaces/_types_.filevariableaccessor.md) |

**Returns:** [ExtractorResult](../interfaces/_types_.extractorresult.md)

___
<a id="getconfig"></a>

###  getConfig

▸ **getConfig**(): `object`

*Implementation of [ExtractorClass](../interfaces/_types_.extractorclass.md).[getConfig](../interfaces/_types_.extractorclass.md#getconfig)*

*Defined in [extractors/abstractExtractor.ts:28](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f1306fa/src/extractors/abstractExtractor.ts#L28)*

**Returns:** `object`

___
<a id="getoptionsfromfistarg"></a>

### `<Protected>` getOptionsFromFistArg

▸ **getOptionsFromFistArg**<`T`>(n: *`CallExpression`*): `T` \| `undefined`

*Defined in [extractors/abstractExtractor.ts:50](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f1306fa/src/extractors/abstractExtractor.ts#L50)*

Get options from first argument or undefined.

TODO: support references

TODO: dont eval

**Type parameters:**

#### T :  [ExtractorOptions](../interfaces/_types_.extractoroptions.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |

**Returns:** `T` \| `undefined`

___
<a id="gettarget"></a>

### `<Protected>` getTarget

▸ **getTarget**(n: *`CallExpression`*, config: *[ExtractorOptions](../interfaces/_types_.extractoroptions.md)*): `undefined` \| `Node`<`Node`>

*Defined in [extractors/abstractExtractor.ts:140](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f1306fa/src/extractors/abstractExtractor.ts#L140)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |
| config | [ExtractorOptions](../interfaces/_types_.extractoroptions.md) |

**Returns:** `undefined` \| `Node`<`Node`>

___
<a id="parseoptionvalue"></a>

### `<Protected>` parseOptionValue

▸ **parseOptionValue**(name: *`string`*, value: *`Node` \| `undefined`*): `any`

*Defined in [extractors/abstractExtractor.ts:70](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f1306fa/src/extractors/abstractExtractor.ts#L70)*

since options need to be parsed from a literal object Node, subclasses might need to override this method to parse their own options

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| value | `Node` \| `undefined` |

**Returns:** `any`

___

