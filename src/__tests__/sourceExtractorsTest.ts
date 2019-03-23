import { removeWhites } from 'misc-utils-of-mine-generic';
import { Project } from 'ts-simple-ast';
import { replaceFileFunctionCall } from '../replaceFileFunctionCall';

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

  it('should be able to self destroy', () => {
    const project = new Project()
    project.createSourceFile(
      'test1.ts',
      `import {foo} from './foo1'
        import {bar} from './bar'
        OrganizeImports({path: '**/test*.ts', removeMe: true})
        export function f (){ return Math.random() * bar }`
    )
    replaceFileFunctionCall(project.getSourceFile('test1.ts')!, {
      extractorDataMode: 'asArgument',
      project
    })
    expect(removeWhites(project.getSourceFile('test1.ts')!.getText()).trim()).toBe(
      removeWhites(`
        import { bar } from './bar';
        export function f (){ return Math.random() * bar }
        `)
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

  xit('should remove unused symbols of given files only', () => { })
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

  xit('should infer types on given files only', () => { })
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
})



describe('Overrides', () => {
  it('should generate type error if not', () => {
    const project = new Project()
    project.createSourceFile(
      'test.ts',
      `
          class A {
            p=5
            k=9
            j=9
            m(){}
            a(){}
          }
          class B extends A {
            p=Overrides(3)
            n(){}
            m(){
              Overrides()
            }
          }
          class C extends B {
            j=Overrides(3)
            k(){
              Overrides()
            }
            a(){
              Overrides()
            }
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
          class A {
            p=5
            k=9
            j=9
            m(){}
            a(){}
          }
          class B extends A {
            p=Overrides(3, {}, undefined)
            n(){}
            m(){
              Overrides({}, {}, undefined)        
              }
            }      
          class C extends B {
            j=Overrides(3, {}, undefined)
            k(){
              Overrides({}, 'Not Overriding anything', undefined)
            }
            a(){
              Overrides({}, {}, undefined)
            } 
          }
`
      )
    )
  })
})