[typescript-poor-man-reflection](../README.md) > ["extractors/source/extractInterface"](../modules/_extractors_source_extractinterface_.md)

# External module: "extractors/source/extractInterface"

## Index

### Classes

* [ExtractInterfaceClass](../classes/_extractors_source_extractinterface_.extractinterfaceclass.md)

### Interfaces

* [ExtractInterfaceOptions](../interfaces/_extractors_source_extractinterface_.extractinterfaceoptions.md)

### Functions

* [ExtractInterface](_extractors_source_extractinterface_.md#extractinterface)
* [extractInterface](_extractors_source_extractinterface_.md#extractinterface-1)

---

## Functions

<a id="extractinterface"></a>

### `<Const>` ExtractInterface

▸ **ExtractInterface**<`T`>(config: *[ExtractInterfaceOptions](../interfaces/_extractors_source_extractinterface_.extractinterfaceoptions.md)*, t?: *`any`*): `any`

*Defined in [extractors/source/extractInterface.ts:49](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b7b4f65/src/extractors/source/extractInterface.ts#L49)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [ExtractInterfaceOptions](../interfaces/_extractors_source_extractinterface_.extractinterfaceoptions.md) |
| `Optional` t | `any` |

**Returns:** `any`

___
<a id="extractinterface-1"></a>

###  extractInterface

▸ **extractInterface**(node: *`ClassDeclaration`*, project: *`Project`*, dest?: *`SourceFile`*, interfaceName?: *`string`*, removeDocs?: *`boolean`*): `void`

*Defined in [extractors/source/extractInterface.ts:96](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b7b4f65/src/extractors/source/extractInterface.ts#L96)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| node | `ClassDeclaration` | - |
| project | `Project` | - |
| `Default value` dest | `SourceFile` |  node.getSourceFile() |
| `Default value` interfaceName | `string` |  node.getName() ? &#x27;I&#x27; + node.getName() : &#x27;IAnonymousClass&#x27; |
| `Default value` removeDocs | `boolean` | false |

**Returns:** `void`

___

