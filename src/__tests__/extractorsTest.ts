import { removeWhites } from 'misc-utils-of-mine-generic'
import { CallExpression, Project, SyntaxKind, TypeGuards } from 'ts-simple-ast'
import { AbstractExtractor } from '../extractors/abstractExtractor'
import { replaceFileFunctionCall } from '../replaceFileFunctionCall'
import { defaultOptions } from '../replaceProjectFunctionCall'
import { ExtractorFn } from '../types'

describe('extractors', () => {
  describe('customExtractors', () => {
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
  `
      )
      replaceFileFunctionCall(project.getSourceFile('test.ts')!, {
        ...defaultOptions,
        extractorDataMode: 'asArgument',
        moduleSpecifier: 'my-custom-module',
        extracts: {
          Custom: n => '"custom"'
        }
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
      `
      )

      replaceFileFunctionCall(project.getSourceFile('test.ts')!, {
        ...defaultOptions,
        ...{ extractorDataMode: 'asArgument' },
        extracts: {
          /** return all declarations that contribute with names and are inside a describe() it() or test() */
          AllDeclarationsInThisFile: (n: CallExpression) => {
            const declarations = n
              .getSourceFile()
              .getDescendants()
              .filter(d => {
                return (
                  TypeGuards.isCallSignatureDeclaration(d) ||
                  TypeGuards.isClassDeclaration(d) ||
                  TypeGuards.isClassLikeDeclarationBase(d) ||
                  TypeGuards.isEnumDeclaration(d) ||
                  TypeGuards.isVariableDeclarationList(d) ||
                  TypeGuards.isFunctionDeclaration(d) ||
                  TypeGuards.isInterfaceDeclaration(d) ||
                  TypeGuards.isIndexSignatureDeclaration(d) ||
                  TypeGuards.isNamespaceDeclaration(d) ||
                  TypeGuards.isTypeAliasDeclaration(d)
                )
              })
              .filter(d => {
                const block = d.getFirstAncestorByKind(SyntaxKind.Block)
                if (
                  block &&
                  block.getParent() &&
                  block.getParent()!.getParent() &&
                  TypeGuards.isCallExpression(block.getParent()!.getParent()!)
                ) {
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

      expect(project.getSourceFile('test.ts')!.getText()).toContain(
        `const body = AllDeclarationsInThisFile<any>(\"interface I{\\n    i:number\\n  }\\nclass C implements I {\\n      i:number=0\\n      m(){\\n        var foo=1\\n        while(true){\\n          var t0 = Date.now()\\n        }\\n      }\\n    }\\nconst var55 = 's'\"`
      )
    })

    it('should build custom extractor inheriting from AbstractExtractor class', () => {
      const project = new Project()
      project.createSourceFile(
        'test.ts',
        `
function previous(){}
Destroyer({target: next})
function next(){}
function f(){}
Destroyer({target: b, removeMe: true})
var a = 1, b = 2, c = 'foo'
    `
      )

      class DestroyerClass extends AbstractExtractor {
        extract(...[c, i, g, options, v]: Parameters<ExtractorFn>) {
          const config = this.getOptionsFromFistArg(c) || {}
          const target = this.getTarget(c, config)
          if (target && (TypeGuards.isFunctionDeclaration(target) || TypeGuards.isVariableDeclaration(target))) {
            target.remove()
          }
          return this.buildExtractorResult(c, 'undefined', g, i, options, config)
        }
        protected freeArgumentNumber = 1
      }
      replaceFileFunctionCall(project.getSourceFile('test.ts')!, {
        ...defaultOptions,
        ...{ extractorDataMode: 'asArgument' },
        extracts: {
          Destroyer: new DestroyerClass()
        }
      })
      expect(removeWhites(project.getSourceFile('test.ts')!.getText())).toContain(
        removeWhites(
          `
function previous(){}
Destroyer({target: next}, undefined)

function f(){}

var a = 1, c = 'foo'
`
        )
      )
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

  describe('ProjectFiles', () => {
    it('should extract this project source files names', () => {
      const project = new Project()
      project.createSourceFile('test.ts', `const projectFiles = ProjectFiles()`)
      project.createSourceFile('test2.ts', `export 1`)
      project.createSourceFile('foo/bar/file.ts', `export 2`)
      replaceFileFunctionCall(project.getSourceFile('test.ts')!, {
        extractorDataMode: 'asArgument',
        project
      })
      expect(removeWhites(project.getSourceFile('test.ts')!.getText())).toContain(
        `const projectFiles = ProjectFiles(["test.ts","test2.ts","foo/bar/file.ts"])`
      )
    })
  })

  describe('OrganizeImports', () => {
    it('should organize imports of current file if none given', () => {
      const project = new Project()
      project.createSourceFile('test.ts', `import {foo} from './foo'; const count = OrganizeImports()`)
      replaceFileFunctionCall(project.getSourceFile('test.ts')!, {
        extractorDataMode: 'asArgument',
        project
      })
      expect(removeWhites(project.getSourceFile('test.ts')!.getText()).trim()).toBe(
        `const count = OrganizeImports({}, undefined)`
      )
    })

    it('should organize imports of given files only', () => {
      const project = new Project()
      project.createSourceFile(
        'test1.ts',
        `import {foo} from './foo1'; const count = OrganizeImports({path: '**/test*.ts'}); export Math.random()`
      )
      project.createSourceFile('test2.ts', `import {foo} from './foo2'; export Math.random()`)
      project.createSourceFile('noTest.ts', `import {foo} from './foo3'; export Math.random()`)
      replaceFileFunctionCall(project.getSourceFile('test1.ts')!, {
        extractorDataMode: 'asArgument',
        project
      })
      expect(removeWhites(project.getSourceFile('test1.ts')!.getText()).trim()).toBe(
        `const count = OrganizeImports({path: '**/test*.ts'}, undefined); export Math.random()`
      )
      expect(removeWhites(project.getSourceFile('test2.ts')!.getText()).trim()).toBe(`export Math.random()`)
      expect(removeWhites(project.getSourceFile('noTest.ts')!.getText()).trim()).toBe(
        `import {foo} from './foo3'; export Math.random()`
      )
    })
  })

  describe('RemoveUnused', () => {
    it('should remove unused symbols of current file if none given', () => {
      const project = new Project()
      project.createSourceFile(
        'test.ts',
        `
import {foo} from 'foo'
var a=1
const count = 0
export function f<T>(a: number){}
export 5
RemoveUnused()
export class C {
  private m(p:string){}
  fo(){}
}
      `
      )
      replaceFileFunctionCall(project.getSourceFile('test.ts')!, {
        extractorDataMode: 'asArgument',
        project
      })
      const t = removeWhites(project.getSourceFile('test.ts')!.getText()).trim()
      expect(t).toBe(`export function f(){} export 5 RemoveUnused({}, undefined) export class C { fo(){} }`)
    })

    xit('should remove unused symbols of given files only', () => {})
  })

  describe('InferTypes', () => {
    it('should infer types from usage on current file if none given', () => {
      const project = new Project()
      project.createSourceFile(
        'test.ts',
        `
function f(a){return a+1}
function g(y){return y+'world'}
var a, b, c
a=new Date()
g(b)
c=f(1)
InferTypes()
      `
      )
      replaceFileFunctionCall(project.getSourceFile('test.ts')!, {
        extractorDataMode: 'asArgument',
        project
      })
      const t = removeWhites(project.getSourceFile('test.ts')!.getText()).trim()
      expect(t).toBe(
        `function f(a: number){return a+1} function g(y: string){return y+'world'} var a: Date, b: string, c: number a=new Date() g(b) c=f(1) InferTypes({}, undefined)`
      )
    })

    xit('should infer types on given files only', () => {})
  })

  describe('ExtractInterface', () => {
    it('should infer member types and copy docs and only process public members', () => {
      const project = new Project()
      project.createSourceFile(
        'test.ts',
        `
ExtractInterface<A>()
interface I<T=any>{
  p:T
}
/** comment1 */
class A implements I<number> {
  /** comment2 */
  p=9
  protected h=0
  m(i:number){
  }
  n(){
    return new Date()
  }
  private g(){return 1}
}
      `
      )
      replaceFileFunctionCall(project.getSourceFile('test.ts')!, {
        extractorDataMode: 'asArgument',
        project
      })
      // console.log(project.getSourceFile('test.ts')!.getText());

      const t = removeWhites(project.getSourceFile('test.ts')!.getText()).trim()
      expect(t).toBe(
        removeWhites(
          `
ExtractInterface<A>({}, undefined)
interface I<T=any>{
  p:T
}
/** comment1 */
class A implements IA {
  /** comment2 */
  p=9
  protected h=0
  m(i:number){
  }
  n(){          
    return new Date()
  }        
  private g(){return 1}
}

/**
 * comment1
 */
interface IA extends I<number> {
  /**
   * comment2
   */
  p: number;
  /**
   * TODO: Document
   */
  m(i: number): void;
  /**
   * TODO: Document
   */
  n(): Date;
}
        `
        )
      )
    })
  })

  describe('Exec', () => {
    it('should execute commands and return status code and stdout', () => {
      const project = new Project()
      project.createSourceFile(
        'test.ts',
        `
const {code, stdout, stderr} = Exec({command: 'npm -v'})
const {code, stdout, stderr} = Exec({command: 'ls wrong*'})
      `
      )
      replaceFileFunctionCall(project.getSourceFile('test.ts')!, {
        extractorDataMode: 'asArgument',
        project
      })

      const t = removeWhites(project.getSourceFile('test.ts')!.getText()).trim()
      expect(t).toBe(
        removeWhites(
          `
const {code, stdout, stderr} = Exec({command: 'npm -v'}, "{code: 0, stdout: \\"6.7.0\\n\\", stderr: \\"\\"}")
const {code, stdout, stderr} = Exec({command: 'ls wrong*'}, "{code: 2, stdout: \\"\\", stderr: \\"ls: cannot access 'wrong*': No such file or directory\\n\\"}")`
        )
      )
    })

    xit('should infer types on given files only', () => {})
  })
})
