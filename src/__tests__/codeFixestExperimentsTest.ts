import { removeWhites } from 'misc-utils-of-mine-generic'
import Project from 'ts-simple-ast'
import { applyAllSuggestedCodeFixes } from 'ts-simple-ast-extra'

describe('codeFixes', () => {
  it('should remove all unused things', () => {
    const project = new Project()
    project.createSourceFile(
      'test.ts',
      `
var a = 1
export function f<T>(a: number){}; 
const u = 9
    `
    )
    applyAllSuggestedCodeFixes(project, project.getSourceFile('test.ts')!, [6133], true)
    expect(removeWhites(project.getSourceFile('test.ts')!.getText())).toBe('export function f(){};')
  })

  it('infer all types', () => {
    const project = new Project()
    project.createSourceFile(
      'test.ts',
      `
var a
export function f(a, b){return b.length+a*3+1}
    `
    )
    applyAllSuggestedCodeFixes(project, project.getSourceFile('test.ts')!, [7044])
    expect(removeWhites(project.getSourceFile('test.ts')!.getText())).toBe(
      'var a export function f(a: number, b: { length: number; }){return b.length+a*3+1}'
    )
  })

  xit('infer all types', () => {
    const project = new Project()
    project.createSourceFile(
      'test.ts',
      `
var a, b, c=2
export function f(a, b){
  var non = 1
  return b.length+a*3+1
}
export class A {
  private m(){    
  }
  f(){
    function g(){ return b }
    return a
  }
}
export function g<T,G>(a, b){
  var g = 1
  return g*2
}
    `
    )
    applyAllSuggestedCodeFixes(project, project.getSourceFile('test.ts')!, [
      7043,
      7044,
      7045,
      7046,
      7047,
      7048,
      7049,
      7050,
      7051
    ])
    console.log(project.getSourceFile('test.ts')!.getText())
  })
})
