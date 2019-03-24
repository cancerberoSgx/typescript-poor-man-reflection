import { flat, unique } from 'misc-utils-of-mine-generic'
import { notFalsy } from 'misc-utils-of-mine-typescript'
import {
  CallExpression,
  MethodDeclaration,
  PropertyDeclaration,
  SyntaxKind,
  TypeGuards,
  Node,
  Block,
  VariableDeclarationKind
} from 'ts-simple-ast'
import { getExtendsRecursively, notUndefined } from 'ts-simple-ast-extra'
import { getDefinitionsOf, extractCallExpressions } from '../../astUtil'
import {
  ExtractorGetter,
  ExtractorOptions,
  ExtractorResult,
  ReplaceProjectFunctionCallOptions,
  Extractor
} from '../../types'
import { AbstractExtractor } from '../abstractExtractor'
import { Fn, unquote, withoutExtension } from '../../util'
import { isExportedExtractor } from '../../extractors'

/**
```ts
class NewExtractorClass extends AbstractExtractor {
  protected freeArgumentNumber = 1
  extract(...[c, i, g, options, v]: Parameters<ExtractorFn>) {
    const config = this.getOptionsFromFistArg(c) || {}
    return this.buildExtractorResult(c, '"hello"', g, i, options, config)
  }
}
function NewExtractor<T = any>:(config: NewExtractorOptions, r?: T): T {
  return r!
}
Register({
  name: 'NewExtractor', 
  extractor: NewExtractorClass, 
  fn: NewExtractor
})
// and from here I can use it: 
NewExtractor()
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
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>
  ): ExtractorResult {
    const config = this.getOptionsFromFistArg<RegisterOptions>(n)
    return this.buildExtractorResult(n, 'undefined', getter, index, options, config)
  }
  protected parseOptionValue(name: string, value: Node | undefined): any {
    if (value && ['name'].includes(name)) {
      return unquote(value.getText())
    } else {
      return value
    }
  }

  beforeExtract(filePath: string, extractorName: string, options: Required<ReplaceProjectFunctionCallOptions>) {
    // HEADS UP: since these operations might be destructive (forgotten Nodes) we need to re-create the sourceFile and the CallExpressions here and in any subclass implementation
    const sourceFile = options.project && options.project.getSourceFile(filePath)
    if (sourceFile) {
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
        const newFile = sourceFile.copy(newFilePath, { overwrite: true })

        if (!TypeGuards.isSourceFile(c.getParent()!.getParent()!)) {
          console.error(
            `Require() call must be in top-level statement and this is not. Ignoring call and probably trouble ahead: "${c.getText()}".`,
            c.getText()
          )
        }
        //TODO: ts-simple-ast : how can I create a "export const c = 1" seems its not possible... not a big issue but...
        newFile.insertStatements(c.getParent()!.getChildIndex(), `export default ${s}`)
        const newExtractorStatements = extractCallExpressions(newFile, options.moduleSpecifier, [config.name])
            .map(c2 => [c2, ...c2.getAncestors()].find(c2 => TypeGuards.isSourceFile(c2.getParent()!)))
            .filter(notUndefined)
            .filter(TypeGuards.isStatement)
          //TODO: check if result is 0
        ;[newExtractorStatements[0], ...newExtractorStatements[0].getNextSiblings()]
          .filter(TypeGuards.isStatement)
          .forEach(s2 => {
            s2.remove()
          })

        extractCallExpressions(newFile, options.moduleSpecifier, [extractorName]).forEach(n => {
          const p = n.getParent()
          if (TypeGuards.isStatement(p)) {
            p.remove()
          } else {
            console.error('Require() call must be in an statement (ExpressionStatement) and this is not ', n.getText())
          }
        })

        newFile.saveSync()
        try {
          //HEADS UP: import() requires async and that would make things complex in replaceFileFunctionCall and since this is not an important issue we are managing with this not so elegant synch solution:
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
