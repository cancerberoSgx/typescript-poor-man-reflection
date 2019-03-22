import Project, { SyntaxKind, TypeGuards, Type, Node, CallExpression } from 'ts-simple-ast'
import {
  ExtractorResult,
  ExtractorOptions,
  ExtractorGetter,
  ReplaceProjectFunctionCallOptions,
  FileVariableAccessor
} from '../types'
import { AbstractExtractor } from './abstractExtractor'

/**
 * Usage: ```let aNode = unknownAPI(); var t  = NodeType({},aNode)```
 * The first parameter is for configuration:
 */
export class NodeType extends AbstractExtractor {
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>,
    variableAccessor: FileVariableAccessor,
    project?: Project
  ): ExtractorResult {
    // const extractorOptions = { n, index, getter, options, variableAccessor, project }

    const config = this.getOptionsFromFistArg(n)
    // console.log(config)

    // const props = options.n
    //   .getArguments()[0]
    //   .getType()!
    //   .getProperties()
    //   .map(p => ({ [p.getName()]: p.getValueDeclaration() }))
    // const id = options.n.getFirstAncestorByKind(SyntaxKind.Identifier)
    // // getDefinitionsOf(options.n.getArguments()[1])
    // const node = options.n.getArguments()[1]
    return { argument: `node.getText()` }

    // getDefinitionsOf
    //     .findReferences()
    //     .map(r => r.getDefinition())
    //     .map(d => d.getDeclarationNode()
    // const type = options.n.getTypeArguments()[0]
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
  }
  getConfig() {
    return {
      freeArgumentNumber: 1,
      unusedArgumentDefaultValue: '{}'
    }
  }
}

/** public options for user - must be providen in first argument */
export interface NodeTypeOptions extends ExtractorOptions {
  // /** if true will analyze the given type in the first type parameter. If false (default) it will analyze the node given in second argument */
  // type?: boolean
  /** method to get a node's type - on method of typechecker */
  inferenceMode?: InferenceNode
}
type InferenceNode =
  | 'apparent'
  | 'contextual'
  | 'returnTypeOfSignature'
  | 'getTypeOfSymbolAtLocation'
  | 'getTypeAtLocation'
interface TypeDescriptionCreateOptions {
  type?: Type
  node: Node
  project: Project
  inferenceMode?: InferenceNode
}
// from jsx-explorer project TODO: in misc
export function buildTypeFor<T>(config: TypeDescriptionCreateOptions): Type {
  const t = config.type || config.node.getSourceFile().getType()
  if ((t && !config.inferenceMode) || config.inferenceMode === 'apparent') {
    return t.getApparentType()
  } else if (config.inferenceMode === 'contextual') {
    if (TypeGuards.isExpression(config.node)) {
      const tt = config.project.getTypeChecker().getContextualType(config.node)
      if (tt) {
        return tt
      } else {
        throw new Error('cannot build contextual type of given node')
      }
    } else throw new Error('contextual inference requires an expression node')
  } else {
    throw new Error('TODO - WIP - Not supported inference, yet')
  }
}
