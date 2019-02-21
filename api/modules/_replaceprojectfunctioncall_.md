[typescript-poor-man-reflection](../README.md) > ["replaceProjectFunctionCall"](../modules/_replaceprojectfunctioncall_.md)

# External module: "replaceProjectFunctionCall"

## Index

### Functions

* [includeFile](_replaceprojectfunctioncall_.md#includefile)
* [replaceProjectFunctionCall](_replaceprojectfunctioncall_.md#replaceprojectfunctioncall)

### Object literals

* [defaultOptions](_replaceprojectfunctioncall_.md#defaultoptions)

---

## Functions

<a id="includefile"></a>

###  includeFile

▸ **includeFile**(f: *`SourceFile`*, config: *`object`*): `boolean`

*Defined in [replaceProjectFunctionCall.ts:11](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/replaceProjectFunctionCall.ts#L11)*

**Parameters:**

**f: `SourceFile`**

**config: `object`**

| Name | Type |
| ------ | ------ |
| `Optional` extractorDataFolderFileName | `undefined` \| `string` |
| `Optional` filePattern | `undefined` \| `string` |

**Returns:** `boolean`

___
<a id="replaceprojectfunctioncall"></a>

###  replaceProjectFunctionCall

▸ **replaceProjectFunctionCall**(tsConfigFilePath: *`string`*, options: *[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)*, replacements?: *(`undefined` \| [Replacement](../interfaces/_types_.replacement.md))[]*): (`undefined` \| [Replacement](../interfaces/_types_.replacement.md))[]

*Defined in [replaceProjectFunctionCall.ts:46](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/replaceProjectFunctionCall.ts#L46)*

Executes the tool on a given TypeScript project in filesystem. See `Config` documentation.

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| tsConfigFilePath | `string` | - |
| options | [ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md) | - |
| `Default value` replacements | (`undefined` \| [Replacement](../interfaces/_types_.replacement.md))[] |  [] |

**Returns:** (`undefined` \| [Replacement](../interfaces/_types_.replacement.md))[]

___

## Object literals

<a id="defaultoptions"></a>

### `<Const>` defaultOptions

**defaultOptions**: *`object`*

*Defined in [replaceProjectFunctionCall.ts:29](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/replaceProjectFunctionCall.ts#L29)*

<a id="defaultoptions.clean"></a>

####  clean

**● clean**: *`false`* = false

*Defined in [replaceProjectFunctionCall.ts:31](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/replaceProjectFunctionCall.ts#L31)*

___
<a id="defaultoptions.debug"></a>

####  debug

**● debug**: *`false`* = false

*Defined in [replaceProjectFunctionCall.ts:37](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/replaceProjectFunctionCall.ts#L37)*

___
<a id="defaultoptions.extraoptionshelp"></a>

####  extraOptionsHelp

**● extraOptionsHelp**: *`object`*

*Defined in [replaceProjectFunctionCall.ts:38](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/replaceProjectFunctionCall.ts#L38)*

#### Type declaration

___
<a id="defaultoptions.extractordatafolderfilename"></a>

####  extractorDataFolderFileName

**● extractorDataFolderFileName**: *`string`* = "__poor_man_reflection__"

*Defined in [replaceProjectFunctionCall.ts:35](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/replaceProjectFunctionCall.ts#L35)*

___
<a id="defaultoptions.extractordatamode"></a>

####  extractorDataMode

**● extractorDataMode**: *"prependVariable"* = "prependVariable"

*Defined in [replaceProjectFunctionCall.ts:34](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/replaceProjectFunctionCall.ts#L34)*

___
<a id="defaultoptions.extractordatavariablename"></a>

####  extractorDataVariableName

**● extractorDataVariableName**: *`string`* = "__extractor_prepend__"

*Defined in [replaceProjectFunctionCall.ts:33](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/replaceProjectFunctionCall.ts#L33)*

___
<a id="defaultoptions.extracts"></a>

####  extracts

**● extracts**: *`object`* =  defaultExtractors

*Defined in [replaceProjectFunctionCall.ts:32](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/replaceProjectFunctionCall.ts#L32)*

#### Type declaration

[k: `string`]: [Extractor](_types_.md#extractor)

___
<a id="defaultoptions.filepattern"></a>

####  filePattern

**● filePattern**: *`string`* = ""

*Defined in [replaceProjectFunctionCall.ts:36](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/replaceProjectFunctionCall.ts#L36)*

___
<a id="defaultoptions.help"></a>

####  help

**● help**: *`false`* = false

*Defined in [replaceProjectFunctionCall.ts:39](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/replaceProjectFunctionCall.ts#L39)*

___
<a id="defaultoptions.modulespecifier"></a>

####  moduleSpecifier

**● moduleSpecifier**: *`string`* = "typescript-poor-man-reflection"

*Defined in [replaceProjectFunctionCall.ts:30](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/replaceProjectFunctionCall.ts#L30)*

___
<a id="defaultoptions.out"></a>

####  out

**● out**: *`string`* = ""

*Defined in [replaceProjectFunctionCall.ts:40](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/replaceProjectFunctionCall.ts#L40)*

___
<a id="defaultoptions.tsconfigfilepath"></a>

####  tsConfigFilePath

**● tsConfigFilePath**: *`string`* = "./tsconfig.json"

*Defined in [replaceProjectFunctionCall.ts:41](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/47e2c2e/src/replaceProjectFunctionCall.ts#L41)*

___

___

