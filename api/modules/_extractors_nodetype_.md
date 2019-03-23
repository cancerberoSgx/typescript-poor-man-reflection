[typescript-poor-man-reflection](../README.md) > ["extractors/nodeType"](../modules/_extractors_nodetype_.md)

# External module: "extractors/nodeType"

## Index

### Classes

* [NodeTypeClass](../classes/_extractors_nodetype_.nodetypeclass.md)

### Interfaces

* [NodeTypeOptions](../interfaces/_extractors_nodetype_.nodetypeoptions.md)

### Type aliases

* [InferenceNode](_extractors_nodetype_.md#inferencenode)

### Functions

* [NodeType](_extractors_nodetype_.md#nodetype)

---

## Type aliases

<a id="inferencenode"></a>

###  InferenceNode

**Ƭ InferenceNode**: *"apparent" \| "none"*

*Defined in [extractors/nodeType.ts:30](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/56d0d74/src/extractors/nodeType.ts#L30)*

___

## Functions

<a id="nodetype"></a>

### `<Const>` NodeType

▸ **NodeType**<`T`>(config: *[NodeTypeOptions](../interfaces/_extractors_nodetype_.nodetypeoptions.md)*, t?: *`any`*): `any`

*Defined in [extractors/nodeType.ts:22](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/56d0d74/src/extractors/nodeType.ts#L22)*

Usage:

```ts
const aNode = unknownAPI();
const type1 = NodeType({target: aNode})
const type2 = NodeType<typeof unknownAPI>({})
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [NodeTypeOptions](../interfaces/_extractors_nodetype_.nodetypeoptions.md) |
| `Optional` t | `any` |

**Returns:** `any`

___

