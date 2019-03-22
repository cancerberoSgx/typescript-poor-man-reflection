const __extractor_prepend__ = ['']
import { PrintAst } from '..'

class C {
  m() {
    function f() {
      const c = 1
      const ast = PrintAst({ outputMode: 'addStringVariableStatement' }, c)

      console.log(ast)
    }
  }
}
