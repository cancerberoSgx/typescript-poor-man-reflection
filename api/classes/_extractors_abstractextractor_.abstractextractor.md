[typescript-poor-man-reflection](../README.md) > ["extractors/abstractExtractor"](../modules/_extractors_abstractextractor_.md) > [AbstractExtractor](../classes/_extractors_abstractextractor_.abstractextractor.md)

# Class: AbstractExtractor

## Hierarchy

**AbstractExtractor**

↳  [BodyTextClass](_extractors_basic_bodytext_.bodytextclass.md)

↳  [NodeTextClass](_extractors_basic_nodetext_.nodetextclass.md)

↳  [ThisBlockTextClass](_extractors_basic_thisblocktext_.thisblocktextclass.md)

↳  [TypeTextClass](_extractors_basic_typetext_.typetextclass.md)

↳  [CatClass](_extractors_fs_cat_.catclass.md)

↳  [ExecClass](_extractors_fs_exec_.execclass.md)

↳  [LsClass](_extractors_fs_ls_.lsclass.md)

↳  [ReadFilesClass](_extractors_fs_readfiles_.readfilesclass.md)

↳  [ExtractInterfaceClass](_extractors_source_extractinterface_.extractinterfaceclass.md)

↳  [AbstractRefactorExtractor](_extractors_source_abstractrefactorextractor_.abstractrefactorextractor.md)

↳  [NodeTypeClass](_extractors_source_nodetype_.nodetypeclass.md)

↳  [OverridesClass](_extractors_source_overrides_.overridesclass.md)

↳  [Ast](_extractors_source_printast_.ast.md)

↳  [ProjectFilesClass](_extractors_source_projectfiles_.projectfilesclass.md)

## Implements

* [ExtractorClass](../interfaces/_types_.extractorclass.md)

## Index

### Properties

* [defaultExtractorOptions](_extractors_abstractextractor_.abstractextractor.md#defaultextractoroptions)
* [freeArgumentNumber](_extractors_abstractextractor_.abstractextractor.md#freeargumentnumber)

### Methods

* [afterExtract](_extractors_abstractextractor_.abstractextractor.md#afterextract)
* [beforeExtract](_extractors_abstractextractor_.abstractextractor.md#beforeextract)
* [buildExtractorResult](_extractors_abstractextractor_.abstractextractor.md#buildextractorresult)
* [extract](_extractors_abstractextractor_.abstractextractor.md#extract)
* [getConfig](_extractors_abstractextractor_.abstractextractor.md#getconfig)
* [getOptionsFromFistArg](_extractors_abstractextractor_.abstractextractor.md#getoptionsfromfistarg)
* [getTarget](_extractors_abstractextractor_.abstractextractor.md#gettarget)
* [parseOptionValue](_extractors_abstractextractor_.abstractextractor.md#parseoptionvalue)

---

## Properties

<a id="defaultextractoroptions"></a>

### `<Protected>` defaultExtractorOptions

**● defaultExtractorOptions**: *[ExtractorOptions](../interfaces/_types_.extractoroptions.md)*

*Defined in [extractors/abstractExtractor.ts:8](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/0b69fa7/src/extractors/abstractExtractor.ts#L8)*

___
<a id="freeargumentnumber"></a>

### `<Protected>` freeArgumentNumber

**● freeArgumentNumber**: *`number`* = 0

*Defined in [extractors/abstractExtractor.ts:9](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/0b69fa7/src/extractors/abstractExtractor.ts#L9)*

___

## Methods

<a id="afterextract"></a>

###  afterExtract

▸ **afterExtract**(filePath: *`string`*, extractorName: *`string`*, options: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*): `void`

*Implementation of [ExtractorClass](../interfaces/_types_.extractorclass.md).[afterExtract](../interfaces/_types_.extractorclass.md#afterextract)*

*Defined in [extractors/abstractExtractor.ts:117](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/0b69fa7/src/extractors/abstractExtractor.ts#L117)*

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

*Defined in [extractors/abstractExtractor.ts:133](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/0b69fa7/src/extractors/abstractExtractor.ts#L133)*

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

▸ **buildExtractorResult**(n: *`CallExpression`*, output: *`string`*, getter: *[ExtractorGetter](../modules/_types_.md#extractorgetter)*, index: *`number`*, extractOptions: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*, extractorOptions?: *[ExtractorOptions](../interfaces/_types_.extractoroptions.md)*): [ExtractorResult](../interfaces/_types_.extractorresult.md)

*Defined in [extractors/abstractExtractor.ts:61](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/0b69fa7/src/extractors/abstractExtractor.ts#L61)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |
| output | `string` |
| getter | [ExtractorGetter](../modules/_types_.md#extractorgetter) |
| index | `number` |
| extractOptions | `Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)> |
| `Optional` extractorOptions | [ExtractorOptions](../interfaces/_types_.extractoroptions.md) |

**Returns:** [ExtractorResult](../interfaces/_types_.extractorresult.md)

___
<a id="extract"></a>

### `<Abstract>` extract

▸ **extract**(n: *`CallExpression`*, index: *`number`*, getter: *[ExtractorGetter](../modules/_types_.md#extractorgetter)*, options: *`Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*, variableAccessor: *[FileVariableAccessor](../modules/_types_.md#filevariableaccessor)*): [ExtractorResult](../interfaces/_types_.extractorresult.md)

*Implementation of [ExtractorClass](../interfaces/_types_.extractorclass.md).[extract](../interfaces/_types_.extractorclass.md#extract)*

*Defined in [extractors/abstractExtractor.ts:17](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/0b69fa7/src/extractors/abstractExtractor.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `CallExpression` |
| index | `number` |
| getter | [ExtractorGetter](../modules/_types_.md#extractorgetter) |
| options | `Required`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)> |
| variableAccessor | [FileVariableAccessor](../modules/_types_.md#filevariableaccessor) |

**Returns:** [ExtractorResult](../interfaces/_types_.extractorresult.md)

___
<a id="getconfig"></a>

###  getConfig

▸ **getConfig**(): `object`

*Implementation of [ExtractorClass](../interfaces/_types_.extractorclass.md).[getConfig](../interfaces/_types_.extractorclass.md#getconfig)*

*Defined in [extractors/abstractExtractor.ts:10](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/0b69fa7/src/extractors/abstractExtractor.ts#L10)*

**Returns:** `object`

___
<a id="getoptionsfromfistarg"></a>

### `<Protected>` getOptionsFromFistArg

▸ **getOptionsFromFistArg**<`T`>(n: *`CallExpression`*): `T` \| `undefined`

*Defined in [extractors/abstractExtractor.ts:32](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/0b69fa7/src/extractors/abstractExtractor.ts#L32)*

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

*Defined in [extractors/abstractExtractor.ts:97](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/0b69fa7/src/extractors/abstractExtractor.ts#L97)*

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

*Defined in [extractors/abstractExtractor.ts:51](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/0b69fa7/src/extractors/abstractExtractor.ts#L51)*

since options need to be parsed from a literal object Node, subclasses might need to override this method to parse their own options

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| value | `Node` \| `undefined` |

**Returns:** `any`

___

