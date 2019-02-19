[get-type-text](../README.md) > ["types"](../modules/_types_.md) > [Config](../interfaces/_types_.config.md)

# Interface: Config

Options for the command line tool, inherit from core options and add some extra ones. the default matching function call expressions will be those who have an import like `import TypeText from 'get-type-text'` and a function call using that name `TypeText`. But you can make this configurable and reuse the tool in your own projects with other names.

## Hierarchy

 [ReplaceFunctionCallsOptions](_types_.replacefunctioncallsoptions.md)

**↳ Config**

## Index

### Properties

* [cleanArguments](_types_.config.md#cleanarguments)
* [debug](_types_.config.md#debug)
* [functionName](_types_.config.md#functionname)
* [moduleSpecifier](_types_.config.md#modulespecifier)
* [tsConfigFilePath](_types_.config.md#tsconfigfilepath)

---

## Properties

<a id="cleanarguments"></a>

### `<Optional>` cleanArguments

**● cleanArguments**: *`undefined` \| `false` \| `true`*

*Inherited from [ReplaceFunctionCallsOptions](_types_.replacefunctioncallsoptions.md).[cleanArguments](_types_.replacefunctioncallsoptions.md#cleanarguments)*

*Defined in [types.ts:38](https://github.com/cancerberoSgx/tsd-check-runtime/blob/b4cf5d9/get-type-text/src/types.ts#L38)*

if true the tool will clean all arguments in matched function call expressions

___
<a id="debug"></a>

### `<Optional>` debug

**● debug**: *`undefined` \| `false` \| `true`*

*Defined in [types.ts:21](https://github.com/cancerberoSgx/tsd-check-runtime/blob/b4cf5d9/get-type-text/src/types.ts#L21)*

Prints details in stdout, default is false

___
<a id="functionname"></a>

### `<Optional>` functionName

**● functionName**: *`undefined` \| `string`*

*Inherited from [ReplaceFunctionCallsOptions](_types_.replacefunctioncallsoptions.md).[functionName](_types_.replacefunctioncallsoptions.md#functionname)*

*Defined in [types.ts:36](https://github.com/cancerberoSgx/tsd-check-runtime/blob/b4cf5d9/get-type-text/src/types.ts#L36)*

The name of the function in the function call expression

___
<a id="modulespecifier"></a>

### `<Optional>` moduleSpecifier

**● moduleSpecifier**: *`undefined` \| `string`*

*Inherited from [ReplaceFunctionCallsOptions](_types_.replacefunctioncallsoptions.md).[moduleSpecifier](_types_.replacefunctioncallsoptions.md#modulespecifier)*

*Defined in [types.ts:34](https://github.com/cancerberoSgx/tsd-check-runtime/blob/b4cf5d9/get-type-text/src/types.ts#L34)*

Default value: `get-type-text`. Name of the import module specifier from which the target function in the function call expression needs to be imported in order to perform the arguments modification.

___
<a id="tsconfigfilepath"></a>

### `<Optional>` tsConfigFilePath

**● tsConfigFilePath**: *`undefined` \| `string`*

*Defined in [types.ts:18](https://github.com/cancerberoSgx/tsd-check-runtime/blob/b4cf5d9/get-type-text/src/types.ts#L18)*

Default value `'./tsconfig.json'`. The target `tsconfig.json` file from which the project is loaded. `get-type-text` will load and parse the project with this identical configuration. All the files referenced by this configuration will be examined, with the exception of .d.ts and external library files.

___

