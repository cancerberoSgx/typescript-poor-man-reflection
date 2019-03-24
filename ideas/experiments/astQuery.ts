// import { TypeGuards , Node, SourceFile, SyntaxKind} from 'ts-simple-ast';

// type CollectionVerb = 'filter'|'find'
// // |'map'|'flat'
// type NodeVerb = 'add'//'insert'//|'rename'|'remove'|'move'|'order'
// type otherVerb='is'|'isNote'
// // type Verb = NodesVerbs|NodeVerbs
// type NodeAttribute = 'children'|
// 'descendant' |'parent'
// // |'ascendant'// 'name'|'text'|'kind'|'member'|'method'|'type'

// // type  CollectionAttribute ='empty'// 'count'|

// type Attribute= 'name'//|'text'|'kind'|'member'|'method'|'type'

// type KindPredicate = keyof typeof TypeGuards
// // type TypePredicate ='extends'|'implements'|'extendsType'|'typeExtends'
// // type MemberPredicate = 'hasParameterWithName'|'hasParameterWithType'|'hasTypeParameterThatExtends'
// // type ModifiablePredicate='isPublic'|'isPrivate'|'isStatic'|'isProtected'|'isAsync'|'isExported'|'isDefaultExported'|'isOptional'|'isRequired'

// // type AddArgument = 
// // type Predicate=KindPredicate|TypePredicate
// type AttributeVerb = 
// //  {[k :NodeAttribute]: KindPredicate} = 
// {
//  'descendant': CollectionVerb
//  'children' : CollectionVerb
// //  'ascendant': CollectionVerb
//  'parent':NodeVerb
//   // |'parent'|'ascendant'| 'name'|'text'|'kind'|'member'|'method'|'type'
//   // undefined:undefined
//   // 'empty': CollectionVerb
//   'name': 'is'

// }
// type Attrs = keyof AttributeVerb
// type VerbPredicate = {
//   'filter': KindPredicate
//   'find': KindPredicate
//   // 'map': KindPredicate
//   // 'flat': KindPredicate
//   // 'insert': {}
//   'add': Node,
//   'is': string
//   // 'empty': undefined
//   // 'name': string
//   // undefined:undefined
// }
// // type f = 'descendant'&'filter'
// // type I<A, B> = A&B
// // type Return = Node[]|Node|undefined
// // type AttrVerbReturn<A extends Attrs, V extends AttributeVerb[A]> = {[k in I<A, V>]: Node[]}
// // // , T extends {[k in I<A, V>]: Node[]}> = {
// //   // f: Node[]
// //   // 'find': KindPredicate
// //   // 'map': KindPredicate
// //   // 'flat': KindPredicate
// //   // 'insert': 
// // // }
// // type Verbs = keyof VerbPredicate

// // type VerbReturn<N extends Node, A extends Attrs, V extends AttributeVerb[A], P extends VerbPredicate[V]> = {
// //   'filter': AttrQuery<N, A, V, P, VerbReturn<N, A, V, P>['filter']>[]
// //   'find': N|undefined
// //   'map': M[]
// //   'flat': N[]
// // }
// let f: SourceFile = null as any as SourceFile
// // type NodeA = NN[]
// // type NN = Node<ts.Node>
// // type NN = Node| Node[]
// type NAttrs = {
//   // NN: NodeAttribute,
//   // NodeA: CollectionAttribute|NodeAttribute
//   // SourceFile: NodeAttribute,
//   // undefined: undefined
//   'Node': NodeAttribute
//   'Node[]': Attribute|NodeAttribute
// }
// type NodeS<N> = N extends any[] ? 'Node[]' : 'Node'
// type AttrQuery<N , A extends NAttrs[NodeS<N>], V extends AttributeVerb[A], P extends VerbPredicate[V]

// // , R extends  AttrVerbReturn<A, V>[A&V]
// > =  (n:N, a: A, verb: V, predicate: P)=>AttrQuery<N, NAttrs[NodeS<N>], AttributeVerb[Attrs], VerbPredicate[AttributeVerb[Attrs]]>

// // interface AttributeQuery {
// //   q<A extends Attrs, V extends AttributeVerb[A], P extends VerbPredicate[V]>(a: A, filter: F, predicate: P, R: FilterReturn[F]): R
// // }

// // const attrQuery
// // declare const attrQuery AttrQuery//AttrQuery <Attrs, AttributeVerb[Attrs], VerbPredicate[AttributeVerb[Attrs]]>
// function attrQuery<N  ,   A extends NAttrs[NodeS<N>], V extends AttributeVerb[A], P extends VerbPredicate[V]>(n:N, a:A, v: V, p: P): ReturnType<AttrQuery<N, A, V, P>> {
//   throw ''
// }
// // function  Q<N extends Node|Node[], A extends NAttrs[N], V extends AttributeVerb[A], P extends VerbPredicate[V]>(n: N): (): ReturnType<AttrQuery<A, V, P>>
// // attrQuery('descendant', 'filter', 'isClassDeclaration')

// let d :NodeS<typeof f>
// attrQuery(f, 'descendant', 'find', 'hasBody')

// attrQuery(f.getChildren(), 'name', 'find', 'isClassDeclaration')


// // [ descendants]
// const classesExtendingCustom = 
// f.getDescendants()
// .filter(TypeGuards.isClassDeclaration)
// .filter(c=>c.getChildrenOfKind(SyntaxKind.HeritageClause))
// .map(c=>c.getChildrenOfKind(SyntaxKind.Identifier))
// .flat()
// .filter(i=>i.getText()==='Custom')



// // declare module 'ts-simple-ast' {
// //   class Node{

// //   }
// // }




// // declare global {
// //   namespace jest {
// //     interface Matchers<R> {
// //       toTrigger(options: ToTriggerOptions): R
// //     }
// //   }
// // }