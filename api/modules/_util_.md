[typescript-poor-man-reflection](../README.md) > ["util"](../modules/_util_.md)

# External module: "util"

## Index

### Type aliases

* [Fn](_util_.md#fn)
* [Map](_util_.md#map)

### Functions

* [asString](_util_.md#asstring)
* [evaluate](_util_.md#evaluate)
* [evaluateAndError](_util_.md#evaluateanderror)
* [isNode](_util_.md#isnode)
* [unquote](_util_.md#unquote)
* [withoutExtension](_util_.md#withoutextension)

---

## Type aliases

<a id="fn"></a>

###  Fn

**Ƭ Fn**: *`function`*

*Defined in [util.ts:31](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/73575a8/src/util.ts#L31)*

#### Type declaration
▸(...args: *`any`[]*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `any`[] |

**Returns:** `any`

___
<a id="map"></a>

###  Map

**Ƭ Map**: *`object`*

*Defined in [util.ts:20](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/73575a8/src/util.ts#L20)*

#### Type declaration

[key: `string`]: `V`

___

## Functions

<a id="asstring"></a>

###  asString

▸ **asString**(s: *`string`*): `string`

*Defined in [util.ts:25](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/73575a8/src/util.ts#L25)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| s | `string` |

**Returns:** `string`

___
<a id="evaluate"></a>

###  evaluate

▸ **evaluate**<`T`>(s: *`string`*, defaultValue?: *`undefined`*): `T` \| `undefined`

*Defined in [util.ts:5](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/73575a8/src/util.ts#L5)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| s | `string` | - |
| `Default value` defaultValue | `undefined` |  undefined |

**Returns:** `T` \| `undefined`

___
<a id="evaluateanderror"></a>

###  evaluateAndError

▸ **evaluateAndError**<`T`>(s: *`string`*): `T` \| `undefined`

*Defined in [util.ts:12](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/73575a8/src/util.ts#L12)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| s | `string` |

**Returns:** `T` \| `undefined`

___
<a id="isnode"></a>

###  isNode

▸ **isNode**(n: *`any`*): `boolean`

*Defined in [util.ts:34](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/73575a8/src/util.ts#L34)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `any` |

**Returns:** `boolean`

___
<a id="unquote"></a>

###  unquote

▸ **unquote**(s: *`string`*): `string`

*Defined in [util.ts:21](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/73575a8/src/util.ts#L21)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| s | `string` |

**Returns:** `string`

___
<a id="withoutextension"></a>

###  withoutExtension

▸ **withoutExtension**(f: *`string`*): `string`

*Defined in [util.ts:28](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/73575a8/src/util.ts#L28)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| f | `string` |

**Returns:** `string`

___

