import { ts, ClassDeclaration, InterfaceDeclarationStructure, SyntaxKind } from 'ts-simple-ast';

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

function printNode(signature: ts.TypeElement, originalNode: ts.ClassElement): string {
  const printer = ts.createPrinter({
    newLine: ts.NewLineKind.LineFeed,
  },
    {
      substituteNode(hint, node) { // TODO: don't know why I need to do this . if I dont the pinter won t print identifiers
        if (ts.isIdentifier(node)) {
          return ts.createIdentifier(node.escapedText.toString())
        }
        return node
      }
    }
  )

  let jsdocPrefix = ''
  const nodeChildren = originalNode.getChildren()
  if (nodeChildren && nodeChildren.length && nodeChildren[0].kind === ts.SyntaxKind.JSDocComment) {
    jsdocPrefix += nodeChildren[0].getText()
  }
  const result = printer.printNode(ts.EmitHint.Unspecified, signature, ts.createSourceFile('temp.ts', '', ts.ScriptTarget.Latest));

  return jsdocPrefix + '\n' + result
}

export function extractInterface(node: ts.ClassDeclaration, interfaceName?:string): string {
  const members: string[] = []
  const debug: string[] = []
  const excludeMembersWithKeywords = [ts.SyntaxKind.StaticKeyword, ts.SyntaxKind.PrivateKeyword, ts.SyntaxKind.ProtectedKeyword]

  let classJsdoc = ''
  const nodeChildren = node.getChildren()
  if (nodeChildren && nodeChildren.length && nodeChildren[0].kind === ts.SyntaxKind.JSDocComment) {
    classJsdoc += nodeChildren[0].getText()
  }
  node.members
    .filter(member => !(member.modifiers && member.modifiers.map(m => m.kind).find(modifier => excludeMembersWithKeywords.includes(modifier))))
    .forEach(member => {
      if (ts.isMethodDeclaration(member)) {
        const method = member as ts.MethodDeclaration
        const methodSignature = ts.createMethodSignature(method.typeParameters, method.parameters, method.type, method.name, method.questionToken)
        members.push(printNode(methodSignature, method))
      }
      if (ts.isPropertyDeclaration(member)) {
        const property = member as ts.PropertyDeclaration
        const propertySignature = ts.createPropertySignature(property.modifiers, property.name, property.questionToken, property.type, property.initializer)
        members.push(printNode(propertySignature, property))
      }
      if (ts.isConstructorDeclaration(member)) {
        const constructor = member as ts.ConstructorDeclaration
        const propertySignature = ts.createConstructSignature(
          constructor.typeParameters,
          constructor.parameters, constructor.type)  // TODO: had to cast dont know how safe
        let printed = printNode(propertySignature, constructor) // not ready yet will be something like this: new (iron: number);
        printed = printed.replace(/new/, 'constructor')
        if (node.name) {
          printed = printed.substring(0, printed.length - 1) + ': ' + node.name.getText()
          if(node.typeParameters){
            printed += ' <' + node.typeParameters.map(tp=>tp.getText()).join(', ') + '>'
          }
        }
        members.push(printed)
      }
    })
  let name = interfaceName || (node.name ? 'I' + node.name.escapedText : 'IAnonymousClass')
  if(node.typeParameters){
    name += ' <' + node.typeParameters.map(tp=>tp.getText()).join(', ') + '>'
  }
  return `
${classJsdoc}
export interface ${name} {
${members.join('\n  ')}
}
`
}

