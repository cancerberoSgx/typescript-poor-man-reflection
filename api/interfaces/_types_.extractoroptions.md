[typescript-poor-man-reflection](../README.md) > ["types"](../modules/_types_.md) > [ExtractorOptions](../interfaces/_types_.extractoroptions.md)

# Interface: ExtractorOptions

These are options that user can use to configure a Extractor, could be as convention in the first arg, ex: `PrintAst({ target: foo, outputMode: 'assignToVariable', outputVariableName: 'existingVar')`

## Hierarchy

**ExtractorOptions**

↳  [LsOptions](_extractors_fs_cat_.lsoptions.md)

↳  [ExecOptions](_extractors_fs_exec_.execoptions.md)

↳  [LsOptions](_extractors_fs_ls_.lsoptions.md)

↳  [ReadFilesOptions](_extractors_fs_readfiles_.readfilesoptions.md)

↳  [ExtractInterfaceOptions](_extractors_source_extractinterface_.extractinterfaceoptions.md)

↳  [AbstractRefactorExtractorOptions](_extractors_source_abstractrefactorextractor_.abstractrefactorextractoroptions.md)

↳  [NodeTypeOptions](_extractors_source_nodetype_.nodetypeoptions.md)

↳  [AstOptions](_extractors_source_printast_.astoptions.md)

↳  [ProjectFilesOptions](_extractors_source_projectfiles_.projectfilesoptions.md)

## Index

### Properties

* [outputMode](_types_.extractoroptions.md#outputmode)
* [outputVariableName](_types_.extractoroptions.md#outputvariablename)
* [removeMe](_types_.extractoroptions.md#removeme)
* [target](_types_.extractoroptions.md#target)

---

## Properties

<a id="outputmode"></a>

### `<Optional>` outputMode

**● outputMode**: *[ExtractorOutputMode](../modules/_types_.md#extractoroutputmode)*

*Defined in [types.ts:153](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/e3a07d8/src/types.ts#L153)*

Default is 'asReturnValue' in which case the output will be returned by the extractor function call.

If `assignToVariable` then it will be assigned to a variable in the ancestor Block. If there is a variable there called `outputVariableName` then that one will be used, otherwise a new variable will be created, next to the extractor call expression with a random name. IMPORTANT: variables created or assigned using this mode won't be removed or restored with `--clean`

___
<a id="outputvariablename"></a>

### `<Optional>` outputVariableName

**● outputVariableName**: *`undefined` \| `string`*

*Defined in [types.ts:157](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/e3a07d8/src/types.ts#L157)*

Name of the variable to assign the value in case outputMode is `assignToVariable`

___
<a id="removeme"></a>

### `<Optional>` removeMe

**● removeMe**: *`undefined` \| `false` \| `true`*

*Defined in [types.ts:168](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/e3a07d8/src/types.ts#L168)*

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

*Defined in [types.ts:173](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/e3a07d8/src/types.ts#L173)*

Can be used to reference a node in this file.

___

