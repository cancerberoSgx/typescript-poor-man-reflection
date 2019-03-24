import { CallExpression, Node, TypeGuards } from 'ts-morph'
import { extractInterface } from 'ts-simple-ast-extra'
import { ExtractorGetter, ExtractorOptions, ExtractorResult, ReplaceProjectFunctionCallOptions } from '../../types'
import { unquote } from '../../util'
import { AbstractExtractor } from '../abstractExtractor'

/**
 * Will create a new interface declaration with given name, that given class will implement. The new interface will have all class' public methods and properties.
 * 
 * If destFile is provided then the interface will be created in that file. If exists it will be created at the bottom. If not provided then the interface will be created when this call expression is.
 * 
 * If target is not provided or not found, it will use the next ClassDeclaration sibling node if any or silently fail
 * 
 * Returns `undefined`.

```ts
ExtractInterface({target: C, destFile: 'newOrExistingFile.ts', name: 'NewInterface'})
ExtractInterface<C>({destFile: 'newOrExistingFile.ts'})
```
 */
interface ExtractInterfaceOptions extends ExtractorOptions {
  /**
   * If destFile is provided then the interface will be created in that file. If exists it will be created at the bottom. If not provided then the interface will be created when this call expression is.
   */
  destFile?: string
  /**
   * Name for the new interface
   */
  name?: string
  /**
   * If true it will remove jsdocs from class since now they will be on the interface
   */
  removeDocs?: boolean

  //TODO: constructor signatures ? move jsdoc ?
}

export const ExtractInterface = function<T = any>(config: ExtractInterfaceOptions, t?: any) {
  return t!
}

export class ExtractInterfaceClass extends AbstractExtractor {
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>
  ): ExtractorResult {
    const config = this.getOptionsFromFistArg<ExtractorOptions>(n) || {}
    let target: Node | undefined = this.getTarget(n, config)
    let output = this.buildOutput(target || n, config, options) as any
    return this.buildExtractorResult(n, output, getter, index, options, config)
  }
  protected buildOutput(
    target: Node,
    config: ExtractInterfaceOptions,
    options: Required<ReplaceProjectFunctionCallOptions>
  ) {
    if (!TypeGuards.isClassDeclaration(target)) {
      //TODO: doesn't work
      target = target.getNextSiblings().find(TypeGuards.isClassDeclaration)!
      if (!target) {
        return '"Class Declaration not found"'
      }
    }
    if (TypeGuards.isClassDeclaration(target)) {
      extractInterface(target, target.getSourceFile(), config.name, config.removeDocs)
    }
    return 'undefined'
  }

  protected parseOptionValue(name: string, value: Node | undefined): any {
    if (value && ['destFile', 'name'].includes(name)) {
      return unquote(value.getText())
    } else if (value && ['removeDocs'].includes(name)) {
      return value.getText() === 'true' ? true : false
    } else {
      return super.parseOptionValue(name, value)
    }
  }

  protected freeArgumentNumber = 1
}
