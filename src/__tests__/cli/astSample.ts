import { PrintAst } from '../..'

interface I {
  m(): void
}
class C implements I {
  m() {
    return function f() {
      const ast1 = PrintAst<I>({ dontPrintText: true })
      console.log(ast1)

      const ast2 = PrintAst({ target: ast1, dontPrintText: true })
      console.log(ast2)

      console.log(JSON.stringify(PrintAst({ target: eee, asJson: true, dontPrintText: true }) || {}))
    }
  }
}
export const eee = new C().m()()
