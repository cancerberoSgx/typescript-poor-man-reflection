import Project, { ts, ClassDeclaration, InterfaceDeclarationStructure, SyntaxKind, SourceFile, CallExpression, Node, TypeGuards, MethodSignatureStructure, PropertySignatureStructure, InterfaceDeclaration, ExpressionWithTypeArguments, ConstructorDeclarationStructure } from 'ts-simple-ast';
import { AbstractExtractor } from '../abstractExtractor';
import { ExtractorGetter, FileVariableAccessor, ReplaceProjectFunctionCallOptions, ExtractorResult, ExtractorOptions } from '../../types';
import { unquote } from '../../util';
import { notUndefined } from 'misc-utils-of-mine-typescript';
// import { notUndefined } from 'ts-simple-ast-extra';

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

export const ExtractInterface = function <T = any>(config: ExtractInterfaceOptions, t?: any) {
  return t!
}

export class ExtractInterfaceClass extends AbstractExtractor {

  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>,
    variableAccessor: FileVariableAccessor
  ): ExtractorResult {
    const config = this.getOptionsFromFistArg<ExtractorOptions>(n) || {}
    let target: Node | undefined = this.getTarget(n, config)
    let output = this.buildOutput(target || n, config, options) as any
    return this.buildExtractorResult(n, output, getter, index, options, config)
  }
  protected buildOutput(target: Node, config: ExtractInterfaceOptions, options: Required<ReplaceProjectFunctionCallOptions>, ) {
    if (!TypeGuards.isClassDeclaration(target)) {
      //TODO: doesn't work
      target = target.getNextSiblings().find(TypeGuards.isClassDeclaration)!
      if (!target) {
        return '"Class Declaration not found"'
      }
    }
    if (TypeGuards.isClassDeclaration(target)) {
      extractInterface(target, options.project, target.getSourceFile(), config.name, config.removeDocs)

    }
    return 'undefined'
  }

  protected parseOptionValue(name: string, value: Node | undefined): any {
    if (value && ['destFile', 'name'].includes(name)) {
      return unquote(value.getText())
    } else {
      return super.parseOptionValue(name, value)
    }
  }
  getConfig() {
    return {
      freeArgumentNumber: 1,
      unusedArgumentDefaultValue: '{}'
    }
  }
}




export function extractInterface(node: ClassDeclaration, project: Project, dest: SourceFile = node.getSourceFile(), interfaceName: string = node.getName() ? 'I' + node.getName() : 'IAnonymousClass', removeDocs=false) {
  const structure: InterfaceDeclarationStructure = {
    name: interfaceName,
    methods: [],
    properties: [],
    constructSignatures: [],
    callSignatures: [],
    typeParameters: node.getTypeParameters() && node.getTypeParameters().map(tp => ({
      name: tp.getName(),
      constraint: tp.getConstraint() && tp.getConstraint()!.getText(),
      default: tp.getDefault() && tp.getDefault()!.getText()
    })),
    extends: getImplementsAll(node).map(i => i.getText()),
    docs: node.getJsDocs().length ? node.getJsDocs().map(d => d.getStructure()) : ['TODO: Document']
  }
  node.getMembers()
    .filter(p => !p.hasModifier(SyntaxKind.ProtectedKeyword) && !p.hasModifier(SyntaxKind.PrivateKeyword))
    .forEach(member => {
      if(removeDocs) {
        member.getJsDocs().forEach(d=>d.remove())
      }
      if (TypeGuards.isMethodDeclaration(member)) {
        const methodSignature: MethodSignatureStructure = {
          typeParameters: member.getTypeParameters().map(p => p.getStructure()),
          docs: member.getJsDocs().length ? member.getJsDocs().map(d => d.getStructure()) : ['TODO: Document'],
          hasQuestionToken: member.hasQuestionToken(),
          name: member.getName(),
          parameters: member.getParameters().map(p => p.getStructure()),
          returnType: member.getReturnType().getBaseTypeOfLiteralType().getText()
        }
        structure.methods!.push(methodSignature)
      }
      if (TypeGuards.isPropertyDeclaration(member)) {
        const propertySignature: PropertySignatureStructure = {
          docs: member.getJsDocs().length ? member.getJsDocs().map(d => d.getStructure()) : ['TODO: Document'],
          hasQuestionToken: member.hasQuestionToken(),
          name: member.getName(),
          type: member.getType().getBaseTypeOfLiteralType().getText()
        }
        structure.properties!.push(propertySignature)
      }
       if (TypeGuards.isConstructorDeclaration(member)) {
        const constructorSignature: ConstructorDeclarationStructure = {
          typeParameters: member.getTypeParameters().map(p => p.getStructure()),
          docs: member.getJsDocs().length ? member.getJsDocs().map(d => d.getStructure()) : ['TODO: Document'],
          parameters: member.getParameters().map(p => p.getStructure()),
          returnType: member.getReturnType().getBaseTypeOfLiteralType().getText()
        }
        structure.constructSignatures!.push(constructorSignature)
      }
    })

  node.getImplements().forEach((I,i)=>node.removeImplements(i))
  node.addImplements(`${structure.name}${node.getTypeParameters().length ? node.getTypeParameters().map(t=>`<${t.getText()}>`).join(', ') : ''}`)
  if(removeDocs) {
    node.getJsDocs().forEach(d=>d.remove())
  }
  dest.addInterface(structure)

}




