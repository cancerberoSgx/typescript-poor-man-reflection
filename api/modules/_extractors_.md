[typescript-poor-man-reflection](../README.md) > ["extractors"](../modules/_extractors_.md)

# External module: "extractors"

## Index

### Functions

* [isExportedExtractor](_extractors_.md#isexportedextractor)
* [isExtractorClass](_extractors_.md#isextractorclass)
* [isExtractorFn](_extractors_.md#isextractorfn)

### Object literals

* [defaultExtractors](_extractors_.md#defaultextractors)

---

## Functions

<a id="isexportedextractor"></a>

###  isExportedExtractor

▸ **isExportedExtractor**(a: *`any`*): `boolean`

*Defined in [extractors.ts:63](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/fcefb7a/src/extractors.ts#L63)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | `any` |

**Returns:** `boolean`

___
<a id="isextractorclass"></a>

###  isExtractorClass

▸ **isExtractorClass**(e: *[Extractor](_types_.md#extractor)*): `boolean`

*Defined in [extractors.ts:59](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/fcefb7a/src/extractors.ts#L59)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | [Extractor](_types_.md#extractor) |

**Returns:** `boolean`

___
<a id="isextractorfn"></a>

###  isExtractorFn

▸ **isExtractorFn**(e: *[Extractor](_types_.md#extractor)*): `boolean`

*Defined in [extractors.ts:55](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/fcefb7a/src/extractors.ts#L55)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | [Extractor](_types_.md#extractor) |

**Returns:** `boolean`

___

## Object literals

<a id="defaultextractors"></a>

### `<Const>` defaultExtractors

**defaultExtractors**: *`object`*

*Defined in [extractors.ts:22](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/fcefb7a/src/extractors.ts#L22)*

<a id="defaultextractors.attribute"></a>

####  Attribute

**● Attribute**: *[AttributeClass](../classes/_extractors_core_attribute_.attributeclass.md)* =  new AttributeClass()

*Defined in [extractors.ts:43](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/fcefb7a/src/extractors.ts#L43)*

___
<a id="defaultextractors.bodytext"></a>

####  BodyText

**● BodyText**: *[BodyTextClass](../classes/_extractors_basic_bodytext_.bodytextclass.md)* =  new BodyTextClass()

*Defined in [extractors.ts:25](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/fcefb7a/src/extractors.ts#L25)*

___
<a id="defaultextractors.cat"></a>

####  Cat

**● Cat**: *[CatClass](../classes/_extractors_fs_cat_.catclass.md)* =  new CatClass()

*Defined in [extractors.ts:29](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/fcefb7a/src/extractors.ts#L29)*

___
<a id="defaultextractors.exec"></a>

####  Exec

**● Exec**: *[ExecClass](../classes/_extractors_fs_exec_.execclass.md)* =  new ExecClass()

*Defined in [extractors.ts:31](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/fcefb7a/src/extractors.ts#L31)*

___
<a id="defaultextractors.extractinterface"></a>

####  ExtractInterface

**● ExtractInterface**: *[ExtractInterfaceClass](../classes/_extractors_source_extractinterface_.extractinterfaceclass.md)* =  new ExtractInterfaceClass()

*Defined in [extractors.ts:39](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/fcefb7a/src/extractors.ts#L39)*

___
<a id="defaultextractors.if"></a>

####  If

**● If**: *[IfClass](../classes/_extractors_core_if_.ifclass.md)* =  new IfClass()

*Defined in [extractors.ts:42](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/fcefb7a/src/extractors.ts#L42)*

___
<a id="defaultextractors.infertypes"></a>

####  InferTypes

**● InferTypes**: *[InferTypesClass](../classes/_extractors_source_infertypes_.infertypesclass.md)* =  new InferTypesClass()

*Defined in [extractors.ts:38](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/fcefb7a/src/extractors.ts#L38)*

___
<a id="defaultextractors.ls"></a>

####  Ls

**● Ls**: *[LsClass](../classes/_extractors_fs_ls_.lsclass.md)* =  new LsClass()

*Defined in [extractors.ts:28](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/fcefb7a/src/extractors.ts#L28)*

___
<a id="defaultextractors.nodetext"></a>

####  NodeText

**● NodeText**: *[NodeTextClass](../classes/_extractors_basic_nodetext_.nodetextclass.md)* =  new NodeTextClass()

*Defined in [extractors.ts:24](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/fcefb7a/src/extractors.ts#L24)*

___
<a id="defaultextractors.nodetype"></a>

####  NodeType

**● NodeType**: *[NodeTypeClass](../classes/_extractors_source_nodetype_.nodetypeclass.md)* =  new NodeTypeClass()

*Defined in [extractors.ts:35](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/fcefb7a/src/extractors.ts#L35)*

___
<a id="defaultextractors.organizeimports"></a>

####  OrganizeImports

**● OrganizeImports**: *[OrganizeImportsClass](../classes/_extractors_source_organizeimports_.organizeimportsclass.md)* =  new OrganizeImportsClass()

*Defined in [extractors.ts:36](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/fcefb7a/src/extractors.ts#L36)*

___
<a id="defaultextractors.overrides"></a>

####  Overrides

**● Overrides**: *[OverridesClass](../classes/_extractors_source_overrides_.overridesclass.md)* =  new OverridesClass()

*Defined in [extractors.ts:40](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/fcefb7a/src/extractors.ts#L40)*

___
<a id="defaultextractors.printast"></a>

####  PrintAst

**● PrintAst**: *[Ast](../classes/_extractors_source_printast_.ast.md)* =  new Ast()

*Defined in [extractors.ts:34](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/fcefb7a/src/extractors.ts#L34)*

___
<a id="defaultextractors.projectfiles"></a>

####  ProjectFiles

**● ProjectFiles**: *[ProjectFilesClass](../classes/_extractors_fs_projectfiles_.projectfilesclass.md)* =  new ProjectFilesClass()

*Defined in [extractors.ts:33](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/fcefb7a/src/extractors.ts#L33)*

___
<a id="defaultextractors.readfiles"></a>

####  ReadFiles

**● ReadFiles**: *[ReadFilesClass](../classes/_extractors_fs_readfiles_.readfilesclass.md)* =  new ReadFilesClass()

*Defined in [extractors.ts:30](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/fcefb7a/src/extractors.ts#L30)*

___
<a id="defaultextractors.register"></a>

####  Register

**● Register**: *`any`* =  (() => {
    try {
      // HEADS UP - Hack - since we are using require() in register.ts seems that some ts-runners (don't know if ts-node or ts-jest gets confused TypeError: register_1.RegisterClass is not a constructor) when exec ts-node src/cli.ts
      return new RegisterClass()
    } catch (error) {
      console.log('extractors new RegisterClass() error ' + error)
      return undefined as any
    }
  })()

*Defined in [extractors.ts:44](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/fcefb7a/src/extractors.ts#L44)*

___
<a id="defaultextractors.removeunused"></a>

####  RemoveUnused

**● RemoveUnused**: *[RemoveUnusedClass](../classes/_extractors_source_removeunused_.removeunusedclass.md)* =  new RemoveUnusedClass()

*Defined in [extractors.ts:37](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/fcefb7a/src/extractors.ts#L37)*

___
<a id="defaultextractors.thisblocktext"></a>

####  ThisBlockText

**● ThisBlockText**: *[ThisBlockTextClass](../classes/_extractors_basic_thisblocktext_.thisblocktextclass.md)* =  new ThisBlockTextClass()

*Defined in [extractors.ts:26](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/fcefb7a/src/extractors.ts#L26)*

___
<a id="defaultextractors.typetext"></a>

####  TypeText

**● TypeText**: *[TypeTextClass](../classes/_extractors_basic_typetext_.typetextclass.md)* =  new TypeTextClass()

*Defined in [extractors.ts:23](https://github.com/cancerberoSgx/typescript-poor-man-reflection/blob/fcefb7a/src/extractors.ts#L23)*

___

___

