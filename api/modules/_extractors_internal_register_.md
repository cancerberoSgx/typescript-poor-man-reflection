[typescript-poor-man-reflection](../README.md) > ["extractors/internal/register"](../modules/_extractors_internal_register_.md)

# External module: "extractors/internal/register"

## Index

### Classes

* [RegisterClass](../classes/_extractors_internal_register_.registerclass.md)

### Interfaces

* [RegisterOptions](../interfaces/_extractors_internal_register_.registeroptions.md)

### Functions

* [Register](_extractors_internal_register_.md#register)

---

## Functions

<a id="register"></a>

###  Register

▸ **Register**<`T`>(config: *[RegisterOptions](../interfaces/_extractors_internal_register_.registeroptions.md)*, t?: *[T]()*): `T`

*Defined in [extractors/internal/register.ts:47](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/24513f8/src/extractors/internal/register.ts#L47)*

```ts
class NewExtractorClass extends AbstractExtractor {
protected freeArgumentNumber = 1
extract(...[c, i, g, options, v]: Parameters<ExtractorFn>) {
const config = this.getOptionsFromFistArg(c) \|\| {}
return this.buildExtractorResult(c, '"hello"', g, i, options, config)
}
}
function NewExtractor<T = any>:(config: NewExtractorOptions, r?: T): T {
return r!
}
Register({
name: 'NewExtractor',
extractor: NewExtractorClass,
fn: NewExtractor
})
// and from here I can use it:
NewExtractor()
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [RegisterOptions](../interfaces/_extractors_internal_register_.registeroptions.md) |
| `Optional` t | [T]() |

**Returns:** `T`

___

