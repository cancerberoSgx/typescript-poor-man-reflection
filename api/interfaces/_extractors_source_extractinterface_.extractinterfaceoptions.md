[typescript-poor-man-reflection](../README.md) > ["extractors/source/extractInterface"](../modules/_extractors_source_extractinterface_.md) > [ExtractInterfaceOptions](../interfaces/_extractors_source_extractinterface_.extractinterfaceoptions.md)

# Interface: ExtractInterfaceOptions

Will create a new interface declaration with given name, that given class will implement. The new interface will have all class' public methods and properties.

If destFile is provided then the interface will be created in that file. If exists it will be created at the bottom. If not provided then the interface will be created when this call expression is.

If target is not provided or not found, it will use the next ClassDeclaration sibling node if any or silently fail

Returns `undefined`.

```ts
ExtractInterface({target: C, destFile: 'newOrExistingFile.ts', name: 'NewInterface'})
ExtractInterface<C>({destFile: 'newOrExistingFile.ts'})
```

## Hierarchy

 [ExtractorOptions](_types_.extractoroptions.md)

**↳ ExtractInterfaceOptions**

## Index

### Properties

* [destFile](_extractors_source_extractinterface_.extractinterfaceoptions.md#destfile)
* [name](_extractors_source_extractinterface_.extractinterfaceoptions.md#name)
* [outputMode](_extractors_source_extractinterface_.extractinterfaceoptions.md#outputmode)
* [outputVariableName](_extractors_source_extractinterface_.extractinterfaceoptions.md#outputvariablename)
* [removeDocs](_extractors_source_extractinterface_.extractinterfaceoptions.md#removedocs)
* [removeMe](_extractors_source_extractinterface_.extractinterfaceoptions.md#removeme)
* [target](_extractors_source_extractinterface_.extractinterfaceoptions.md#target)

---

## Properties

<a id="destfile"></a>

### `<Optional>` destFile

**● destFile**: *`undefined` \| `string`*

*Defined in [extractors/source/extractInterface.ts:42](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f57c9f6/src/extractors/source/extractInterface.ts#L42)*

If destFile is provided then the interface will be created in that file. If exists it will be created at the bottom. If not provided then the interface will be created when this call expression is.

___
<a id="name"></a>

### `<Optional>` name

**● name**: *`undefined` \| `string`*

*Defined in [extractors/source/extractInterface.ts:46](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f57c9f6/src/extractors/source/extractInterface.ts#L46)*

Name for the new interface

___
<a id="outputmode"></a>

### `<Optional>` outputMode

**● outputMode**: *[ExtractorOutputMode](../modules/_types_.md#extractoroutputmode)*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[outputMode](_types_.extractoroptions.md#outputmode)*

*Defined in [types.ts:153](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f57c9f6/src/types.ts#L153)*

Default is 'asReturnValue' in which case the output will be returned by the extractor function call.

If `assignToVariable` then it will be assigned to a variable in the ancestor Block. If there is a variable there called `outputVariableName` then that one will be used, otherwise a new variable will be created, next to the extractor call expression with a random name. IMPORTANT: variables created or assigned using this mode won't be removed or restored with `--clean`

___
<a id="outputvariablename"></a>

### `<Optional>` outputVariableName

**● outputVariableName**: *`undefined` \| `string`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[outputVariableName](_types_.extractoroptions.md#outputvariablename)*

*Defined in [types.ts:157](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f57c9f6/src/types.ts#L157)*

Name of the variable to assign the value in case outputMode is `assignToVariable`

___
<a id="removedocs"></a>

### `<Optional>` removeDocs

**● removeDocs**: *`undefined` \| `false` \| `true`*

*Defined in [extractors/source/extractInterface.ts:50](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f57c9f6/src/extractors/source/extractInterface.ts#L50)*

If true it will remove jsdocs from class since now they will be on the interface

___
<a id="removeme"></a>

### `<Optional>` removeMe

**● removeMe**: *`undefined` \| `false` \| `true`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[removeMe](_types_.extractoroptions.md#removeme)*

*Defined in [types.ts:164](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f57c9f6/src/types.ts#L164)*

TODO If true, this extractor function call expression will be removed. Important: this won't be undoable or restored with `--clean`

___
<a id="target"></a>

### `<Optional>` target

**● target**: *`any`*

*Inherited from [ExtractorOptions](_types_.extractoroptions.md).[target](_types_.extractoroptions.md#target)*

*Defined in [types.ts:169](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/f57c9f6/src/types.ts#L169)*

Can be used to reference a node in this file.

___

