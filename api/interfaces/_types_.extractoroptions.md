[typescript-poor-man-reflection](../README.md) > ["types"](../modules/_types_.md) > [ExtractorOptions](../interfaces/_types_.extractoroptions.md)

# Interface: ExtractorOptions

These are options that user can use to configure a Extractor, could be as convention in the first arg, ex: `PrintAst({ target: foo, outputMode: 'assignToVariable', outputVariableName: 'existingVar')`

## Hierarchy

**ExtractorOptions**

↳  [AstOptions](_extractors_ast_.astoptions.md)

↳  [LsOptions](_extractors_fs_cat_.lsoptions.md)

↳  [LsOptions](_extractors_fs_ls_.lsoptions.md)

↳  [ReadFilesOptions](_extractors_fs_readfiles_.readfilesoptions.md)

↳  [NodeTypeOptions](_extractors_nodetype_.nodetypeoptions.md)

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

*Defined in [types.ts:154](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/55c8283/src/types.ts#L154)*

Default is 'asReturnValue' in which case the output will be returned by the extractor function call.

If `assignToVariable` then it will be assigned to a variable in the ancestor Block. If there is a variable there called `outputVariableName` then that one will be used, otherwise a new variable will be created, next to the extractor call expression with a random name. IMPORTANT: variables created or assigned using this mode won't be removed or restored with `--clean`

___
<a id="outputvariablename"></a>

### `<Optional>` outputVariableName

**● outputVariableName**: *`undefined` \| `string`*

*Defined in [types.ts:158](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/55c8283/src/types.ts#L158)*

Name of the variable to assign the value in case outputMode is `assignToVariable`

___
<a id="removeme"></a>

### `<Optional>` removeMe

**● removeMe**: *`undefined` \| `false` \| `true`*

*Defined in [types.ts:165](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/55c8283/src/types.ts#L165)*

TODO If true, this extractor function call expression will be removed. Important: this won't be undoable or restored with `--clean`

___
<a id="target"></a>

### `<Optional>` target

**● target**: *`any`*

*Defined in [types.ts:170](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/55c8283/src/types.ts#L170)*

Can be used to reference a node in this file.

___

