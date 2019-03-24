import { removeWhites } from 'misc-utils-of-mine-generic'
import Project from 'ts-morph'
import { replaceFileFunctionCall } from '../replaceFileFunctionCall'
import { defaultOptions } from '../replaceProjectFunctionCall'

fdescribe('AttributeExtractor', () => {
  it('dummy', () => {
    expect(1).toBe(1)
  })

  it('should get and set strings', () => {
   const project = new Project()
    project.createSourceFile(
      'test.ts',
      `
class C{}
Attribute({target: C, name: 'attr1', value: 'hello'})
    `
    )
    replaceFileFunctionCall(project.getSourceFile('test.ts')!, {
      ...defaultOptions,
      ...{ extractorDataMode: 'asArgument' },
      project
    })

    expect(removeWhites(project.getSourceFile('test.ts')!.getText())).toContain(removeWhites(`
class C{}
Attribute({target: C, name: 'attr1', value: 'hello'}, {name: "attr1", node: 'hello'})
    `))
  })


  xit('should get and set nodes', () => {})
  xit('should get and set with type nodes', () => {})

  xit('should ?? with other value types (object, function, etc', () => {})

})
