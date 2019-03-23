[typescript-poor-man-reflection](../README.md) > ["extractors/fs/cat"](../modules/_extractors_fs_cat_.md)

# External module: "extractors/fs/cat"

## Index

### Classes

* [CatClass](../classes/_extractors_fs_cat_.catclass.md)

### Interfaces

* [LsOptions](../interfaces/_extractors_fs_cat_.lsoptions.md)

### Functions

* [Cat](_extractors_fs_cat_.md#cat)

---

## Functions

<a id="cat"></a>

### `<Const>` Cat

▸ **Cat**<`T`>(config: *[LsOptions](../interfaces/_extractors_fs_cat_.lsoptions.md)*, t?: *`any`*): `string`

*Defined in [extractors/fs/cat.ts:15](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/97bee93/src/extractors/fs/cat.ts#L15)*

Returns given file contents as string. Important: you won't be able to call cat() on a loop since this runs at compile time. If you need to read multiple files, use `ReadFiles()` instead. Usage:

```ts
const content = Cat({path: './package.json'})
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [LsOptions](../interfaces/_extractors_fs_cat_.lsoptions.md) |
| `Optional` t | `any` |

**Returns:** `string`

___

