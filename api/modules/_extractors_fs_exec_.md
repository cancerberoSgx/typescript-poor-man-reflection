[typescript-poor-man-reflection](../README.md) > ["extractors/fs/exec"](../modules/_extractors_fs_exec_.md)

# External module: "extractors/fs/exec"

## Index

### Classes

* [ExecClass](../classes/_extractors_fs_exec_.execclass.md)

### Interfaces

* [ExecOptions](../interfaces/_extractors_fs_exec_.execoptions.md)
* [ExecResult](../interfaces/_extractors_fs_exec_.execresult.md)

### Functions

* [Exec](_extractors_fs_exec_.md#exec)

---

## Functions

<a id="exec"></a>

### `<Const>` Exec

▸ **Exec**<`T`>(config: *[ExecOptions](../interfaces/_extractors_fs_exec_.execoptions.md)*, t?: *`any`*): [ExecResult](../interfaces/_extractors_fs_exec_.execresult.md) \| `undefined`

*Defined in [extractors/fs/exec.ts:21](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b7b4f65/src/extractors/fs/exec.ts#L21)*

Executes given command synchronously. Returns process status code, stdout and stderr.

```ts
const command = 'npm run coverage --format json --stdout'
const result = Exec({command, silent: true})
if(result.code===0){
console.log(`Command "${command}" finished successfully`)
}
export const coverageReport = JSON.parse(result.stdout)
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [ExecOptions](../interfaces/_extractors_fs_exec_.execoptions.md) |
| `Optional` t | `any` |

**Returns:** [ExecResult](../interfaces/_extractors_fs_exec_.execresult.md) \| `undefined`

___

