import { unique, quote } from 'misc-utils-of-mine-generic'
import Project, { CallExpression, TypeGuards, Node } from 'ts-simple-ast'
import {
  ExtractorClass,
  ExtractorGetter,
  ExtractorOptions,
  ExtractorResult,
  FileVariableAccessor,
  ReplaceProjectFunctionCallOptions
} from '../types'
import { Map, unquote } from '../util'

export abstract class AbstractExtractor implements ExtractorClass {
  protected defaultExtractorOptions: ExtractorOptions = {
    // outputMode: 'asReturnValue',
    // targetMode: 'self'
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
        const cc: Map<any> = {}
        o.getProperties().forEach(p => {
          if (TypeGuards.isPropertyAssignment(p)) {
            cc[p.getName()] = this.parseOptionValue(p.getName(), p.getInitializer())
          }
        })
        return cc as any
      }
    }
  }

  /**
   * since options need to be parsed from a literal object Node, subclasses might need to override
   * this method to parse their own options
   */
  protected parseOptionValue(name: string, value: Node | undefined): any {
    return value && ['outputMode', 'outputVariableName'].includes(name) ? unquote(value.getText()) : value
  }

  protected buildExtractorResult(
    n: CallExpression,
    output: string,
    getter: ExtractorGetter,
    index: number,
    extractOptions: Required<ReplaceProjectFunctionCallOptions>,
    extractorOptions?: ExtractorOptions
  ): ExtractorResult {
    if (extractorOptions && extractorOptions.outputMode === 'assignToVariable' && extractorOptions.outputVariableName) {
      const block = n.getFirstAncestor(TypeGuards.isBlock)
      if (block) {
        const varDecl = block.getVariableDeclaration(extractorOptions.outputVariableName)
        if (varDecl) {
          varDecl.setInitializer(output) // TODO: we could store previous initializer value as a variable so we can clean it
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
    if (extractOptions.extractorDataMode === 'asArgument') {
      return {
        argument: output
      }
    } else {
      return {
        argument: getter(index),
        prependToFile: output
      }
    }
  }
}
