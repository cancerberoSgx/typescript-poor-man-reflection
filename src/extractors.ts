import { BodyTextClass } from './extractors/basic/bodyText'
import { NodeTextClass } from './extractors/basic/nodeText'
import { ThisBlockTextClass } from './extractors/basic/thisBlockText'
import { TypeTextClass } from './extractors/basic/typeText'
import { CatClass } from './extractors/fs/cat'
import { LsClass } from './extractors/fs/ls'
import { ReadFilesClass } from './extractors/fs/readFiles'
import { ExtractInterfaceClass } from './extractors/source/extractInterface'
import { InferTypesClass } from './extractors/source/inferTypes'
import { NodeTypeClass } from './extractors/source/nodeType'
import { OrganizeImportsClass } from './extractors/source/organizeImports'
import { Ast } from './extractors/source/printAst'
import { ProjectFilesClass } from './extractors/source/projectFiles'
import { RemoveUnusedClass } from './extractors/source/removeUnused'
import { Extractor, ExtractorClass, ExtractorFn } from './types'
import { ExecClass } from './extractors/fs/exec';

export const defaultExtractors: { [k: string]: Extractor } = {
  TypeText: new TypeTextClass(),
  NodeText: new NodeTextClass(),
  BodyText: new BodyTextClass(),
  ThisBlockText: new ThisBlockTextClass(),

  Ls: new LsClass(),
  Cat: new CatClass(),
  ReadFiles: new ReadFilesClass(),
  Exec: new ExecClass(),

  ProjectFiles: new ProjectFilesClass(),
  PrintAst: new Ast(),
  NodeType: new NodeTypeClass(),
  OrganizeImports: new OrganizeImportsClass(),
  RemoveUnused: new RemoveUnusedClass(),
  InferTypes: new InferTypesClass(),
  ExtractInterface: new ExtractInterfaceClass()
}

export function isExtractorFn(e: Extractor): e is ExtractorFn {
  return typeof e.extract === 'undefined'
}

export function isExtractorClass(e: Extractor): e is ExtractorClass {
  return typeof e.extract !== 'undefined'
}
