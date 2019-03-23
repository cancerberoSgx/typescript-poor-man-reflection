[typescript-poor-man-reflection](../README.md) > ["extractors/source/removeUnused"](../modules/_extractors_source_removeunused_.md)

# External module: "extractors/source/removeUnused"

## Index

### Classes

* [RemoveUnusedClass](../classes/_extractors_source_removeunused_.removeunusedclass.md)

### Interfaces

* [RemoveUnusedOptions](../interfaces/_extractors_source_removeunused_.removeunusedoptions.md)

### Functions

* [RemoveUnused](_extractors_source_removeunused_.md#removeunused)

---

## Functions

<a id="removeunused"></a>

### `<Const>` RemoveUnused

▸ **RemoveUnused**<`T`>(config: *[RemoveUnusedOptions](../interfaces/_extractors_source_removeunused_.removeunusedoptions.md)*, t?: *`any`*): `number`

*Defined in [extractors/source/removeUnused.ts:14](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/2245c2e/src/extractors/source/removeUnused.ts#L14)*

Will remove all unused variables, import names, etc, on given files. If no file is provided then it will call for the current file. Returns `undefined`.

```ts
RemoveUnused({path: 'src/** /*.ts*'})
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [RemoveUnusedOptions](../interfaces/_extractors_source_removeunused_.removeunusedoptions.md) |
| `Optional` t | `any` |

**Returns:** `number`

___

