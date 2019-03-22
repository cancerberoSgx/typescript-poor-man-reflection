import {
  ExtractOptions,
  ExtractorOptions,
  ExtractorClass,
  ExtractorResult,
  ExtractorGetter,
  ReplaceProjectFunctionCallOptions,
  FileVariableAccessor
} from '../types'
import Project, { CallExpression, TypeGuards, Block } from 'ts-simple-ast'
import { parseJSON, unique } from 'misc-utils-of-mine-generic'
import { evaluate } from '../util'

export type AbstractExtractorOutputMode = 'addStringVariableStatement' | 'asReturnValue'
export interface AbstractExtractorOptions extends ExtractorOptions {
  outputMode?: AbstractExtractorOutputMode
  targetMode?: 'self' | 'definition' | 'allReferences'
}

export abstract class AbstractExtractor implements ExtractorClass {
  protected defaultAbstractExtractorOptions: AbstractExtractorOptions = {
    outputMode: 'asReturnValue',
    targetMode: 'self'
  }

  // constructor(){}
  // protected options: ExtractOptions|undefined
  // abstract extract(options: ExtractOptions): string | ExtractorResult

  abstract extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>,
    variableAccessor: FileVariableAccessor,
    project?: Project
  ): ExtractorResult

  // constructor(protected props: AbstractExtractorOptions, protected options: ExtractOptions) {   }

  /**
   * gets options from first argument or undefined.
   *
   * TODO: support references
   *
   * TODO: dont eval
   */
  protected getOptionsFromFistArg<T extends AbstractExtractorOptions = AbstractExtractorOptions>(
    options: ExtractOptions
  ): T | undefined {
    if (options.n.getArguments().length) {
      const o = options.n.getArguments()[0]
      if (TypeGuards.isObjectLiteralExpression(o)) {
        const value = evaluate(o.getText(), undefined)
        return value
      }
    }
    // if (options.n.getArguments()[0].getType().isLiteral() && options.n.getArguments()[0].getType().isObject()) {
    //   const r: Map<any> = {};
    //   options.n.getArguments()[0].getType()!.getProperties().map(p => { r[p.getName()] = p.getValueDeclaration(); });
    //   return r;
    // }
  }
  protected buildExtractorResult(
    n: CallExpression,
    output: string,
    outputMode: AbstractExtractorOutputMode = 'asReturnValue'
  ) {
    if (outputMode === 'addStringVariableStatement') {
      const statement = n.getFirstAncestor(a => TypeGuards.isBlock(a.getParent()))
      if (statement) {
        ;(statement.getParent() as Block).insertVariableStatement(statement.getChildIndex() + 1, {
          declarations: [{ name: unique('ast_output_'), type: 'string', initializer: `\`${output}\`` }]
        })
      }
      return {
        argument: n.getArguments()[1].getText()
      }
    } else {
      return { argument: output }
    }
  }
}

// function objectMap(o: { [k: string]: any }, f: (k: string, v: any) => any) {
//   var r: any = {}
//   Object.keys(o).forEach(k => {
//     r[k] = f(k, o[k])
//   })
//   return r
// }

export type Map<V> = { [key: string]: V }
