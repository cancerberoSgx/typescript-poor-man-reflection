[typescript-poor-man-reflection](../README.md) > ["types"](../modules/_types_.md) > [ExtractorOptions](../interfaces/_types_.extractoroptions.md)

# Interface: ExtractorOptions

These are options that user can use to configure a Extractor, could be as convention in the first arg, ex: `PrintAst({ target: foo, outputMode: 'assignToVariable', outputVariableName: 'existingVar')`

## Hierarchy

**ExtractorOptions**

↳  [ExecOptions](_extractors_fs_exec_.execoptions.md)

↳  [LsOptions](_extractors_fs_ls_.lsoptions.md)

↳  [ProjectFilesOptions](_extractors_fs_projectfiles_.projectfilesoptions.md)

↳  [ReadFilesOptions](_extractors_fs_readfiles_.readfilesoptions.md)

↳  [ExtractInterfaceOptions](_extractors_source_extractinterface_.extractinterfaceoptions.md)

↳  [IfOptions](_extractors_core_if_.ifoptions.md)

↳  [AbstractRefactorExtractorOptions](_extractors_source_abstractrefactorextractor_.abstractrefactorextractoroptions.md)

↳  [NodeTypeOptions](_extractors_source_nodetype_.nodetypeoptions.md)

↳  [OverridesOptions](_extractors_source_overrides_.overridesoptions.md)

↳  [RegisterOptions](_extractors_core_register_.registeroptions.md)

↳  [AstOptions](_extractors_source_printast_.astoptions.md)

↳  [LsOptions](_extractors_fs_cat_.lsoptions.md)

↳  [AttributeOptions](_extractors_core_attribute_.attributeoptions.md)

## Index

### Properties

* [outputMode](_types_.extractoroptions.md#outputmode)
* [outputVariableName](_types_.extractoroptions.md#outputvariablename)
* [removeMe](_types_.extractoroptions.md#removeme)
* [target](_types_.extractoroptions.md#target)
* [throwOnError](_types_.extractoroptions.md#throwonerror)

---

## Properties

<a id="outputmode"></a>

### `<Optional>` outputMode

**● outputMode**: *[ExtractorOutputMode](../modules/_types_.md#extractoroutputmode)*

*Defined in [types.ts:213](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f1306fa/src/types.ts#L213)*

Default is 'asReturnValue' in which case the output will be returned by the extractor function call.

If `assignToVariable` then it will be assigned to a variable in the ancestor Block. If there is a variable there called `outputVariableName` then that one will be used, otherwise a new variable will be created, next to the extractor call expression with a random name. IMPORTANT: variables created or assigned using this mode won't be removed or restored with `--clean`

___
<a id="outputvariablename"></a>

### `<Optional>` outputVariableName

**● outputVariableName**: *`string` \| "__IGNORE__"*

*Defined in [types.ts:217](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f1306fa/src/types.ts#L217)*

Name of the variable to assign the value in case outputMode is `assignToVariable`

___
<a id="removeme"></a>

### `<Optional>` removeMe

**● removeMe**: *`undefined` \| `false` \| `true`*

*Defined in [types.ts:229](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f1306fa/src/types.ts#L229)*

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

*Defined in [types.ts:234](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f1306fa/src/types.ts#L234)*

Can be used to reference a node in this file.

___
<a id="throwonerror"></a>

### `<Optional>` throwOnError

**● throwOnError**: *`undefined` \| `false` \| `true`*

*Defined in [types.ts:236](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f1306fa/src/types.ts#L236)*

___

