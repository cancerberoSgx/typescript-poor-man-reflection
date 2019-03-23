[typescript-poor-man-reflection](../README.md) > ["extractors/fs/readFiles"](../modules/_extractors_fs_readfiles_.md) > [ReadFilesOptions](../interfaces/_extractors_fs_readfiles_.readfilesoptions.md)

# Interface: ReadFilesOptions

## Hierarchy

 [ExtractorOptions](_types_.extractoroptions.md)

**↳ ReadFilesOptions**

## Index

### Properties

* [outputMode](_extractors_fs_readfiles_.readfilesoptions.md#outputmode)
* [outputVariableName](_extractors_fs_readfiles_.readfilesoptions.md#outputvariablename)
* [path](_extractors_fs_readfiles_.readfilesoptions.md#path)
* [removeMe](_extractors_fs_readfiles_.readfilesoptions.md#removeme)
* [target](_extractors_fs_readfiles_.readfilesoptions.md#target)

---

## Properties

<a id="outputmode"></a>

### `<Optional>` outputMode

**● outputMode**: *[ExtractorOutputMode](../modules/_types_.md#extractoroutputmode)*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[outputMode](_types_.extractoroptions.md#outputmode)*

*Defined in [types.ts:176](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/2245c2e/src/types.ts#L176)*

Default is 'asReturnValue' in which case the output will be returned by the extractor function call.

If `assignToVariable` then it will be assigned to a variable in the ancestor Block. If there is a variable there called `outputVariableName` then that one will be used, otherwise a new variable will be created, next to the extractor call expression with a random name. IMPORTANT: variables created or assigned using this mode won't be removed or restored with `--clean`

___
<a id="outputvariablename"></a>

### `<Optional>` outputVariableName

**● outputVariableName**: *`undefined` \| `string`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[outputVariableName](_types_.extractoroptions.md#outputvariablename)*

*Defined in [types.ts:180](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/2245c2e/src/types.ts#L180)*

Name of the variable to assign the value in case outputMode is `assignToVariable`

___
<a id="path"></a>

###  path

**● path**: *`string`*

*Defined in [extractors/fs/readFiles.ts:30](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/2245c2e/src/extractors/fs/readFiles.ts#L30)*

Path of files to read. Can be a glob.

___
<a id="removeme"></a>

### `<Optional>` removeMe

**● removeMe**: *`undefined` \| `false` \| `true`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[removeMe](_types_.extractoroptions.md#removeme)*

*Defined in [types.ts:192](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/2245c2e/src/types.ts#L192)*

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

*Defined in [types.ts:197](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/2245c2e/src/types.ts#L197)*

Can be used to reference a node in this file.

___

