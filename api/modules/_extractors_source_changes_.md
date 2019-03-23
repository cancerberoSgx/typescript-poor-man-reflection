[typescript-poor-man-reflection](../README.md) > ["extractors/source/changes"](../modules/_extractors_source_changes_.md)

# External module: "extractors/source/changes"

## Index

### Interfaces

* [ApplyFileTextChangesResult](../interfaces/_extractors_source_changes_.applyfiletextchangesresult.md)

### Variables

* [applyTextChangesSourceFile](_extractors_source_changes_.md#applytextchangessourcefile)

### Functions

* [applyAllSuggestedCodeFixes](_extractors_source_changes_.md#applyallsuggestedcodefixes)
* [applyFileTextChanges](_extractors_source_changes_.md#applyfiletextchanges)
* [applyRefactorEditInfo](_extractors_source_changes_.md#applyrefactoreditinfo)
* [applyTextChanges](_extractors_source_changes_.md#applytextchanges)
* [applyTextChangesGetSourceFile](_extractors_source_changes_.md#applytextchangesgetsourcefile)
* [createTextChanges](_extractors_source_changes_.md#createtextchanges)
* [getSuggestedCodeFixesInside](_extractors_source_changes_.md#getsuggestedcodefixesinside)

---

## Variables

<a id="applytextchangessourcefile"></a>

### `<Let>` applyTextChangesSourceFile

**● applyTextChangesSourceFile**: *`SourceFile`*

*Defined in [extractors/source/changes.ts:132](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/4ce0fbf/src/extractors/source/changes.ts#L132)*

___

## Functions

<a id="applyallsuggestedcodefixes"></a>

###  applyAllSuggestedCodeFixes

▸ **applyAllSuggestedCodeFixes**(project: *`Project`*, containerNode: *`Node`*, codes?: *`number`[]*, removeEmpty?: *`boolean`*): [ApplyFileTextChangesResult](../interfaces/_extractors_source_changes_.applyfiletextchangesresult.md)

*Defined in [extractors/source/changes.ts:80](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/4ce0fbf/src/extractors/source/changes.ts#L80)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| project | `Project` | - |
| containerNode | `Node` | - |
| `Optional` codes | `number`[] | - |
| `Default value` removeEmpty | `boolean` | false |

**Returns:** [ApplyFileTextChangesResult](../interfaces/_extractors_source_changes_.applyfiletextchangesresult.md)

___
<a id="applyfiletextchanges"></a>

###  applyFileTextChanges

▸ **applyFileTextChanges**(project: *`Project`*, ftc: *`FileTextChanges`*, removeEmpty?: *`boolean`*, result?: *[ApplyFileTextChangesResult](../interfaces/_extractors_source_changes_.applyfiletextchangesresult.md)*): [ApplyFileTextChangesResult](../interfaces/_extractors_source_changes_.applyfiletextchangesresult.md)

*Defined in [extractors/source/changes.ts:25](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/4ce0fbf/src/extractors/source/changes.ts#L25)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| project | `Project` | - |
| ftc | `FileTextChanges` | - |
| `Default value` removeEmpty | `boolean` | false |
| `Default value` result | [ApplyFileTextChangesResult](../interfaces/_extractors_source_changes_.applyfiletextchangesresult.md) |  {modified: [],removed: [],created: []} |

**Returns:** [ApplyFileTextChangesResult](../interfaces/_extractors_source_changes_.applyfiletextchangesresult.md)

___
<a id="applyrefactoreditinfo"></a>

###  applyRefactorEditInfo

▸ **applyRefactorEditInfo**(project: *`Project`*, refactor: *`RefactorEditInfo`*, removeEmpty?: *`boolean`*, result?: *[ApplyFileTextChangesResult](../interfaces/_extractors_source_changes_.applyfiletextchangesresult.md)*): [ApplyFileTextChangesResult](../interfaces/_extractors_source_changes_.applyfiletextchangesresult.md)

*Defined in [extractors/source/changes.ts:64](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/4ce0fbf/src/extractors/source/changes.ts#L64)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| project | `Project` | - |
| refactor | `RefactorEditInfo` | - |
| `Default value` removeEmpty | `boolean` | false |
| `Default value` result | [ApplyFileTextChangesResult](../interfaces/_extractors_source_changes_.applyfiletextchangesresult.md) |  {modified: [],removed: [],created: []} |

**Returns:** [ApplyFileTextChangesResult](../interfaces/_extractors_source_changes_.applyfiletextchangesresult.md)

___
<a id="applytextchanges"></a>

###  applyTextChanges

▸ **applyTextChanges**(code: *`string`*, textChanges: *`TextChange`[]*): `string`

*Defined in [extractors/source/changes.ts:11](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/4ce0fbf/src/extractors/source/changes.ts#L11)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| code | `string` |
| textChanges | `TextChange`[] |

**Returns:** `string`

___
<a id="applytextchangesgetsourcefile"></a>

###  applyTextChangesGetSourceFile

▸ **applyTextChangesGetSourceFile**(): `SourceFile`

*Defined in [extractors/source/changes.ts:134](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/4ce0fbf/src/extractors/source/changes.ts#L134)*

**Returns:** `SourceFile`

___
<a id="createtextchanges"></a>

###  createTextChanges

▸ **createTextChanges**(textChanges: *`TextChange`[]*): `TextChange`[]

*Defined in [extractors/source/changes.ts:5](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/4ce0fbf/src/extractors/source/changes.ts#L5)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| textChanges | `TextChange`[] |

**Returns:** `TextChange`[]

___
<a id="getsuggestedcodefixesinside"></a>

###  getSuggestedCodeFixesInside

▸ **getSuggestedCodeFixesInside**(project: *`Project`*, containerNode: *`Node`*, codes?: *`number`[]*): `ReadonlyArray`<`CodeFixAction`>

*Defined in [extractors/source/changes.ts:100](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/4ce0fbf/src/extractors/source/changes.ts#L100)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| project | `Project` |
| containerNode | `Node` |
| `Optional` codes | `number`[] |

**Returns:** `ReadonlyArray`<`CodeFixAction`>

___

