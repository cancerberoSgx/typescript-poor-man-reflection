// import Project, { TypeGuards , Node, SourceFile,StatementedNode, SyntaxKind, Constructor, ModuledNode, TextInsertableNode, ts} from 'ts-simple-ast';
// import { AnyNsRecord } from 'dns';

// // Object.assign(SourceFile.prototype, {
// //   ff(){}
// // })

// declare global {
//   class SourceFile {
//     ssss():string
//   }
//   interface ModuledNode {
//     asdasda():void
//   }
// }

// declare global {
//   namespace jest {
//     interface Matchers<R> {
//       toTrigger(options: void): R
//     }
//   }
// }


// // (SourceFile.prototype as any).mm = function(this: SourceFile){
// //   return this.getBaseName().toUpperCase()
// // }




// // f


// // todo: not sure why I need to explicitly type this in order to get TS to not complain... (TS 2.4.1)
// export const SourceFileBase: Constructor<ModuledNode> & Constructor<StatementedNode> & Constructor<TextInsertableNode> & typeof Node = ModuledNode(
//   TextInsertableNode(StatementedNode(Node as any))
// );

// class SSourceFile extends SourceFileBase<ts.SourceFile> {
//   prototype: typeof SourceFile.prototype = SourceFile.prototype
// public constructor(){
//   super()
// }
// }
// type ff = (typeof SourceFile) & {ff():void}

// interface Added {
//   foo():string
// }


// // Node.prototype.ff = function(){

// // }
// (Node.prototype as any).foo = function(){
//   return 'hello'
// }
// class SProject extends Project {
//   constructor(){
//     super()
//   }
//   createSourceFile(...p:Parameters<Project['createSourceFile']>): ReturnType<Project['createSourceFile']>&Added {
//     return super.createSourceFile(...p) as any
//   }
//   // getSourceFile (p: string|((file: SourceFile) => boolean)): ReturnType<Project['getSourceFile']> {
//   //   return super.getSourceFile(p as any)
//   // }
//   // createSourceFile(...p:Parameters<Project['createSourceFile']>):ff {
//   //   return super.createSourceFile(...p) as any
//   // }
//   getSourceFile (p: string|((file: SourceFile) => boolean)): ReturnType<Project['getSourceFile']> &Added {
//     return super.getSourceFile(p as any) as any
//   }
// }
// class SNode<T extends ts.Node> extends Node<T> {

// }
// const project = new Project()
// const f = project.createSourceFile('asdasd.ts', '')
// const p = new SProject()
// const f2 = p.createSourceFile('asdasssd.ts', '')
// f2.asdasda