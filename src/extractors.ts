import { Ast } from './extractors/ast'
import { BodyText } from './extractors/basic/bodyText'
import { NodeText } from './extractors/basic/nodeText'
import { ThisBlockText } from './extractors/basic/thisBlockText'
import { TypeText } from './extractors/basic/typeText'
import { Extractor, ExtractorClass, ExtractorFn } from './types'
import { NodeTypeClass } from './extractors/nodeType'
import { LsClass } from './extractors/fs/ls'
import { CatClass } from './extractors/fs/cat';

export const defaultExtractors: { [k: string]: Extractor } = {
  TypeText: new TypeText(),

  NodeText: new NodeText(),

  BodyText: new BodyText(),

  ThisBlockText: new ThisBlockText(),

  NodeType: new NodeTypeClass(),

  PrintAst: new Ast(),

  Ls: new LsClass(),
  Cat: new CatClass(),
}

export function isExtractorFn(e: Extractor): e is ExtractorFn {
  return typeof e.extract === 'undefined'
}

export function isExtractorClass(e: Extractor): e is ExtractorClass {
  return typeof e.extract !== 'undefined'
}
