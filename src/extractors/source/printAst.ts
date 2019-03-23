import { indent, quote, shorter } from 'misc-utils-of-mine-generic';
import { CallExpression, Node } from 'ts-simple-ast';
import { getNodeName } from '../../astUtil';
import { ExtractorClass, ExtractorGetter, ExtractorOptions, ExtractorResult, ReplaceProjectFunctionCallOptions } from '../../types';
import { AbstractExtractor } from '../abstractExtractor';

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
  dontPrintKindName?: boolean
  dontPrintIdentifier?: boolean
  dontPrintText?: boolean
  /**
   * If true it will return the AST as JSON object. If false if will return a string with indentation
   * representing the AST
   */
  asJson?: boolean
}

export class Ast extends AbstractExtractor implements ExtractorClass {
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>
  ): ExtractorResult {
    const config = this.getOptionsFromFistArg<AstOptions>(n) || {}
    let target: Node | undefined = this.getTarget(n, config)
    // let output = target ? this.buildAst(target || n, config) as any : 'You must provide a target using the the target property or the first type argument'
    let output = this.buildAst(target || n, config) as any
    return this.buildExtractorResult(
      n,
      config.asJson ? JSON.stringify(output) : quote(output),
      getter,
      index,
      options,
      config
    )
  }

  protected parseOptionValue(name: string, value: Node | undefined): any {
    if (value && ['dontPrintIdentifier', 'dontPrintKindName', 'dontPrintText'].includes(name)) {
      return value.getText() === 'true' ? true : false
    } else {
      return super.parseOptionValue(name, value)
    }
  }

  protected buildAst(n: Node, config: AstOptions = {}): string | AstNode {
    const a = n.getAncestors()
    if (config.asJson) {
      const ancestors = this.printAncestors(a, 0, config) as AstNode
      let an: AstNode = ancestors
      while (an && an.children[0] && (an = an.children[0])) {}
      const descendants = this.printDescendants(n, a.length, config) as AstNode
      an.children.push(descendants)
      return ancestors
    } else {
      const descendants = this.printDescendants(n, a.length, config) as string
      const ancestors = (this.printAncestors(a, 0, config) as string[]).join('\n')
      return JSON.stringify(`${ancestors}\n\n<----- TARGET NODE IS THE FOLLOWING ------>\n${descendants}`)
    }
  }

  protected printDescendants(n: Node, level: number, config: AstOptions = {}): string | AstNode {
    if (config.asJson) {
      const astNode = this.printNode(n, level, config) as AstNode
      n.forEachChild(c => astNode.children.push(this.printDescendants(c, level + 1, config) as AstNode))
      return astNode
    } else {
      let s = this.printNode(n, level, config) + '\n'
      n.forEachChild(c => (s += this.printDescendants(c, level + 1, config)))
      return s
    }
  }

  protected printNode(n: Node, level: number, config: AstOptions = {}) {
    if (config.asJson) {
      return {
        name: config.dontPrintIdentifier ? '' : getNodeName(n) || '',
        kind: config.dontPrintKindName ? '' : n.getKindName(),
        text: config.dontPrintText ? '' : shorter(n.getText(), 40).replace(/\n/g, ''),
        children: []
      }
    } else {
      const name = config.dontPrintIdentifier ? '' : `${getNodeName(n) || ''}`
      const kind = config.dontPrintKindName ? '' : `(${n.getKindName()})`
      const text = config.dontPrintText ? '' : `"${shorter(n.getText(), 40).replace(/\n/g, '')}"`
      return `${indent(level)} ${name} ${kind} ${text}`
    }
  }

  protected printAncestors(a: Node[], level = 0, config: AstOptions = {}) {
    if (config.asJson) {
      let previousNode: AstNode, an: AstNode, first: AstNode
      a.forEach((n, i, arr) => {
        an = this.printNode(n, i, config) as AstNode
        if (previousNode) {
          an.children.push(previousNode)
        } else {
          first = an
        }
        previousNode = an
      })
      return an! as AstNode
    } else {
      const ancestors = a.map((a, i, arr) => this.printNode(a, arr.length - i - 1, config)).reverse()
      return ancestors
    }
  }

  protected freeArgumentNumber = 1
}

interface AstNode {
  name: string
  kind: string
  text: string
  children: AstNode[]
}
