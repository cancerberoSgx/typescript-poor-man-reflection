[typescript-poor-man-reflection](../README.md) > ["types"](../modules/_types_.md) > [FileVariableAccessor](../interfaces/_types_.filevariableaccessor.md)

# Interface: FileVariableAccessor

Setter / getter for variables that are common between same function calls of same file or even different function files (to save data file space). This are actually two getters:

*   `compileTime`: one that can be called at compile time just to read the current file's processed variables (dont have impact on the resulting code)
    
*   `runtime` getter/setter variables stored in the source code itself . The getter generates stringified expressinog and will be called at runtime by user code.
    

Again,

Both accessors access totally independent variable sets. `compileTime` provides context to extractors implementations about current defined variables in file being processed and the `runtime` will save setted variables in user's code or will generate the string expressions that will be returned when runtime code calls the extractor function

TODO: divide in two different functions.

## Hierarchy

**FileVariableAccessor**

## Index

### Methods

* [compileTime](_types_.filevariableaccessor.md#compiletime)
* [runtime](_types_.filevariableaccessor.md#runtime)

---

## Methods

<a id="compiletime"></a>

###  compileTime

▸ **compileTime**<`T`>(val?: *[FileVariableDefinition](_types_.filevariabledefinition.md) & `object`*): [FileVariablesCompileTimeDefinition](../modules/_types_.md#filevariablescompiletimedefinition)<`T`> \| `undefined`

*Defined in [types.ts:281](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3c8d91b/src/types.ts#L281)*

gets/sets current collected file variables of current source file. This is an auxiliary tool so extractors can obtain some context from the current file being processed but it doesn't have any impact on code at runtime. For the later they will need to call ti with currentCompileTimeVariables turned off.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` val | [FileVariableDefinition](_types_.filevariabledefinition.md) & `object` |

**Returns:** [FileVariablesCompileTimeDefinition](../modules/_types_.md#filevariablescompiletimedefinition)<`T`> \| `undefined`

___
<a id="runtime"></a>

###  runtime

▸ **runtime**(name: *`string` \| [FileVariableAccessorNamePredicate](_types_.filevariableaccessornamepredicate.md)*, index: *`number`*, value?: *`undefined` \| `string`*): `string` \| `undefined`

*Defined in [types.ts:274](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3c8d91b/src/types.ts#L274)*

this one build the expression written on the code. Needs to be stringified.

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` \| [FileVariableAccessorNamePredicate](_types_.filevariableaccessornamepredicate.md) |
| index | `number` |
| `Optional` value | `undefined` \| `string` |

**Returns:** `string` \| `undefined`

___

