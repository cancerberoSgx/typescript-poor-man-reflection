import {Project} from 'ts-simple-ast'
import {replaceFunctionCall} from '../replaceFunctionCall'

describe('extractors', () => {
  describe('custom extractors', () => {
    it('should build my custom function name and extract', () => {
      const project = new Project()
      project.createSourceFile(
        'test.ts',
        `
  import {Custom} from 'my-custom-module'
  function f<I>() {
    type Member<I> = keyof I
  }
  var a = Custom<typeof f>()
  `,
      )
      replaceFunctionCall(project.getSourceFile('test.ts')!, {
        moduleSpecifier: 'my-custom-module',
        extracts: {
          Custom: n => '"custom"',
        },
      })
      const t2 = project.getSourceFile('test.ts')!.getText()
      expect(t2).toContain('var a = Custom<typeof f>("custom")')
    })
  })

  describe('NodeText', () => {
    it('should get referenced node text', () => {
      const project = new Project()
      project.createSourceFile(
        'test.ts',
        `
NodeText<typeof f>()
function f(){
type T = any
}
      `,
      )

      replaceFunctionCall(project.getSourceFile('test.ts')!)
      expect(project.getSourceFile('test.ts')!.getText()).toContain(
        `NodeText<typeof f>(\"function f(){\\ntype T = any\\n}\")`,
      )
    })
  })

  describe('BodyText', () => {
    it('should get function body text', () => {
      const project = new Project()
      project.createSourceFile(
        'test.ts',
        `
BodyText<typeof f>()
function f(){
type T = any
}
      `,
      )
      replaceFunctionCall(project.getSourceFile('test.ts')!)
      expect(project.getSourceFile('test.ts')!.getText()).toContain(`BodyText<typeof f>("type T = any")`)
    })
  })

  describe('nested', () => {
    it('should extract node body that calls an extractor', () => {
      const project = new Project()
      project.createSourceFile(
        'test.ts',
        `
const body = BodyText<typeof f>()
function f(){
  const c = BodyText<typeof f>()
}
      `,
      )
      replaceFunctionCall(project.getSourceFile('test.ts')!)
      expect(project.getSourceFile('test.ts')!.getText()).toContain(`const c = BodyText<typeof f>("const c = BodyText<typeof f>()")`)
      
    })
  })
})
