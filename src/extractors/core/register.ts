import { unique } from 'misc-utils-of-mine-generic'
import { CallExpression, Node, SyntaxKind, TypeGuards } from 'ts-simple-ast'
import { notUndefined } from 'ts-simple-ast-extra'
import { extractCallExpressions } from '../../astUtil'
import { isExportedExtractor } from '../../extractors'
import { ExtractorGetter, ExtractorOptions, ExtractorResult, ReplaceProjectFunctionCallOptions } from '../../types'
import { Fn, unquote, withoutExtension } from '../../util'
import { AbstractExtractor } from '../abstractExtractor'
import { notFalsy } from 'misc-utils-of-mine-typescript'

/**
```ts
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
```
 */
export function Register<T = any>(config: RegisterOptions, t?: T): T {
  return t!
}

export interface RegisterOptions extends ExtractorOptions {
  name: string
  fn: Fn
  extractor: typeof AbstractExtractor
}

export class RegisterClass extends AbstractExtractor {
  protected freeArgumentNumber = 1

  protected parseOptionValue(name: string, value: Node | undefined): any {
    if (value && ['name'].includes(name)) {
      return unquote(value.getText())
    } else {
      return value
    }
  }

  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>
  ): ExtractorResult {
    const config = this.getOptionsFromFistArg<RegisterOptions>(n)
    return this.buildExtractorResult(n, 'undefined', getter, index, options, config)
  }

  beforeExtract(filePath: string, extractorName: string, options: Required<ReplaceProjectFunctionCallOptions>) {
    // HEADS UP: since these operations might be destructive (forgotten Nodes) we need to re-create the
    // sourceFile and the CallExpressions here and in any subclass implementation
    const sourceFile = options.project && options.project.getSourceFile(filePath)
    if (sourceFile) {
      // remove previously marked files that might not get deleted because of errors.
      const flagDeclaration = sourceFile.getInterface('__poor_man_register_flag_')
      if (flagDeclaration) {
        sourceFile.deleteImmediatelySync()
        return
      }
      const callExpressions = extractCallExpressions(sourceFile, options.moduleSpecifier, [extractorName])
      callExpressions.map(c => {
        const config = this.getOptionsFromFistArg<any>(c)! as { name: string; fn: Node; extractor: Node }
        const s = `{
            name: ${JSON.stringify(config.name)}, 
            fn: ${config.fn.getText()},
            extractor: ${config.extractor.getText()}
          }`
        const newFilePath = `${sourceFile.getDirectoryPath()}/${sourceFile.getBaseNameWithoutExtension()}${unique(
          '_require_'
        )}.ts`

        // we will create a copy of the file, at the same location, and export the object received in
        // `config`. Then save the file (!) and perform the same thing we did in main(), this is import()/
        // require() the new file and push it into options.extracts. We will also delete all calls to
        // registered extractors that might be.
        const newFile = sourceFile.copy(newFilePath, { overwrite: true })

        if (!TypeGuards.isSourceFile(c.getParent()!.getParent()!)) {
          console.error(
            `Require() call must be in top-level statement and this is not. Ignoring call and probably trouble ahead: "${c.getText()}".`,
            c.getText()
          )
        }
        //TODO: ts-simple-ast : how can I create a "export const c = 1" seems its not possible... not a big
        // issue but... add an export default statement
        newFile.insertStatements(c.getParent()!.getChildIndex(), `export default ${s}`)

        // remove all statements from the first NewExtractor() call to the end. The contract is that you
        // cannot call Register() once you have called an registered extractor.
        const newExtractorStatements = extractCallExpressions(newFile, options.moduleSpecifier, [config.name])
            .map(c2 => [c2, ...c2.getAncestors()].find(c2 => TypeGuards.isSourceFile(c2.getParent()!)))
            .filter(notUndefined)
            .filter(TypeGuards.isStatement)
          //TODO: check if result is 0
        ;[
          ...(newExtractorStatements[0] ? [newExtractorStatements[0]] : []),
          ...(newExtractorStatements[0] ? newExtractorStatements[0].getNextSiblings() : [])
        ]
          .filter(notFalsy)
          .filter(TypeGuards.isStatement)
          .forEach(s2 => {
            s2.remove()
          })
        // remove the Register() calls that registered this `config.name`
        extractCallExpressions(newFile, options.moduleSpecifier, [extractorName])
          .filter(c => c.getFirstChildByKind(SyntaxKind.Identifier)!.getText() === extractorName)
          .forEach(n => {
            const p = n.getParent()
            if (TypeGuards.isStatement(p)) {
              p.remove()
            } else {
              console.error(
                `Require() call must be in top-level statement and this is not. Ignoring call and probably trouble ahead: "${n.getText()}".`,
                n.getText()
              )
            }
          })

        // add a mark in the generated file so we can remove it later in case of exceptions
        if (!newFile.getInterface('__poor_man_register_flag_')) {
          newFile.addInterface({
            name: '__poor_man_register_flag_'
          })
        }
        newFile.saveSync()
        try {
          // HEADS UP: import() requires async and that would make things complex in replaceFileFunctionCall
          // and since this is not an important issue we are managing with this not so elegant synch solution:
          const e = require(withoutExtension(newFile.getFilePath()))
          const ex = e.default
          if (isExportedExtractor(ex)) {
            options.extracts[ex.name] = ex.extractor
          }
          newFile.deleteImmediatelySync()
        } catch (error) {
          console.error(
            `There was an error while trying to import Exported Extractor ${config.name}: `,
            error,
            error.stack
          )
        }
      })
    }
  }
}
