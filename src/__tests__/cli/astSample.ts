import { PrintAst } from '../..'

class C {
  m() {
    return function f() {
      const c = 1

      const ast = PrintAst<C>({ outputMode: 'asReturnValue' })
      console.log(ast)

      // PrintAst({ outputMode: 'assignToVariable', outputVariableName: 'newVar1' }, )

      // PrintAst({ outputMode: 'assignToVariable', outputVariableName: 'existingVar' }, )
      // let existingVar: string = ""
      // console.log(existingVar)
    }
  }
}
new C().m()()
