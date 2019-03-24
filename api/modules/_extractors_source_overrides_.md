[typescript-poor-man-reflection](../README.md) > ["extractors/source/overrides"](../modules/_extractors_source_overrides_.md)

# External module: "extractors/source/overrides"

## Index

### Classes

* [OverridesClass](../classes/_extractors_source_overrides_.overridesclass.md)

### Interfaces

* [OverridesOptions](../interfaces/_extractors_source_overrides_.overridesoptions.md)

### Functions

* [Overrides](_extractors_source_overrides_.md#overrides)

---

## Functions

<a id="overrides"></a>

###  Overrides

▸ **Overrides**<`T`>(t?: *[T]()*, pass?: *`undefined` \| `true`*, data?: *[T]()*): `T`

*Defined in [extractors/source/overrides.ts:36](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/be10635/src/extractors/source/overrides.ts#L36)*

TODO: only works for classes, not for interfaces signatures - there we need a type.

TODO: verify super member signature matches this one.

Will produce a type error in case the method or property doesn't override a super class or interface member.

```ts
class C {
prop1:string\|undefined = Overrides()
method1() {
Overrides()
}
}
```

In case property or method dont override super class or interface method the following will be the result:

```ts
class C {
prop1:string\|undefined = Overrides(undefined, false)
method1() {
Overrides(undefined, false)
}
}
```

which will generate a type error in the second argument

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` t | [T]() |
| `Optional` pass | `undefined` \| `true` |
| `Optional` data | [T]() |

**Returns:** `T`

___

