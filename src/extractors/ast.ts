import { indent, shorter } from 'misc-utils-of-mine-generic'
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
import { getDefinitionsOf, getNodeName } from '../astUtil'

/**
 * will print AST tree as string of given node which can be specified in config.target or as first type
 * argument. If no target node is provided then it will print the AST of this `PrintAst` call expression node.
 * Example: 
 * 
```ts
interface I {
  m(): void
}
 class C implements I {
  m() {
    return function f() {
      // prints the AST of interface I
      console.log(PrintAst<I>())
      // prints the AST of class C
      console.log(PrintAst({ target: C }))
    }
  }
}
new C().m()()
```
 */
export const PrintAst = function<T = any>(config: AstOptions, t?: any) {
  return t!
}

export interface AstOptions extends ExtractorOptions {
  target?: any
  dontPrintKindName?: boolean
  dontPrintIdentifier?: boolean
  dontPrintText?: boolean
}

export class Ast extends AbstractExtractor implements ExtractorClass {

  getConfig() {
    return {
      freeArgumentNumber: 1
    }
  }
  
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
    if (config && config.target) {
      if (TypeGuards.isIdentifier(config.target)) {
        const d = getDefinitionsOf(config.target)
        target = d.length ? d[0] : undefined
      }
    }
    if (!target && n.getTypeArguments().length) {
      const id = n.getTypeArguments()[0].getFirstChildByKind(SyntaxKind.Identifier)
      if (id) {
        const d = getDefinitionsOf(id)
        target = d.length ? d[0] : undefined
      }
    }
    let output = this.buildAst(target || n, config)
    return this.buildExtractorResult(n, output, getter, index, options, config)
  }

  protected buildAst(n: Node, config: AstOptions = {}): any {
    const a = n.getAncestors()
    const ancestors = this.printAncestors(a, 0, config)
    const descendants = this.printDescendants(n, a.length, config)
    return JSON.stringify(`${ancestors}\n\n<----- TARGET NODE IS THE FOLLOWING ------>\n${descendants}`)
  }

  protected printDescendants(n: Node, level: number, config: AstOptions = {}): string {
    let s = this.printNode(n, level, config) + '\n'
    n.forEachChild(c => (s += this.printDescendants(c, level + 1, config)))
    return s
  }

  protected printNode(n: Node, level: number, config: AstOptions = {}) {
    const name = config.dontPrintIdentifier ? '' : `${getNodeName(n) || ''}`
    const kind = config.dontPrintKindName ? '' : `(${n.getKindName()})`
    const text = config.dontPrintText ? '' : `"${shorter(n.getText(), 40).replace(/\n/g, '')}"`
    return `${indent(level)} ${name} ${kind} ${text}`
  }

  protected parseOptionValue(name: string, value: Node|undefined): any{
    if(value && ['dontPrintIdentifier', 'dontPrintKindName', 'dontPrintText'].includes(name)){
      return value.getText()==='true' ? true: false
    }
    else {
      return super.parseOptionValue(name, value)
    }
  }

  protected printAncestors(a: Node[], level = 0, config: AstOptions = {}) {
    const ancestors = a
      .map((a, i, arr) => this.printNode(a, arr.length - i - 1, config))
      .reverse()
      .join('\n')
    return ancestors
  }

}
