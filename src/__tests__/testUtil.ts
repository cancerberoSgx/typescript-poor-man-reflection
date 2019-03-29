import { withoutExtension } from 'misc-utils-of-mine-generic'
import { Project, ScriptTarget } from 'ts-morph'
import { replaceFileFunctionCall } from '../replaceFileFunctionCall'
import { getFullOptions } from '../replaceProjectFunctionCall'
import { ReplaceProjectFunctionCallOptions } from '..'
import { Fn } from '../util'

interface EvaluateExtractorOptions {
  code: string
  extractorName: string
  extractorFn: Fn
  options: Partial<ReplaceProjectFunctionCallOptions>
}
export function evaluateExtractorTestCode<T = any>(
  options: EvaluateExtractorOptions
): {
  resultBefore: any
  result: T
  jsBefore: string
  jsCode: string
  project: Project
} {
  const folder = `tmp/tests_${new Date().getTime()}`
  const fileName = `${folder}/test.ts`
  // rm('-rf', 'tmp/tests')
  const { code, extractorName, extractorFn } = options
  const project = options.options.project || new Project({ compilerOptions: { target: ScriptTarget.ESNext } })
  project.createSourceFile(fileName, code)
  project.saveSync()

  const jsBefore = `
${extractorFn.toString()}
${
  project
    .emitToMemory()
    .getFiles()
    .find(f => withoutExtension(f.filePath).includes(withoutExtension(fileName)))!.text
}
// @ts-ignore
process.GGG=test()
`.trim()
  const resultBefore = evaluateAndError(jsBefore)
  replaceFileFunctionCall(project.getSourceFile(fileName)!, {
    ...getFullOptions({
      ...{
        extractorDataMode: 'prependVariable'
        // dontSaveGeneratedSourceFiles: true
      },
      ...(options.options || {})
    }),
    project
  })

  project.saveSync()
  const jsCode = `
${extractorFn.toString()} 
${
  project
    .emitToMemory()
    .getFiles()
    .find(f => withoutExtension(f.filePath).includes(withoutExtension(fileName)))!.text
}
// @ts-ignore
process.GGG=test()
`.trim()
  const result = evaluateAndError(jsCode)

  return {
    resultBefore,
    result,
    jsBefore,
    jsCode,
    project
  }
}
export function evaluateAndError<T = any>(s: string): T | undefined {
  try {
    eval(`${s}`) as T
    // @ts-ignore
    return process.GGG
  } catch (error) {
    // console.error(`Eval error ${error} ${(error.stack||'').split('\n').join('\n')}`);
    return error
  }
}
