import { removeWhites, randomIntBetween } from 'misc-utils-of-mine-generic'
import { replaceFileFunctionCall } from '../replaceFileFunctionCall'
import { defaultOptions } from '../replaceProjectFunctionCall'
import { Attribute } from '../extractors/core/attribute'
import { evaluateExtractorTestCode } from './testUtil'
import Project from 'ts-morph'

describe('AttributeExtractor', () => {
  it('dummy', () => {
    expect(1).toBe(1)
  })

  it('should get and set strings asArgument without errors', () => {
    const project = new Project()
    project.createSourceFile(
      'test.ts',
      `
class C{}
Attribute({target: C, name: 'attr1', value: 'hello'})
const v = Attribute({target: C, name: 'attr1'})
    `
    )
    replaceFileFunctionCall(project.getSourceFile('test.ts')!, {
      ...defaultOptions,
      ...{ extractorDataMode: 'asArgument' },
      project
    })

    expect(removeWhites(project.getSourceFile('test.ts')!.getText())).toContain(
      removeWhites(`
class C{}
Attribute({target: C, name: 'attr1', value: 'hello'}, "")
const v = Attribute({target: C, name: 'attr1'}, Object.values(fileVariables).find(v=>v.extractorName==='Attribute'&&v.name==="attr1"))
    `)
    )
  })

  it('should get and set strings asPrependVariable', () => {
    const project = new Project()
    project.createSourceFile(
      'test.ts',
      `
 class C{}
 Attribute({target: C, name: 'attr1', value: 'hello'})
 const v =  Attribute({target: C, name: 'attr1'})
     `
    )
    replaceFileFunctionCall(project.getSourceFile('test.ts')!, {
      ...defaultOptions,
      ...{ extractorDataMode: 'prependVariable' },
      project
    })
    // console.log(project.getSourceFile('test.ts')!.getText());
    expect(removeWhites(project.getSourceFile('test.ts')!.getText())).toContain(
      removeWhites(`
const __extractor_prepend__ = ["", ""]
const fileVariables: {[name:string]: any} = {
    "0_attr1_0": {value: 'hello', name: "attr1", index: 0, extractorName: "Attribute"}
}
class C{}
Attribute({target: C, name: 'attr1', value: 'hello'}, "")
const v =  Attribute({target: C, name: 'attr1'}, Object.values(fileVariables).find(v=>v.extractorName==='Attribute'&&v.name==="attr1"))
     `)
    )
  })

  it('should get and set non strings values asPrependVariable', () => {
    const project = new Project()
    project.createSourceFile(
      'test.ts',
      `
 class C{}
 Attribute({target: C, name: 'attr1', value: 'hello'})
 const v =  Attribute({target: C, name: 'attr1'})
     `
    )
    replaceFileFunctionCall(project.getSourceFile('test.ts')!, {
      ...defaultOptions,
      ...{ extractorDataMode: 'prependVariable' },
      project
    })
    // console.log(project.getSourceFile('test.ts')!.getText());
    expect(removeWhites(project.getSourceFile('test.ts')!.getText())).toContain(
      removeWhites(`
const __extractor_prepend__ = ["", ""]
const fileVariables: {[name:string]: any} = {
    "0_attr1_0": {value: 'hello', name: "attr1", index: 0, extractorName: "Attribute"}
}
class C{}
Attribute({target: C, name: 'attr1', value: 'hello'}, "")
const v =  Attribute({target: C, name: 'attr1'}, Object.values(fileVariables).find(v=>v.extractorName==='Attribute'&&v.name==="attr1"))
     `)
    )
  })

  it('should get and set non strings values asPrependVariable - same but with evaluateExtractorTestCode', () => {
    const r = evaluateExtractorTestCode({
      code: `
function test(){
  class C{}
  Attribute({target: C, name: 'attr2', value: function(q){return [q, q]}})
  const val = Attribute({target: C, name: 'attr2'})
  return val(4)
}`,
      extractorName: 'Attribute',
      extractorFn: Attribute,
      //  options: { extractorDataMode: 'folderFile' },
      options: { extractorDataMode: 'prependVariable' }
    })

    const f = r.project.getSourceFiles().find(f => f.getFilePath().includes('poor'))!
    // console.log(f.getText())
    // console.log(r.jsCode);
    console.log(typeof r.result, typeof r.result[0])

    expect(r.result).toEqual([4, 4])
    expect(r.result[1]).toEqual(4)

    expect(r.result[1]).toEqual(4)
  })

  //   xit('should get and set non strings values folderFile', () => {
  //     const n = randomIntBetween(10, 100),
  //       m = randomIntBetween(10, 100)
  //     const r = evaluateExtractorTestCode({
  //       code: `
  //   export function test(){
  //     class C{}
  //     Attribute({name: 'attr1', value: function(q){return q+${n}}})
  //     const val = Attribute({name: 'attr1'})
  //     const vv= val(${m})
  //     // console.log('SHSHSHSHSH', typeof vv, vv, 'hhshshshshs')
  //     return vv
  //   }`,
  //       extractorName: 'Attribute',
  //       extractorFn: Attribute,

  //       options: { extractorDataMode: 'folderFile' }
  //       // options: { extractorDataMode: 'prependVariable' },
  //     })

  //     // const f = r.project.getSourceFiles().find(f=>f.getFilePath().includes('poor'))!
  //     // console.log(f.getText())
  //     // console.log(r.jsCode);
  //     // console.log(r.jsBefore);
  //     // console.log(r.resultBefore);

  //     // r.project.getSourceFiles().map(f=>f.getText())
  //     expect(r.result).toBe(m + n)
  //   })

  xit('bind attributes to nodes', () => {
    const r = evaluateExtractorTestCode({
      code: `
      function test(){
        interface I{
          ff():void
        }
        class CC{m(){return 'fooo'}}
        Attribute<I>({ name: 'a3', value: ()=>CC})
        const val = Attribute<I>({ name: 'a3'}) as any as (()=>typeof CC)
        const TT = val()
        return new TT().m()
      }
`,
      extractorName: 'Attribute',
      extractorFn: Attribute,
      //  options: { extractorDataMode: 'folderFile' },
      options: { extractorDataMode: 'prependVariable' }
    })

    const f = r.project.getSourceFiles().find(f => f.getFilePath().includes('poor'))!
    console.log(f.getText())
    console.log(r.jsCode)
    console.log(typeof r.result)

    expect(r.result).toEqual([4, 4])
    // expect(r.result[1]).toEqual(4)

    // expect(r.result[1]).toEqual(4)
  })

  xit('should get and set nodes', () => {})
  xit('should get and set with type nodes', () => {})

  xit('should ?? with other value types (object, function, etc', () => {})

  xit('different nodes with same attribute names dont collapse', () => {})
})
