[typescript-poor-man-reflection](../README.md) > ["extractors/basic/nodeText"](../modules/_extractors_basic_nodetext_.md)

# External module: "extractors/basic/nodeText"

## Index

### Classes

* [NodeTextClass](../classes/_extractors_basic_nodetext_.nodetextclass.md)

### Functions

* [NodeText](_extractors_basic_nodetext_.md#nodetext)

---

## Functions

<a id="nodetext"></a>

###  NodeText

▸ **NodeText**<`T`>(t?: *`undefined` \| `string`*): `string`

*Defined in [extractors/basic/nodeText.ts:14](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/1ad456b/src/extractors/basic/nodeText.ts#L14)*

Returns the text of given node. It could be a valued node (in which case the node reference is passed as normal argument) or a type node (in which case needs to be passes as type argument). Example:

```
const text1 = NodeText(aNode)
const text2 = NodeText<Interface2>()
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` t | `undefined` \| `string` |

**Returns:** `string`

___

