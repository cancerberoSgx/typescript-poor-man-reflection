import { unique } from 'misc-utils-of-mine-generic'
import Project, { Block, CallExpression, TypeGuards, SyntaxKind } from 'ts-simple-ast'
import {
  ExtractOptions,
  ExtractorClass,
  ExtractorGetter,
  ExtractorOptions,
  ExtractorOutputMode,
  ExtractorResult,
  FileVariableAccessor,
  ReplaceProjectFunctionCallOptions
} from '../types'
import { evaluate } from '../util'

export abstract class AbstractExtractor implements ExtractorClass {
  protected defaultExtractorOptions: ExtractorOptions = {
    outputMode: 'asReturnValue',
    targetMode: 'self'
  }

  abstract extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>,
    variableAccessor: FileVariableAccessor,
    project?: Project
  ): ExtractorResult

  /**
   * Get options from first argument or undefined.
   *
   * TODO: support references
   *
   * TODO: dont eval
   */
  protected getOptionsFromFistArg<T extends ExtractorOptions = ExtractorOptions>(n: CallExpression): T | undefined {
    if (n.getArguments().length) {
      const o = n.getArguments()[0]
      if (TypeGuards.isObjectLiteralExpression(o)) {
        const value = evaluate(o.getText(), undefined)
        return value
      }
    }
  }

  protected buildExtractorResult(n: CallExpression, output: string, options?: ExtractorOptions) {
    if (!options || !options.outputMode || options.outputMode === 'asReturnValue') {
      return { argument: output }
    }
    // else if (options && options.outputMode === 'assignToVariableDeclaration'&& options.outputVariableName) {
    //   const statement = n.getFirstAncestor(a => TypeGuards.isBlock(a.getParent()))
    //   if (statement) {
    //     (statement.getParent() as Block).insertVariableStatement(statement.getChildIndex() + 1, {
    //       declarations: [{ name: unique('ast_output_'), type: 'string', initializer: `\`${output}\`` }]
    //     })
    //   }
    // }
    else if (options && options.outputMode === 'assignToVariable' && options.outputVariableName) {
      const block = n.getFirstAncestor(TypeGuards.isBlock)
      if (block) {
        const varDecl = block.getVariableDeclaration(options.outputVariableName)
        if (varDecl) {
          varDecl.setInitializer(output)
        } else {
          const statement = n.getFirstAncestor(a => TypeGuards.isBlock(a.getParent()))
          if (statement) {
            block.insertVariableStatement(statement.getChildIndex() + 1, {
              declarations: [{ name: unique('ast_output_'), initializer: output }]
            })
          }
        }
      }
    }
    return {
      argument: n.getArguments()[1].getText()
    }
  }

  // afterWriteExtractorData(n: CallExpression, index: number, options: Required<ReplaceProjectFunctionCallOptions>, ) {
  //   const userOptions = this.getOptionsFromFistArg(n)
  //   if (userOptions && userOptions.removeMe) {
  //     // n.replaceWithText('')
  //     // const next = n.getNextSibling()
  //     // if (next && next.getKind() === SyntaxKind.CommaToken) {
  //     //   next.replaceWithText('')
  //     // }
  //   }
  // }
}
