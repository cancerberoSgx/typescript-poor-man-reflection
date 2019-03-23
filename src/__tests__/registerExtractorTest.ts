import { removeWhites } from 'misc-utils-of-mine-generic';
import Project from 'ts-simple-ast';
import { replaceFileFunctionCall } from '../replaceFileFunctionCall';
import { defaultOptions } from '../replaceProjectFunctionCall';

describe('Register()', () => {

  it('should build custom extractor inheriting from AbstractExtractor class', () => {
    const project = new Project({
      tsConfigFilePath: './tsconfig.json', addFilesFromTsConfig: true
    })
    project.createSourceFile(
      'src/__tests__/registerExtractorTest_test.ts',
      `
import {AbstractExtractor, ExtractorFn, Register } from '..'

interface NewExtractorOptions { name?: string }

class NewExtractorClass extends AbstractExtractor {
  protected freeArgumentNumber = 1
  extract(...[c, i, g, options, v]: Parameters<ExtractorFn>) {
    const config = this.getOptionsFromFistArg(c) || {}
    return this.buildExtractorResult(c, '"hello"', g, i, options, config)
  }
}
Register({
  name: 'NewExtractor', 
  extractor: new NewExtractorClass(), 
  fn: function <T = any>(config: NewExtractorOptions, r?: T): T {
    return r!
  }
})
// and from here I can use it: 
const c = NewExtractor()
console.log(c)
    `
    )
    replaceFileFunctionCall(project.getSourceFile('src/__tests__/registerExtractorTest_test.ts')!, {
      ...defaultOptions,
      moduleSpecifier: '__IGNORE__',
      ...{ extractorDataMode: 'asArgument' },
      project
    })
    // console.log(project.getSourceFile('src/__tests__/registerExtractorTest_test.ts')!.getText());
    expect(removeWhites(project.getSourceFile('src/__tests__/registerExtractorTest_test.ts')!.getText())).toContain(removeWhites(`const c = NewExtractor({}, "hello")`)
    )
  })
})
