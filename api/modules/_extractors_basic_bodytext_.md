[typescript-poor-man-reflection](../README.md) > ["extractors/basic/bodyText"](../modules/_extractors_basic_bodytext_.md)

# External module: "extractors/basic/bodyText"

## Index

### Classes

* [BodyTextClass](../classes/_extractors_basic_bodytext_.bodytextclass.md)

### Functions

* [BodyText](_extractors_basic_bodytext_.md#bodytext)

---

## Functions

<a id="bodytext"></a>

###  BodyText

▸ **BodyText**<`T`>(t?: *`undefined` \| `string`*): `string`

*Defined in [extractors/basic/bodyText.ts:13](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b7b4f65/src/extractors/basic/bodyText.ts#L13)*

Returns the text of given node's body. Example:

```ts
const text1 = BodyText<>(aFunction)
const text2 = BodyText<typeof someFunction>()
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` t | `undefined` \| `string` |

**Returns:** `string`

___

