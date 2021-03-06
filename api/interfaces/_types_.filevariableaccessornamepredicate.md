[typescript-poor-man-reflection](../README.md) > ["types"](../modules/_types_.md) > [FileVariableAccessorNamePredicate](../interfaces/_types_.filevariableaccessornamepredicate.md)

# Interface: FileVariableAccessorNamePredicate

this is the predicate to look up for a variable. If it's a string then match a variable with that name (and also given index).

In case we need a predicate function, it can passed as a string that will be printed at runtime. We cannot pass the a normal function since it will run in another context (runtime). Also,in this case, the name property is mandatory.

## Hierarchy

**FileVariableAccessorNamePredicate**

## Index

### Properties

* [functionPredicate](_types_.filevariableaccessornamepredicate.md#functionpredicate)
* [name](_types_.filevariableaccessornamepredicate.md#name)

---

## Properties

<a id="functionpredicate"></a>

### `<Optional>` functionPredicate

**● functionPredicate**: *`undefined` \| `string`*

*Defined in [types.ts:315](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L315)*

if we need a predicate function, extractors will need to pass it as string that will be printed at runtime, since at compile time we cannot be dynamic.

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Defined in [types.ts:312](https://github.com/cancerberosgx/typescript-poor-man-reflection/blob/ab533ef/src/types.ts#L312)*

___

