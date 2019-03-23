[typescript-poor-man-reflection](../README.md) > ["extractors/source/organizeImports"](../modules/_extractors_source_organizeimports_.md)

# External module: "extractors/source/organizeImports"

## Index

### Classes

* [OrganizeImportsClass](../classes/_extractors_source_organizeimports_.organizeimportsclass.md)

### Interfaces

* [OrganizeImportsOptions](../interfaces/_extractors_source_organizeimports_.organizeimportsoptions.md)

### Functions

* [OrganizeImports](_extractors_source_organizeimports_.md#organizeimports)

---

## Functions

<a id="organizeimports"></a>

### `<Const>` OrganizeImports

▸ **OrganizeImports**<`T`>(config: *[OrganizeImportsOptions](../interfaces/_extractors_source_organizeimports_.organizeimportsoptions.md)*, t?: *`any`*): `number`

*Defined in [extractors/source/organizeImports.ts:24](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b99ab34/src/extractors/source/organizeImports.ts#L24)*

Will call organize imports on given files. If no file is provided then it will call for the current file. Returns : nothing.

```ts
OrganizeImports({path: 'src/** /*.ts*'})
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [OrganizeImportsOptions](../interfaces/_extractors_source_organizeimports_.organizeimportsoptions.md) |
| `Optional` t | `any` |

**Returns:** `number`

___

