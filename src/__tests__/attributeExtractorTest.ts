import { removeWhites } from 'misc-utils-of-mine-generic'
import Project, { ScriptTarget } from 'ts-morph'
import { replaceFileFunctionCall } from '../replaceFileFunctionCall'
import { defaultOptions } from '../replaceProjectFunctionCall'
import { Attribute } from '../extractors/core/attribute';
import { evaluate, Fn, evaluateAndError } from '../util';

fdescribe('AttributeExtractor', () => {
  it('dummy', () => {
    expect(1).toBe(1)
  })

  it('should get and set strings asArgument', () => {
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


  it('should get and set strings asPrependVariable', () => {
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
      ...{ extractorDataMode: 'prependVariable' },
      project
    })
    expect(removeWhites(project.getSourceFile('test.ts')!.getText())).toContain(removeWhites(`
const __extractor_prepend__ = [{name: "attr1", node: 'hello'}]
class C{}
Attribute({target: C, name: 'attr1', value: 'hello'}, __extractor_prepend__[0])
     `))
  })


  fit('try to emit and evaluate here instead of spawning', () => {
    //  const f = project.createSourceFile(

    // )

let r : any
//     let r = evaluateExtractorTestCode(`
// function test(){
//   class C{}
//   return Attribute({target: C, name: 'attr1', value: function(q){return q+2}})
// }
// `, 'Attribute', Attribute)
//     console.log(r.resultBefore, r.resultAfter, r.jsBefore, r.jsAfter);
//     console.log(r.jsAfter);

    r = evaluateExtractorTestCode(`
function test(){
  class C{}
  Attribute({target: C, name: 'attr1', value: function(q){return q+2}})
  const val = Attribute({target: C, name: 'attr1'})
  return val(4)
}
`, 'Attribute', Attribute)
    // console.log(r.resultBefore, r.resultAfter, r.jsBefore, r.jsAfter);
// console.log(r.jsAfter);

  expect(r.resultAfter).toBe(6)


    // r= evaluateExtractorTestCode(`
    // function test(){
    //   class C{}
    //   return Attribute({target: C, name: 'attr1'})
    // }
    // `, 'Attribute', Attribute)
    // console.log(r);



    // console.log('EVAL: ',  eval(js), 'END');

    //      expect(removeWhites(project.getSourceFile('test.ts')!.getText())).toContain(removeWhites(`
    // const __extractor_prepend__ = [{name: "attr1", node: 'hello'}]
    // class C{}
    // Attribute({target: C, name: 'attr1', value: 'hello'}, __extractor_prepend__[0])
    //      `))
  })

  xit('should get and set nodes', () => { })
  xit('should get and set with type nodes', () => { })

  xit('should ?? with other value types (object, function, etc', () => { })

})
function evaluateExtractorTestCode(code: string, extractorName: string, extractorFn: Fn) {
  const project = new Project({ compilerOptions: { target: ScriptTarget.ESNext } })
  project.createSourceFile('test.ts', code)
  const jsBefore = `
(function(){
${extractorFn.toString()}
${project.emitToMemory().getFiles()[0].text}
return test()
  })()
`.trim();

  const resultBefore = evaluateAndError(jsBefore)
  replaceFileFunctionCall(project.getSourceFile('test.ts')!, {
    ...defaultOptions,
    ...{ extractorDataMode: 'prependVariable' },
    project
  })
  const jsAfter = `
(function(){
${extractorFn.toString()} 
${project.emitToMemory().getFiles()[0].text}
return test()
  })()
`.trim();
  const resultAfter = evaluateAndError(jsAfter)

  return { resultBefore, resultAfter, jsBefore: jsBefore.replace(/\\n/gm, '\n'), jsAfter: jsAfter.replace(/\\n/gm, '\n'), project }//, file:  project.getSourceFile('test.ts')!}

}

