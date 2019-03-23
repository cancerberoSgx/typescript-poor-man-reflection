[typescript-poor-man-reflection](../README.md) > ["extractors/ast"](../modules/_extractors_ast_.md)

# External module: "extractors/ast"

## Index

### Classes

* [Ast](../classes/_extractors_ast_.ast.md)

### Interfaces

* [AstNode](../interfaces/_extractors_ast_.astnode.md)
* [AstOptions](../interfaces/_extractors_ast_.astoptions.md)

### Functions

* [PrintAst](_extractors_ast_.md#printast)

---

## Functions

<a id="printast"></a>

### `<Const>` PrintAst

▸ **PrintAst**<`T`>(config: *[AstOptions](../interfaces/_extractors_ast_.astoptions.md)*, t?: *`any`*): `any`

*Defined in [extractors/ast.ts:36](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/56d0d74/src/extractors/ast.ts#L36)*

will print AST tree as string of given node which can be specified in config.target or as first type argument. If no target node is provided then it will print the AST of this `PrintAst` call expression node. Example:

```ts
interface I {
m(): void
}
class C implements I {
m() {
 return function f() {
   // prints the AST of interface I
   console.log(PrintAst<I>())
   // prints the AST of class C
   console.log(PrintAst({ target: C }))
 }
}
}
new C().m()()
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [AstOptions](../interfaces/_extractors_ast_.astoptions.md) |
| `Optional` t | `any` |

**Returns:** `any`

___

