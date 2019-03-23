[typescript-poor-man-reflection](../README.md) > ["extractors/source/codeFixes"](../modules/_extractors_source_codefixes_.md) > [CodeFixActionExtended](../interfaces/_extractors_source_codefixes_.codefixactionextended.md)

# Interface: CodeFixActionExtended

## Hierarchy

**CodeFixActionExtended**

## Index

### Properties

* [changes](_extractors_source_codefixes_.codefixactionextended.md#changes)
* [description](_extractors_source_codefixes_.codefixactionextended.md#description)
* [diagnostic](_extractors_source_codefixes_.codefixactionextended.md#diagnostic)
* [fixAllDescription](_extractors_source_codefixes_.codefixactionextended.md#fixalldescription)
* [fixId](_extractors_source_codefixes_.codefixactionextended.md#fixid)
* [fixName](_extractors_source_codefixes_.codefixactionextended.md#fixname)

---

## Properties

<a id="changes"></a>

###  changes

**● changes**: *`FileTextChanges`[]*

*Defined in [extractors/source/codeFixes.ts:114](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b99ab34/src/extractors/source/codeFixes.ts#L114)*

___
<a id="description"></a>

###  description

**● description**: *`string`*

*Defined in [extractors/source/codeFixes.ts:124](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b99ab34/src/extractors/source/codeFixes.ts#L124)*

Description of the code action to display in the UI of the editor

___
<a id="diagnostic"></a>

###  diagnostic

**● diagnostic**: *[TsDiagnostic](_extractors_source_codefixes_.tsdiagnostic.md)*

*Defined in [extractors/source/codeFixes.ts:113](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b99ab34/src/extractors/source/codeFixes.ts#L113)*

___
<a id="fixalldescription"></a>

### `<Optional>` fixAllDescription

**● fixAllDescription**: *`undefined` \| `string`*

*Defined in [extractors/source/codeFixes.ts:122](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b99ab34/src/extractors/source/codeFixes.ts#L122)*

___
<a id="fixid"></a>

### `<Optional>` fixId

**● fixId**: *`undefined` \| `__type`*

*Defined in [extractors/source/codeFixes.ts:121](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b99ab34/src/extractors/source/codeFixes.ts#L121)*

If present, one may call 'getCombinedCodeFix' with this fixId. This may be omitted to indicate that the code fix can't be applied in a group.

___
<a id="fixname"></a>

###  fixName

**● fixName**: *`string`*

*Defined in [extractors/source/codeFixes.ts:116](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/b99ab34/src/extractors/source/codeFixes.ts#L116)*

Short name to identify the fix, for use by telemetry.

___

