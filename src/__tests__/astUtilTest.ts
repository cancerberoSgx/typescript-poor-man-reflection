import { Project, SyntaxKind, TypeGuards } from 'ts-morph'
import { removeWhites } from 'misc-utils-of-mine-generic'
import { array2DInsert } from 'ts-simple-ast-extra'

describe('astUtil', () => {
  it('addArgument', () => {
    const project = new Project()
    const f = project.createSourceFile(
      'test.ts',
      `
      const data: any[][] = [[], [], ['', ''], []]
      `
    )
    const v = f.getVariableDeclarationOrThrow('data')
    const init = v.getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression)
    array2DInsert(init, 2, 3, [
      `{name: 'foo', friends: [{name: 'sd', friends: [], foo: function(a:number){return a+1}}]}`
    ])
    expect(f.getText()).toContain(
      `const data: any[][] = [[], [], [{name: 'foo', friends: [{name: 'sd', friends: [], foo: function(a:number){return a+1}}]}], []]`
    )
    let a = init.getElements()[2]
    if (TypeGuards.isArrayLiteralExpression(a)) {
      const a2 = a.getElements()[0]
      if (TypeGuards.isObjectLiteralExpression(a2)) {
        expect(
          removeWhites(
            a2
              .getProperties()
              .map(p => p.getText())
              .join(', m')
          )
        ).toContain(
          removeWhites(`name: 'foo', mfriends: [{name: 'sd', friends: [], foo: function(a:number){return a+1}}]`)
        )
      }
    }
  })
})
