[typescript-poor-man-reflection](../README.md) > ["replaceFileFunctionCall"](../modules/_replacefilefunctioncall_.md)

# External module: "replaceFileFunctionCall"

## Index

### Functions

* [extractCallExpressionsFrom](_replacefilefunctioncall_.md#extractcallexpressionsfrom)
* [replaceFileFunctionCall](_replacefilefunctioncall_.md#replacefilefunctioncall)

---

## Functions

<a id="extractcallexpressionsfrom"></a>

###  extractCallExpressionsFrom

▸ **extractCallExpressionsFrom**(sourceFile: *`SourceFile`*, moduleSpecifier: *`string`*, names: *`string`[]*): `CallExpression`<`CallExpression`>[]

*Defined in [replaceFileFunctionCall.ts:70](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/0ebe280/src/replaceFileFunctionCall.ts#L70)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sourceFile | `SourceFile` |
| moduleSpecifier | `string` |
| names | `string`[] |

**Returns:** `CallExpression`<`CallExpression`>[]

___
<a id="replacefilefunctioncall"></a>

###  replaceFileFunctionCall

▸ **replaceFileFunctionCall**(sourceFile: *`SourceFile`*, __namedParameters?: *`object`*): (`undefined` \| [Replacement](../interfaces/_types_.replacement.md))[]

*Defined in [replaceFileFunctionCall.ts:10](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/0ebe280/src/replaceFileFunctionCall.ts#L10)*

JavaScript API to replace arguments of all function expression calls in given (ts-simple-ast SourceFile) file that match given options. See `ReplaceFunctionCallsOptions`.

**Parameters:**

**sourceFile: `SourceFile`**

**`Default value` __namedParameters: `object`**

| Name | Type | Default value |
| ------ | ------ | ------ |
| clean | `boolean` | false |
| extractorPrependVariableName | `string` | &quot;__extractor_prepend__&quot; |
| extracts | `object` |  defaultExtractors |
| moduleSpecifier | `string` | &quot;typescript-poor-man-reflection&quot; |

**Returns:** (`undefined` \| [Replacement](../interfaces/_types_.replacement.md))[]

___

