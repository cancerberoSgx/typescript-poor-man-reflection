import { quote } from 'misc-utils-of-mine-generic';
import { CallExpression, Node, TypeGuards } from 'ts-simple-ast';
import { ExtractorGetter, ExtractorOptions, ExtractorResult, ReplaceProjectFunctionCallOptions } from '../../types';
import { unquote } from '../../util';
import { AbstractExtractor } from '../abstractExtractor';

/**
 * Usage: 
 * 
```ts
const aNode = unknownAPI(); 
const type1 = NodeType({target: aNode})
const type2 = NodeType<typeof unknownAPI>({inferenceMode: 'contextual'})
```
 */
export const NodeType = function<T = any>(config: NodeTypeOptions, t?: any) {
  return t!
}

export interface NodeTypeOptions extends ExtractorOptions {
  /**
   * How the type should be inferred from given node.
   *
   * If `apparent` (default) then it TypeChecker's `getApparentType()` method will be used
   *
   * If `contextual` it will use TypeChecker's `getContextualType()` method
   *
   * If `none` it will just print the text of node's direct type
   */
  inferenceMode?: InferenceNode
}

type InferenceNode = 'apparent' | 'none' | 'contextual'
// | 'returnTypeOfSignature'
// | 'getTypeOfSymbolAtLocation'
// | 'getTypeAtLocation'

export class NodeTypeClass extends AbstractExtractor {
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>,
  ): ExtractorResult {
    const config = this.getOptionsFromFistArg<NodeTypeOptions>(n) || {}
    let target: Node | undefined = this.getTarget(n, config)
    let output = this.buildType(target || n, config, options) as any
    return this.buildExtractorResult(n, output, getter, index, options, config)
  }

  protected buildType(n: Node, config: NodeTypeOptions, options: Required<ReplaceProjectFunctionCallOptions>): any {
    if (!config.inferenceMode || config.inferenceMode === 'apparent') {
      return quote(
        n
          .getType()
          .getApparentType()
          .getText()
      )
    } else if (config.inferenceMode === 'none') {
      return quote(n.getType().getText())
    } else if (config.inferenceMode === 'contextual' && options.project && TypeGuards.isExpression(n)) {
      const t = options.project.getTypeChecker().getContextualType(n)
      return t && quote(t.getText())
    }
  }

  protected parseOptionValue(name: string, value: Node | undefined): any {
    if (value && ['inferenceMode'].includes(name)) {
      return unquote(value.getText())
    } else {
      return super.parseOptionValue(name, value)
    }
  }
  protected freeArgumentNumber = 1
}
