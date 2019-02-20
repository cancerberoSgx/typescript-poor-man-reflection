import { Project, TypeGuards, CallExpression, SyntaxKind } from 'ts-simple-ast'
import { replaceFileFunctionCall } from '../replaceFileFunctionCall'

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
      replaceFileFunctionCall(project.getSourceFile('test.ts')!, {
        moduleSpecifier: 'my-custom-module',
        extracts: {
          Custom: n => '"custom"',
        },
      })
      const t2 = project.getSourceFile('test.ts')!.getText()
      expect(t2).toContain('var a = Custom<typeof f>("custom")')
    })

    it('should build custom extractor for extracting  all declarations in current source file', () => {
      const project = new Project()
      project.createSourceFile(
        'test.ts',
        `
describe('ff', ()=>{
  interface I{
    i:number
  }
  it('as', ()=>{
    class C implements I {
      i:number=0
      m(){
        var foo=1
        while(true){
          var t0 = Date.now()
        }
      }
    }
  })  
})
test('bar', ()=>{
  const var55 = 's'
})
const body = AllDeclarationsInThisFile<any>()
      `,
      )

      replaceFileFunctionCall(project.getSourceFile('test.ts')!, {
        extracts: {
          /** return all declarations that contribute with names and are inside a describe() it() or test() */
          AllDeclarationsInThisFile: (n: CallExpression) => {
            const declarations = n.getSourceFile().getDescendants().filter(d => {
              return TypeGuards.isCallSignatureDeclaration(d) ||
                TypeGuards.isClassDeclaration(d) ||
                TypeGuards.isClassLikeDeclarationBase(d) ||
                TypeGuards.isEnumDeclaration(d) ||
                TypeGuards.isVariableDeclarationList(d) ||
                TypeGuards.isFunctionDeclaration(d) ||
                TypeGuards.isInterfaceDeclaration(d) ||
                TypeGuards.isIndexSignatureDeclaration(d) ||
                TypeGuards.isNamespaceDeclaration(d) ||
                TypeGuards.isTypeAliasDeclaration(d)
            }).filter(d => {
              const block = d.getFirstAncestorByKind(SyntaxKind.Block)
              if (block && block.getParent() && block.getParent()!.getParent() && TypeGuards.isCallExpression(block.getParent()!.getParent()!)) {
                const ce = block.getParent()!.getParent()! as CallExpression
                const id = ce.getFirstChildByKind(SyntaxKind.Identifier)
                if (id) {
                  return ['describe', 'it', 'test'].includes(id.getText())
                }
              }
            })

            return `${JSON.stringify(declarations.map(d => d.getText()).join('\n'))}`
          }
        }
      })

      expect(project.getSourceFile('test.ts')!.getText()).toContain(`const body = AllDeclarationsInThisFile<any>(\"interface I{\\n    i:number\\n  }\\nclass C implements I {\\n      i:number=0\\n      m(){\\n        var foo=1\\n        while(true){\\n          var t0 = Date.now()\\n        }\\n      }\\n    }\\nconst var55 = 's'\"`)

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

      replaceFileFunctionCall(project.getSourceFile('test.ts')!)
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
      replaceFileFunctionCall(project.getSourceFile('test.ts')!)
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
      `,
      )
      replaceFileFunctionCall(project.getSourceFile('test.ts')!)
      expect(project.getSourceFile('test.ts')!.getText()).toContain(`var thisBlock = ThisBlockText<any>(\"\\n  var b = 1\\n  var thisBlock = ThisBlockText<any>()\\n\")`)
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

      replaceFileFunctionCall(project.getSourceFile('test.ts')!)
      expect(project.getSourceFile('test.ts')!.getText()).toContain(`const c = BodyText<typeof f>("const c = BodyText<typeof f>()")`)

    })
  })


})


