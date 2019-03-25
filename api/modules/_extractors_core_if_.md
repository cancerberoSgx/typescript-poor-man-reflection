[typescript-poor-man-reflection](../README.md) > ["extractors/core/if"](../modules/_extractors_core_if_.md)

# External module: "extractors/core/if"

## Index

### Classes

* [IfClass](../classes/_extractors_core_if_.ifclass.md)

### Interfaces

* [IfOptions](../interfaces/_extractors_core_if_.ifoptions.md)
* [IfOptionsAst](../interfaces/_extractors_core_if_.ifoptionsast.md)

### Functions

* [If](_extractors_core_if_.md#if)

---

## Functions

<a id="if"></a>

### `<Const>` If

▸ **If**<`T`>(config: *[IfOptions](../interfaces/_extractors_core_if_.ifoptions.md)*, t?: *`any`*): (`string` \| `Stats`)[]

*Defined in [extractors/core/if.ts:28](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/3c8d91b/src/extractors/core/if.ts#L28)*

Returns one of the two values given according to given condition. Basic tool for dependency injection.

```ts
const logger = If({
condition: () => process.env.NODE_ENV==='production',
then: () => new LightLogger(),
else: () => new DevLogger()
})
```

Which could be transformed in something like:

```ts
const logger = If({
condition: () => process.env.NODE_ENV==='production',
then: () => new LightLogger(),
else: () => new DevLogger()
}, () => new DevLogger())
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [IfOptions](../interfaces/_extractors_core_if_.ifoptions.md) |
| `Optional` t | `any` |

**Returns:** (`string` \| `Stats`)[]

___

