import { removeWhites } from 'misc-utils-of-mine-generic'
import { Project } from 'ts-simple-ast'
import { replaceFileFunctionCall } from '../replaceFileFunctionCall'

describe('extractors', () => {
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
      `
      )
      replaceFileFunctionCall(project.getSourceFile('test.ts')!, { extractorDataMode: 'asArgument' })
      expect(project.getSourceFile('test.ts')!.getText()).toContain(
        `NodeText<typeof f>(\"function f(){\\ntype T = any\\n}\")`
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
      `
      )
      replaceFileFunctionCall(project.getSourceFile('test.ts')!, { extractorDataMode: 'asArgument' })
      expect(project.getSourceFile('test.ts')!.getText()).toContain(`BodyText<typeof f>("type T = any")`)
    })
  })

  describe('ThisBlockText', () => {
    it('should get function body text', () => {
      const project = new Project()
      project.createSourceFile(
        'test.ts',
        `
var a = 1
function f(){
  var b = 1
  var thisBlock = ThisBlockText<any>()
}
      `.trim()
      )
      replaceFileFunctionCall(project.getSourceFile('test.ts')!, { extractorDataMode: 'asArgument' })
      expect(removeWhites(project.getSourceFile('test.ts')!.getText())).toContain(
        `var thisBlock = ThisBlockText<any>("\\n var b = 1\\n var thisBlock = ThisBlockText<any>()\\n")`
      )
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
      `.trim()
      )

      replaceFileFunctionCall(project.getSourceFile('test.ts')!, { extractorDataMode: 'asArgument' })
      expect(removeWhites(project.getSourceFile('test.ts')!.getText())).toContain(
        `const c = BodyText<typeof f>("const c = BodyText<typeof f>()")`
      )
    })
  })
})
