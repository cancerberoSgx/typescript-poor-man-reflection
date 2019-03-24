[typescript-poor-man-reflection](../README.md) > ["extractors/fs/ls"](../modules/_extractors_fs_ls_.md) > [LsOptions](../interfaces/_extractors_fs_ls_.lsoptions.md)

# Interface: LsOptions

## Hierarchy

 [ExtractorOptions](_types_.extractoroptions.md)

**↳ LsOptions**

## Index

### Properties

* [options](_extractors_fs_ls_.lsoptions.md#options)
* [outputMode](_extractors_fs_ls_.lsoptions.md#outputmode)
* [outputVariableName](_extractors_fs_ls_.lsoptions.md#outputvariablename)
* [path](_extractors_fs_ls_.lsoptions.md#path)
* [removeMe](_extractors_fs_ls_.lsoptions.md#removeme)
* [target](_extractors_fs_ls_.lsoptions.md#target)

---

## Properties

<a id="options"></a>

### `<Optional>` options

**● options**: *"-R" \| "-A" \| "-L" \| "-d" \| "-l"*

*Defined in [extractors/fs/ls.ts:33](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8e8f86f/src/extractors/fs/ls.ts#L33)*

\-R: recursive -A: all files (include files beginning with ., except for . and ..) -L: follow symlinks -d: list directories themselves, not their contents -l: list objects representing each file, each with fields containing ls -l output fields

___
<a id="outputmode"></a>

### `<Optional>` outputMode

**● outputMode**: *[ExtractorOutputMode](../modules/_types_.md#extractoroutputmode)*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[outputMode](_types_.extractoroptions.md#outputmode)*

*Defined in [types.ts:204](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8e8f86f/src/types.ts#L204)*

Default is 'asReturnValue' in which case the output will be returned by the extractor function call.

If `assignToVariable` then it will be assigned to a variable in the ancestor Block. If there is a variable there called `outputVariableName` then that one will be used, otherwise a new variable will be created, next to the extractor call expression with a random name. IMPORTANT: variables created or assigned using this mode won't be removed or restored with `--clean`

___
<a id="outputvariablename"></a>

### `<Optional>` outputVariableName

**● outputVariableName**: *`string` \| "__IGNORE__"*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[outputVariableName](_types_.extractoroptions.md#outputvariablename)*

*Defined in [types.ts:208](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8e8f86f/src/types.ts#L208)*

Name of the variable to assign the value in case outputMode is `assignToVariable`

___
<a id="path"></a>

###  path

**● path**: *`string`*

*Defined in [extractors/fs/ls.ts:25](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8e8f86f/src/extractors/fs/ls.ts#L25)*

Path to list. Could be a glob

___
<a id="removeme"></a>

### `<Optional>` removeMe

**● removeMe**: *`undefined` \| `false` \| `true`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[removeMe](_types_.extractoroptions.md#removeme)*

*Defined in [types.ts:220](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8e8f86f/src/types.ts#L220)*

If true, this extractor function call expression will be removed as long as it's on an ExpressionStatement. Example:

```ts
MyExtractor({removeMe: true}) // Will be removed
const a = MyExtractor({removeMe: true}) // Won't be removed
foo(MyExtractor({removeMe: true}))// Won't be removed
```

Important: removed extractor call expressions are not restored when using --clean.

___
<a id="target"></a>

### `<Optional>` target

**● target**: *`any`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[target](_types_.extractoroptions.md#target)*

*Defined in [types.ts:225](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/8e8f86f/src/types.ts#L225)*

Can be used to reference a node in this file.

___

