import { removeWhites } from 'misc-utils-of-mine-generic'
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

  it('emit execute extractor and evaluate here instead of spawning', () => {
    let r: any

    r = evaluateExtractorTestCode(
      `
function test(){
  class C{}
  Attribute({target: C, name: 'attr1', value: function(q){return q+2}})
  const val = Attribute({target: C, name: 'attr1'})
  return val(4)
}
`,
      'Attribute',
      Attribute
    )

    expect(r.resultAfter).toBe(6)
  })

  xit('should get and set nodes', () => {})
  xit('should get and set with type nodes', () => {})

  xit('should ?? with other value types (object, function, etc', () => {})

  xit('different nodes with same attribute names dont collapse', () => {})

})
