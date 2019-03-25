[typescript-poor-man-reflection](../README.md) > ["extractors/core/register"](../modules/_extractors_core_register_.md)

# External module: "extractors/core/register"

## Index

### Classes

* [RegisterClass](../classes/_extractors_core_register_.registerclass.md)

### Interfaces

* [RegisterOptions](../interfaces/_extractors_core_register_.registeroptions.md)

### Functions

* [Register](_extractors_core_register_.md#register)

---

## Functions

<a id="register"></a>

###  Register

▸ **Register**<`T`>(config: *[RegisterOptions](../interfaces/_extractors_core_register_.registeroptions.md)*, t?: *[T]()*): `T`

*Defined in [extractors/core/register.ts:36](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/ddc8b16/src/extractors/core/register.ts#L36)*

`` ` ``ts import {AbstractExtractor, ExtractorFn, Register } from '..'

interface NewExtractorOptions { name?: string }

class NewExtractorClass extends AbstractExtractor { protected freeArgumentNumber = 1 extract(...\[c, i, g, options, v\]: Parameters) { const config = this.getOptionsFromFistArg(c) \|\| {} return this.buildExtractorResult(c, '"hello"', g, i, options, config) } } Register({ name: 'NewExtractor', extractor: new NewExtractorClass(), fn: function <T = any>(config: NewExtractorOptions, r?: T): T { return r! } }) // and from here I can use it: const c = NewExtractor() console.log(c) `` ` ``

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [RegisterOptions](../interfaces/_extractors_core_register_.registeroptions.md) |
| `Optional` t | [T]() |

**Returns:** `T`

___

