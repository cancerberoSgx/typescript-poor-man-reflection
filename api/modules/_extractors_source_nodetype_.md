[typescript-poor-man-reflection](../README.md) > ["extractors/source/nodeType"](../modules/_extractors_source_nodetype_.md)

# External module: "extractors/source/nodeType"

## Index

### Classes

* [NodeTypeClass](../classes/_extractors_source_nodetype_.nodetypeclass.md)

### Interfaces

* [NodeTypeOptions](../interfaces/_extractors_source_nodetype_.nodetypeoptions.md)

### Type aliases

* [InferenceNode](_extractors_source_nodetype_.md#inferencenode)

### Functions

* [NodeType](_extractors_source_nodetype_.md#nodetype)

---

## Type aliases

<a id="inferencenode"></a>

###  InferenceNode

**Ƭ InferenceNode**: *"apparent" \| "none" \| "contextual"*

*Defined in [extractors/source/nodeType.ts:39](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/e3a07d8/src/extractors/source/nodeType.ts#L39)*

___

## Functions

<a id="nodetype"></a>

### `<Const>` NodeType

▸ **NodeType**<`T`>(config: *[NodeTypeOptions](../interfaces/_extractors_source_nodetype_.nodetypeoptions.md)*, t?: *`any`*): `any`

*Defined in [extractors/source/nodeType.ts:22](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/e3a07d8/src/extractors/source/nodeType.ts#L22)*

Usage:

```ts
const aNode = unknownAPI();
const type1 = NodeType({target: aNode})
const type2 = NodeType<typeof unknownAPI>({inferenceMode: 'contextual'})
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [NodeTypeOptions](../interfaces/_extractors_source_nodetype_.nodetypeoptions.md) |
| `Optional` t | `any` |

**Returns:** `any`

___

