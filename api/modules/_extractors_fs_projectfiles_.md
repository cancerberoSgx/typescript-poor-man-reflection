[typescript-poor-man-reflection](../README.md) > ["extractors/fs/projectFiles"](../modules/_extractors_fs_projectfiles_.md)

# External module: "extractors/fs/projectFiles"

## Index

### Classes

* [ProjectFilesClass](../classes/_extractors_fs_projectfiles_.projectfilesclass.md)

### Interfaces

* [ProjectFilesOptions](../interfaces/_extractors_fs_projectfiles_.projectfilesoptions.md)

### Functions

* [ProjectFiles](_extractors_fs_projectfiles_.md#projectfiles)

---

## Functions

<a id="projectfiles"></a>

### `<Const>` ProjectFiles

▸ **ProjectFiles**<`T`>(config: *[ProjectFilesOptions](../interfaces/_extractors_fs_projectfiles_.projectfilesoptions.md)*, t?: *`any`*): `string`[]

*Defined in [extractors/fs/projectFiles.ts:13](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8e8f86f/src/extractors/fs/projectFiles.ts#L13)*

Return the list of this project file names. Usage:

```ts
const thisProjectFiles = ProjectFiles()
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [ProjectFilesOptions](../interfaces/_extractors_fs_projectfiles_.projectfilesoptions.md) |
| `Optional` t | `any` |

**Returns:** `string`[]

___

