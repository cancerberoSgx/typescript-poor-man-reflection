[typescript-poor-man-reflection](../README.md) > ["extractors/fs/readFiles"](../modules/_extractors_fs_readfiles_.md)

# External module: "extractors/fs/readFiles"

## Index

### Classes

* [ReadFilesClass](../classes/_extractors_fs_readfiles_.readfilesclass.md)

### Interfaces

* [ReadFilesOptions](../interfaces/_extractors_fs_readfiles_.readfilesoptions.md)

### Functions

* [ReadFiles](_extractors_fs_readfiles_.md#readfiles)

---

## Functions

<a id="readfiles"></a>

### `<Const>` ReadFiles

▸ **ReadFiles**<`T`>(config: *[ReadFilesOptions](../interfaces/_extractors_fs_readfiles_.readfilesoptions.md)*, t?: *`any`*): (`string` \| `Stats`)[]

*Defined in [extractors/fs/readFiles.ts:23](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/4ce0fbf/src/extractors/fs/readFiles.ts#L23)*

Returns an array that contain given file names and content as string. Useful to embed files in the source code as string. Usage:

```ts
export files = ReadFiles({path: './src/examples/example*.ts'})
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [ReadFilesOptions](../interfaces/_extractors_fs_readfiles_.readfilesoptions.md) |
| `Optional` t | `any` |

**Returns:** (`string` \| `Stats`)[]

___

