import { removeWhites } from 'misc-utils-of-mine-generic'
import Project from 'ts-simple-ast'
import { replaceFileFunctionCall } from '../replaceFileFunctionCall'
import { defaultOptions } from '../replaceProjectFunctionCall'

describe('ifExtractor', () => {
  it('dummy', () => {
    expect(1).toBe(1)
  })

  let project:Project
  beforeEach(()=>{
    project = new Project()
    project.createSourceFile( 'test.ts',
      `
function f1(){return 'f1'}
function f2(){return 'f2'}
const vv = If({condition: ()=>process.env.COMPILE_TIME==='yes yes yes', then: ()=>f1, else: ()=>f2, error: ()=>'ERROR'})
    `
    )
  })

    it('should return else value if false condition', () => {
      process.env.COMPILE_TIME = undefined
      replaceFileFunctionCall(project.getSourceFile('test.ts')!, {
        ...defaultOptions,
        ...{ extractorDataMode: 'asArgument' },
        project
      })
      // console.log(project.getSourceFile('test.ts')!.getText());
      expect(removeWhites(project.getSourceFile('test.ts')!.getText())).toContain(
        removeWhites(`
const vv = If({condition: ()=>process.env.COMPILE_TIME==='yes yes yes', then: ()=>f1, else: ()=>f2, error: ()=>'ERROR'}, ()=>f2)
        `)
      )
    })

    it('should return then value if true condition', () => {
       process.env.COMPILE_TIME = 'yes yes yes'
      replaceFileFunctionCall(project.getSourceFile('test.ts')!, {
        ...defaultOptions,
        ...{ extractorDataMode: 'asArgument' },
        project
      })
      // console.log(project.getSourceFile('test.ts')!.getText());
      expect(removeWhites(project.getSourceFile('test.ts')!.getText())).toContain(
        removeWhites(`
const vv = If({condition: ()=>process.env.COMPILE_TIME==='yes yes yes', then: ()=>f1, else: ()=>f2, error: ()=>'ERROR'}, ()=>f1)
`)
      )
    })

    xit('should return error value (if any) if error occurs in evaluation', () => {

    })
})

// we can declare the variable here, since the evaluation is at compile time it won't
// have any impact and will help prevent errors
// var COMPILE_TIME = undefined 
// function f1(){return 'f1'}
// function f2(){return 'f2'}
// const vv = If({condition: ()=>process.env.COMPILE_TIME , then: ()=>f1, else: ()=>f2, error: ()=>'ERROR'})
// console.log(vv, vv.toString())