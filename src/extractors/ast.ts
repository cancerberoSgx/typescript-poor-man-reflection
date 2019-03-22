import { indent } from 'misc-utils-of-mine-generic'
import Project, { CallExpression, Node, TypeGuards, SyntaxKind } from 'ts-simple-ast'
import {
  ExtractorClass,
  ExtractorGetter,
  ExtractorOptions,
  ExtractorResult,
  FileVariableAccessor,
  ReplaceProjectFunctionCallOptions
} from '../types'
import { AbstractExtractor } from './abstractExtractor'
import { getDefinitionsOf } from '../astUtil'

export interface AstOptions extends ExtractorOptions {
  target?: any
}
export class Ast extends AbstractExtractor implements ExtractorClass {
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>,
    variableAccessor: FileVariableAccessor,
    project?: Project
  ): ExtractorResult {
    const config = this.getOptionsFromFistArg<AstOptions>(n)

    let target: Node | undefined
    // if(n.getArguments().length<2) {
    // target = n
    // }
    // if(n.getArguments().length>=2) {
    //   const id=n.getArguments()[1]
    //   if(TypeGuards.isIdentifier(id)){
    //     const d = getDefinitionsOf(id)
    //     // console.log(d.length, d.map(d=>d.getKindName()), d.length ? d[0].getText() : 'empty')

    //     if(d.length){
    //       target = d[0]
    //     }
    //   }
    // }
    // console.log(config, config&&config.target);

    if (config && config.target) {
      if (TypeGuards.isIdentifier(config.target)) {
        const d = getDefinitionsOf(config.target)
        // console.log(d.length, d.map(d=>d.getKindName()), d.length ? d[0].getText() : 'empty')

        if (d.length) {
          target = d[0]
        }
      }
    }
    if (!target && n.getTypeArguments().length) {
      const id = n.getTypeArguments()[0].getFirstChildByKind(SyntaxKind.Identifier)
      if (id) {
        const d = getDefinitionsOf(id)
        // console.log(d.length, d.map(d=>d.getKindName()), d.length ? d[0].getText() : 'empty')

        if (d.length) {
          target = d[0]
        }
      }
    }
    let output = this.buildAst(target || n, config)
    return this.buildExtractorResult(n, output, getter, index, options, config)
  }

  protected buildAst(n: Node, config: ExtractorOptions | undefined): any {
    const a = n.getAncestors()
    const ancestors = this.printAncestors(a)
    const descendants = this.printDescendants(n, a.length)
    return JSON.stringify(`${ancestors}\n${indent(a.length)}<----You Are here---->\n${descendants}`)
  }

  protected printDescendants(n: Node, level: number): string {
    let s = this.printNode(n, level) + '\n'
    n.forEachChild(c => (s += this.printDescendants(c, level + 1)))
    return s
  }

  protected printNode(n: Node, level: number) {
    return indent(level) + n.getKindName()
  }

  protected printAncestors(a: Node[], level = 0) {
    const ancestors = a
      .map((a, i, arr) => this.printNode(a, arr.length - i - 1))
      .reverse()
      .join('\n')
    return ancestors
  }

  getConfig() {
    return {
      freeArgumentNumber: 1
    }
  }
}
