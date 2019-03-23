import { AbstractExtractor } from '../../extractors/abstractExtractor'
import { ExtractorFn, ExtractorOptions, ExportedExtractor } from '../../types'
import { Node } from 'ts-simple-ast'
import { unquote } from '../../util'

class NewExtractorClass extends AbstractExtractor {
  protected freeArgumentNumber = 1
  extract(...[c, i, g, options, v]: Parameters<ExtractorFn>) {
    const config = this.getOptionsFromFistArg<NewExtractorOptions>(c)!
    return this.buildExtractorResult(c, `"hello ${config.name}"`, g, i, options, config)
  }
  protected parseOptionValue(name: string, value: Node | undefined): any {
    if (value && ['name'].includes(name)) {
      return unquote(value.getText())
    } else {
      return super.parseOptionValue(name, value)
    }
  }
}
export interface NewExtractorOptions extends ExtractorOptions {
  name: string
}
export function NewExtractor<T = any>(config: NewExtractorOptions, r?: T): T {
  return r!
}
export default {
  name: 'NewExtractor',
  extractor: new NewExtractorClass(),
  fn: NewExtractor
} as ExportedExtractor
