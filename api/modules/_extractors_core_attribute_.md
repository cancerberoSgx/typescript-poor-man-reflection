[typescript-poor-man-reflection](../README.md) > ["extractors/core/attribute"](../modules/_extractors_core_attribute_.md)

# External module: "extractors/core/attribute"

## Index

### Classes

* [AttributeClass](../classes/_extractors_core_attribute_.attributeclass.md)

### Interfaces

* [AttributeOptions](../interfaces/_extractors_core_attribute_.attributeoptions.md)
* [CompileTimeData](../interfaces/_extractors_core_attribute_.compiletimedata.md)

### Functions

* [Attribute](_extractors_core_attribute_.md#attribute)

---

## Functions

<a id="attribute"></a>

###  Attribute

▸ **Attribute**<`T`>(config: *[AttributeOptions](../interfaces/_extractors_core_attribute_.attributeoptions.md)*, t?: *`any`*): `T`

*Defined in [extractors/core/attribute.ts:36](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/34423be/src/extractors/core/attribute.ts#L36)*

Node/Types attributes like DOM's. Attributes can or cannot be associated to a node, and if they are not they just act as normal variables.

For attributes bound to nodes&types, the setter call must occur BEFORE the GETTER call (while the source file is being processed.). TODO: can we solve this using afterExtract()?

```ts
// setting a type or node's attribute value
Attribute<SomeInterface>({name: 'id', value: 'org.foo.Super'})
Attribute({target: anImpl1, name: 'class', value: 'logger'})
Attribute({target: aNode, name: 'otherNode', value: aFunctionDeclaration})

// getting (previously set) attribute values
const v = Attribute({name: 'id'})
console.log(thisFileVar1==='org.foo.Super')

// if target is not passed at all the the variable won't be bound to any node so it can be retrieved without passing a target dom reference (like normal variables)
Attribute({name: 'thisFileVar1', value: (n:number)=>Math.PI*n})
const thisFileVar1 = Attribute({name: 'thisFileVar1'})
console.log(thisFileVar1(8))
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [AttributeOptions](../interfaces/_extractors_core_attribute_.attributeoptions.md) |
| `Optional` t | `any` |

**Returns:** `T`

___

