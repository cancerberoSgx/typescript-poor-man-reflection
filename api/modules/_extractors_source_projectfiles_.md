[typescript-poor-man-reflection](../README.md) > ["extractors/source/projectFiles"](../modules/_extractors_source_projectfiles_.md)

# External module: "extractors/source/projectFiles"

## Index

### Classes

* [ProjectFilesClass](../classes/_extractors_source_projectfiles_.projectfilesclass.md)

### Interfaces

* [ProjectFilesOptions](../interfaces/_extractors_source_projectfiles_.projectfilesoptions.md)

### Functions

* [ProjectFiles](_extractors_source_projectfiles_.md#projectfiles)

---

## Functions

<a id="projectfiles"></a>

### `<Const>` ProjectFiles

▸ **ProjectFiles**<`T`>(config: *[ProjectFilesOptions](../interfaces/_extractors_source_projectfiles_.projectfilesoptions.md)*, t?: *`any`*): `string`[]

*Defined in [extractors/source/projectFiles.ts:19](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b99ab34/src/extractors/source/projectFiles.ts#L19)*

Return the list of this project file names. Usage:

```ts
const thisProjectFiles = ProjectFiles()
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [ProjectFilesOptions](../interfaces/_extractors_source_projectfiles_.projectfilesoptions.md) |
| `Optional` t | `any` |

**Returns:** `string`[]

___

