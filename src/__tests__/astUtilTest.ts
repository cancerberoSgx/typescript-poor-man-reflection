import { Project, SyntaxKind } from 'ts-simple-ast';
import { array2DInsert } from '../astUtil';

describe('astUtil', () => {
  describe('array2DInsert', () => {
    it('put should place data at given fileId / index in the array literal creating empty elements if necessary', () => {
      const project = new Project()
      const f = project.createSourceFile(
        'test.ts',
        `
      const data: any[][] = []
      `
      )
      const v = f.getVariableDeclarationOrThrow('data')
      const init = v.getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression)
      array2DInsert(init, 2, 3, [`{text: 'Array<string>', prefix: 'interface I{}'}`])
      expect(f.getText()).toContain(
        `const data: any[][] = [[], [], [{text: 'Array<string>', prefix: 'interface I{}'}]]`
      )
    })
  })
})
