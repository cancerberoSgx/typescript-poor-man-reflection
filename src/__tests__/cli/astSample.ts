import { PrintAst } from '../..'

interface I {
  m(): void
}
 class C implements I {
  m() {
    return function f() {
      const ast1 = PrintAst<I>({dontPrintText: true})
      console.log(ast1)

      const ast2 = PrintAst({ target: ast1, dontPrintText: true})
      console.log(ast2)

      // PrintAst({ outputMode: 'assignToVariable', outputVariableName: 'newVar1' }, )

      // PrintAst<I>({ outputMode: 'assignToVariable', outputVariableName: 'existingVar', dontPrintText: true},   )
      // let existingVar: string = "\"  (SourceFile) \n\n<----- TARGET NODE IS THE FOLLOWING ------>\n   I (InterfaceDeclaration) \n      (Identifier) \n     m (MethodSignature) \n        (Identifier) \n        (VoidKeyword) \n\""
      // console.log(existingVar)
    }
  }
}
new C().m()()
