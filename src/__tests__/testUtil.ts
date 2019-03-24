import Project, { ScriptTarget } from 'ts-morph'
import { replaceFileFunctionCall } from '../replaceFileFunctionCall'
import { defaultOptions } from '../replaceProjectFunctionCall'
import { Fn, evaluateAndError } from '../util'

export function evaluateExtractorTestCode(code: string, extractorName: string, extractorFn: Fn) {
  const project = new Project({ compilerOptions: { target: ScriptTarget.ESNext } })
  project.createSourceFile('test.ts', code)
  const jsBefore = `
(function(){
${extractorFn.toString()}
${project.emitToMemory().getFiles()[0].text}
return test()
  })()
`.trim()
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
`.trim()
  const resultAfter = evaluateAndError(jsAfter)
  return {
    resultBefore,
    resultAfter,
    jsBefore: jsBefore.replace(/\\n/gm, '\n'),
    jsAfter: jsAfter.replace(/\\n/gm, '\n'),
    project
  }
}
