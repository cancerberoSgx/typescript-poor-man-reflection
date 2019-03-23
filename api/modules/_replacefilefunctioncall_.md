[typescript-poor-man-reflection](../README.md) > ["replaceFileFunctionCall"](../modules/_replacefilefunctioncall_.md)

# External module: "replaceFileFunctionCall"

## Index

### Functions

* [replaceFileFunctionCall](_replacefilefunctioncall_.md#replacefilefunctioncall)

---

## Functions

<a id="replacefilefunctioncall"></a>

###  replaceFileFunctionCall

▸ **replaceFileFunctionCall**(sourceFile: *`SourceFile`*, options_?: *`Partial`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)>*): (`undefined` \| [Replacement](../interfaces/_types_.replacement.md))[]

*Defined in [replaceFileFunctionCall.ts:20](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8c7c887/src/replaceFileFunctionCall.ts#L20)*

JavaScript API to replace arguments of all function expression calls in given (ts-simple-ast SourceFile) file that match given options. See `ReplaceFunctionCallsOptions`.

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| sourceFile | `SourceFile` | - |
| `Default value` options_ | `Partial`<[ReplaceProjectFunctionCallOptions](../interfaces/_types_.replaceprojectfunctioncalloptions.md)> |  defaultOptions |

**Returns:** (`undefined` \| [Replacement](../interfaces/_types_.replacement.md))[]

___

