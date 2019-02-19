[get-type-text](../README.md) > ["types"](../modules/_types_.md) > [ReplaceFunctionCallsOptions](../interfaces/_types_.replacefunctioncallsoptions.md)

# Interface: ReplaceFunctionCallsOptions

Options accepted by the low level call `replaceFunctionCall`. They describe the requirements of the function call expressions in order to be changed. get-type-text will iterate every file in the project and if any function call expression satisfies this options then its attributes it will be changed.

## Hierarchy

**ReplaceFunctionCallsOptions**

↳  [Config](_types_.config.md)

## Index

### Properties

* [cleanArguments](_types_.replacefunctioncallsoptions.md#cleanarguments)
* [functionName](_types_.replacefunctioncallsoptions.md#functionname)
* [moduleSpecifier](_types_.replacefunctioncallsoptions.md#modulespecifier)

---

## Properties

<a id="cleanarguments"></a>

### `<Optional>` cleanArguments

**● cleanArguments**: *`undefined` \| `false` \| `true`*

*Defined in [types.ts:38](https://github.com/cancerberoSgx/tsd-check-runtime/blob/b4cf5d9/get-type-text/src/types.ts#L38)*

if true the tool will clean all arguments in matched function call expressions

___
<a id="functionname"></a>

### `<Optional>` functionName

**● functionName**: *`undefined` \| `string`*

*Defined in [types.ts:36](https://github.com/cancerberoSgx/tsd-check-runtime/blob/b4cf5d9/get-type-text/src/types.ts#L36)*

The name of the function in the function call expression

___
<a id="modulespecifier"></a>

### `<Optional>` moduleSpecifier

**● moduleSpecifier**: *`undefined` \| `string`*

*Defined in [types.ts:34](https://github.com/cancerberoSgx/tsd-check-runtime/blob/b4cf5d9/get-type-text/src/types.ts#L34)*

Default value: `get-type-text`. Name of the import module specifier from which the target function in the function call expression needs to be imported in order to perform the arguments modification.

___