//TODO: from ts-extras

/**
 * returns all implements clauses of this class and its super classes both things recursively 
 */
export const getImplementsAll = (cl: ClassDeclaration): ExpressionWithTypeArguments[] => {
  let result: ExpressionWithTypeArguments[] = []
  cl.getImplements().forEach(impl => {
    // TODO: types like A|B
    result.push(impl)
    impl.getType().getSymbolOrThrow().getDeclarations().forEach(d => {
      if (TypeGuards.isInterfaceDeclaration(d)) {
        result = result.concat(getExtendsRecursively(d))
      }
    })
  });
  getExtendsRecursively(cl).forEach(ext => {
    ext.getType().getSymbolOrThrow().getDeclarations().forEach(d => {
      if (TypeGuards.isClassDeclaration(d)) {
        result = result.concat(getImplementsAll(d))
      }
    })
  })
  return result
}

export const getExtendsRecursively = (decl: ClassDeclaration | InterfaceDeclaration): ExpressionWithTypeArguments[] => {
  let extendExpressions = TypeGuards.isClassDeclaration(decl) ? (decl.getExtends() ? [decl.getExtends()] : []) : decl.getExtends()
  extendExpressions.filter(notUndefined).forEach(expr => {
    if (expr.getType().getSymbol()) {
      expr.getType().getSymbol()!.getDeclarations().forEach(d => {
        if (TypeGuards.isInterfaceDeclaration(d) || TypeGuards.isClassDeclaration(d)) {
          extendExpressions = extendExpressions.concat(getExtendsRecursively(d))
        }
      })
    }

  })
  return extendExpressions.filter(notUndefined)
}


export const findInterfacesWithPropertyNamed = (decl: ClassDeclaration, memberName: string): InterfaceDeclaration[] =>
  getImplementsAll(decl)
    .map(expr => expr.getType().getSymbolOrThrow().getDeclarations())
    .reduce((a, v) => a.concat(v), [])
    .filter(TypeGuards.isInterfaceDeclaration)
    .filter(d => d.getMembers().find(m => TypeGuards.isPropertyNamedNode(m) && m.getName() === memberName))
    .filter((value, pos, arr) => arr.indexOf(value) === pos) // union




// interface Options {
//   c: ClassDeclaration
//   interfaceName?: string
//   moveDocs?: boolean
// }
// export function extractInterface(options: Options) {
//   const i: InterfaceDeclarationStructure = {
//     name: options.interfaceName||`I${options.c.getName()}`,
//     properties: options.c.getProperties()
//     .filter(p=>!p.hasModifier(SyntaxKind.ProtectedKeyword)&&!p.hasModifier( SyntaxKind.PrivateKeyword))
//     .map(p=>({
//       name: p.getName(), 
//       type: p.getType().getText(),
//       hasQuestionToken: p.hasQuestionToken(),

//     }))
//   }

// }

// import {ts} from 'ts-simple-ast'

// function printNode(signature: ts.TypeElement, originalNode: ts.ClassElement): string {
//   const printer = ts.createPrinter({
//     newLine: ts.NewLineKind.LineFeed,
//   },
//     {
//       substituteNode(hint, node) { // TODO: don't know why I need to do this . if I dont the pinter won t print identifiers
//         if (ts.isIdentifier(node)) {
//           return ts.createIdentifier(node.escapedText.toString())
//         }
//         return node
//       }
//     }
//   )

//   let jsdocPrefix = ''
//   const nodeChildren = originalNode.getChildren()
//   if (nodeChildren && nodeChildren.length && nodeChildren[0].kind === ts.SyntaxKind.JSDocComment) {
//     jsdocPrefix += nodeChildren[0].getText()
//   }
//   const result = printer.printNode(ts.EmitHint.Unspecified, signature, ts.createSourceFile('temp.ts', '', ts.ScriptTarget.Latest));

//   return jsdocPrefix + '\n' + result
// }