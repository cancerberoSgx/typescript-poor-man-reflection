import { BodyTextClass } from './extractors/basic/bodyText'
import { NodeTextClass } from './extractors/basic/nodeText'
import { ThisBlockTextClass } from './extractors/basic/thisBlockText'
import { TypeTextClass } from './extractors/basic/typeText'
import { CatClass } from './extractors/fs/cat'
import { ExecClass } from './extractors/fs/exec'
import { LsClass } from './extractors/fs/ls'
import { ProjectFilesClass } from './extractors/fs/projectFiles'
import { ReadFilesClass } from './extractors/fs/readFiles'
import { ExtractInterfaceClass } from './extractors/source/extractInterface'
import { InferTypesClass } from './extractors/source/inferTypes'
import { NodeTypeClass } from './extractors/source/nodeType'
import { OrganizeImportsClass } from './extractors/source/organizeImports'
import { OverridesClass } from './extractors/source/overrides'
import { Ast } from './extractors/source/printAst'
import { RemoveUnusedClass } from './extractors/source/removeUnused'
import { Extractor, ExtractorClass, ExtractorFn, ExportedExtractor } from './types'
import { RegisterClass } from './extractors/core/register'
import { IfClass } from './extractors/core/if';

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
  ExtractInterface: new ExtractInterfaceClass(),
  Overrides: new OverridesClass(),
  
  If: new IfClass(),
  Register: (() => {
    try {
      // HEADS UP - Hack - since we are using require() in register.ts seems that some ts-runners (don't know if ts-node or ts-jest gets confused TypeError: register_1.RegisterClass is not a constructor) when exec ts-node src/cli.ts
      return new RegisterClass()
    } catch (error) {
      console.log('extractors new RegisterClass() error ' + error)
      return undefined as any
    }
  })()
}

export function isExtractorFn(e: Extractor): e is ExtractorFn {
  return typeof e.extract === 'undefined'
}

export function isExtractorClass(e: Extractor): e is ExtractorClass {
  return typeof e.extract !== 'undefined'
}

export function isExportedExtractor(a: any): a is ExportedExtractor {
  return typeof a.name === 'string' && typeof a.extractor === 'object' && typeof a.fn === 'function'
}
