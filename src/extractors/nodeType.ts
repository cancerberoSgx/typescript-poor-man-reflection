import Project, { SyntaxKind, TypeGuards, Type, Node, CallExpression } from 'ts-simple-ast'
import {
  ExtractorResult,
  ExtractorOptions,
  ExtractorGetter,
  ReplaceProjectFunctionCallOptions,
  FileVariableAccessor
} from '../types'
import { AbstractExtractor } from './abstractExtractor'
import { quote } from 'misc-utils-of-mine-generic'
import { unquote } from '../util'

/**
 * Usage: 
 * 
```ts
const aNode = unknownAPI(); 
const type1 = NodeType({target: aNode})
const type2 = NodeType<typeof unknownAPI>({})
```
 */
export const NodeType = function<T = any>(config: NodeTypeOptions, t?: any) {
  return t!
}

export interface NodeTypeOptions extends ExtractorOptions {
  /**
   * How the type should be inferred from given node. 
   * 
   * If `apparent` (default) then it TypeChecker's getApparentType() method will be used 
   * 
   * If `none` it will just print the text of node's direct type
   */
  inferenceMode?: InferenceNode
}

type InferenceNode =
  | 'apparent'
  |'none'
  // | 'contextual'
  // | 'returnTypeOfSignature'
  // | 'getTypeOfSymbolAtLocation'
  // | 'getTypeAtLocation'

export class NodeTypeClass extends AbstractExtractor {
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>,
    variableAccessor: FileVariableAccessor,
    project?: Project
  ): ExtractorResult {
    const config = this.getOptionsFromFistArg<NodeTypeOptions>(n) || {}
    let target: Node | undefined = this.getTarget(n, config)
    let output = this.buildType(target || n, config) as any
    return this.buildExtractorResult(n, output, getter, index, options, config)
  }
  protected buildType(n: Node, config: NodeTypeOptions): any {
    if (!config.inferenceMode || config.inferenceMode === 'apparent') {
      return quote(
        n
          .getType()
          .getApparentType()
          .getText()
      )
    } else if(config.inferenceMode === 'none') {
      return quote(n.getType().getText())
    }
  }
  getConfig() {
    return {
      freeArgumentNumber: 1,
      unusedArgumentDefaultValue: '{}'
    }
  }

  protected parseOptionValue(name: string, value: Node | undefined): any {
    if (value && ['inferenceMode'].includes(name)) {
      return unquote(value.getText())
    } else {
      return super.parseOptionValue(name, value)
    }
  }
}

// /** public options for user - must be providen in first argument */
// export interface NodeTypeOptions extends ExtractorOptions {
//   // /** if true will analyze the given type in the first type parameter. If false (default) it will analyze the node given in second argument */
//   // type?: boolean
// }
// interface TypeDescriptionCreateOptions {
//   type?: Type
//   node: Node
//   project: Project
//   inferenceMode?: InferenceNode
// }
// // from jsx-explorer project TODO: in misc
// export function buildTypeFor<T>(config: TypeDescriptionCreateOptions): Type {
//   const t = config.type || config.node.getSourceFile().getType()
//   if ((t && !config.inferenceMode) || config.inferenceMode === 'apparent') {
//     return t.getApparentType()
//   } else if (config.inferenceMode === 'contextual') {
//     if (TypeGuards.isExpression(config.node)) {
//       const tt = config.project.getTypeChecker().getContextualType(config.node)
//       if (tt) {
//         return tt
//       } else {
//         throw new Error('cannot build contextual type of given node')
//       }
//     } else throw new Error('contextual inference requires an expression node')
//   } else {
//     throw new Error('TODO - WIP - Not supported inference, yet')
//   }
// }

// if(target){
// }
// const props = options.n
//   .getArguments()[0]
//   .getType()!
//   .getProperties()
//   .map(p => ({ [p.getName()]: p.getValueDeclaration() }))
// const id = options.n.getFirstAncestorByKind(SyntaxKind.Identifier)
// // getDefinitionsOf(options.n.getArguments()[1])
// const node = n.getArguments()[1]
// return { argument: `node.getText()` }

// getDefinitionsOf
//     .findReferences()
//     .map(r => r.getDefinition())
//     .map(d => d.getDeclarationNode()
// const type = n.getTypeArguments()[0]
// if(!node&&!type){
//   // no target provided - do nothing
//   return {
//     argument: `You must provide a node in the second argument- example: NodeType({}, aNode) or a type in the first type arg: 'NodeType<typeof F>()'`
//   }
// }
// let result:Type
// try {
//   result = buildTypeFor({type, project, node})
// } catch (error) {
// }
// if (id) {
// }
// else {
// }
// throw new Error('Method not implemented.');
