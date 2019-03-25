import { removeWhites } from 'misc-utils-of-mine-generic'
import { replaceFileFunctionCall } from '../replaceFileFunctionCall'
import { defaultOptions } from '../replaceProjectFunctionCall'
import { Attribute } from '../extractors/core/attribute'
import { evaluateExtractorTestCode } from './testUtil'
import Project from 'ts-morph'

describe('TestUtil', () => {
  it('dummy', () => {
    expect(1).toBe(1)
  })

  it('evaluateExtractorTestCode() should emit execute extractor and evaluate here instead of spawning', () => {
    const r = evaluateExtractorTestCode({
      code: `
function test(){
  class C{}
  Attribute({target: C, name: 'attr1', value: function(q){return q+2}})
  const val = Attribute({target: C, name: 'attr1'})
  const v = val(4)

  console.log('TestUtil', typeof v, v, 'TestUtil')
  return v
}`,
      extractorName: 'Attribute',
      extractorFn: Attribute,
       options: { extractorDataMode: 'prependVariable' },
    }    )
    expect(r.result).toBe(6)
  })





})
