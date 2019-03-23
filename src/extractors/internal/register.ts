import { flat, unique } from 'misc-utils-of-mine-generic'
import { notFalsy } from 'misc-utils-of-mine-typescript'
import { CallExpression, MethodDeclaration, PropertyDeclaration, SyntaxKind, TypeGuards, Node, Block, VariableDeclarationKind } from 'ts-simple-ast'
import { getExtendsRecursively, notUndefined } from 'ts-simple-ast-extra'
import { getDefinitionsOf, extractCallExpressions } from '../../astUtil'
import { ExtractorGetter, ExtractorOptions, ExtractorResult, ReplaceProjectFunctionCallOptions, Extractor } from '../../types'
import { AbstractExtractor } from '../abstractExtractor'
import { Fn, unquote, withoutExtension } from '../../util';
import { isExportedExtractor } from '../../extractors';

/**
```ts
class NewExtractorClass extends AbstractExtractor {
  protected freeArgumentNumber = 1
  extract(...[c, i, g, options, v]: Parameters<ExtractorFn>) {
    const config = this.getOptionsFromFistArg(c) || {}
    return this.buildExtractorResult(c, '"hello"', g, i, options, config)
  }
}
function NewExtractor<T = any>:(config: NewExtractorOptions, r?: T): T {
  return r!
}
Register({
  name: 'NewExtractor', 
  extractor: NewExtractorClass, 
  fn: NewExtractor
})
// and from here I can use it: 
NewExtractor()
```
 */
export function Register<T = any>(config: RegisterOptions, t?: T): T {
  return t!
}

export interface RegisterOptions extends ExtractorOptions {
  name: string, 
  fn: Fn, 
  extractor: typeof AbstractExtractor
}

export class RegisterClass extends AbstractExtractor {
  protected freeArgumentNumber = 1
  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>
  ): ExtractorResult {
    const config = this.getOptionsFromFistArg<RegisterOptions>(n)
    return this.buildExtractorResult(n, 'undefined', getter, index, options, config)
  }
  protected parseOptionValue(name: string, value: Node | undefined): any {
    if (value && ['name'].includes(name)) {
      return unquote(value.getText())
    }  else {
      return value
    }
  }

  beforeExtract(filePath: string, extractorName: string, options: Required<ReplaceProjectFunctionCallOptions>)
  // :  Promise<any> 
  {
      // HEADS UP: since these operations might be destructive (forgotten Nodes) we need to re-create the sourceFile and the CallExpressions here and in any subclass implementation
      const sourceFile = options.project && options.project.getSourceFile(filePath)
      if(sourceFile){
        const callExpressions = extractCallExpressions(sourceFile, options.moduleSpecifier, [extractorName])
        // const promises = 
        callExpressions.map(c => {
          const config = this.getOptionsFromFistArg<any>(c)! as {name: string, fn: Node, extractor: Node}
          const s = `{
            name: ${JSON.stringify(config.name)}, 
            fn: ${config.fn.getText()},
            extractor: ${config.extractor.getText()}
          }`
          const newFilePath = `${sourceFile.getDirectoryPath()}/${sourceFile.getBaseNameWithoutExtension()}${unique('_require_')}.ts`
          // const code = ``
          const newFile = sourceFile.copy(newFilePath, {overwrite: true})
          // const newParent = newCalls[0].getParent()!.getParent()as Block
          // const newIndex = newCalls[0].getParent()!.getChildIndex()
          // const classDeclaration = getDefinitionsOf(config.extractor.getFirstDescendantByKind(SyntaxKind.Identifier)!).filter(notUndefined).filter(TypeGuards.isClassDeclaration)[0]
          
          // let block = newParent.getChildren()[0].getFirstAncestorByKind(SyntaxKind.Block)
          // if(!bl)

          // const p = c.getFirstAncestorByKind(SyntaxKind.SourceFile)c.getParent()! && c.getParent()!.getParent()!
          // if(!TypeGuards.isSourceFile(p)){
            // console.error(`Require() call must be at the root, its parent must be SourceFile and this is not ${c.getText()}`);            
            
          // }
          // else {


          // const varName = unique( config.name)
            //TODO: c.getParent()!getParent() is SourceFile - VALIDATE
            newFile.insertStatements(c.getParent()!.getChildIndex(),`export default ${s}`)
            // {
              // isDefaultExport: true,
              // declarationKind: VariableDeclarationKind.Const, 
              // isExported: true,
              // declarations: [{
                // name: varName, initializer: s
              // }]
            // })
            // newFile.addExportDeclaration({})


          // }
          const newExtractorStatements = extractCallExpressions(newFile, options.moduleSpecifier, [config.name])
          // .filter(c2=>c.getText()===c.getText())
          .map(c2=>[c2, ...c2.getAncestors()].find(c2=>TypeGuards.isSourceFile(c2.getParent()!))).filter(notUndefined).filter(TypeGuards.isStatement)
          
          ;
          [newExtractorStatements[0], ...newExtractorStatements[0].getNextSiblings()].filter(TypeGuards.isStatement).forEach(s2=> {
            s2.remove()
          })

          // newFile.addExportAssignment({expression: '', isExportEquals: false})
          // newFile.getClass()
          extractCallExpressions(newFile, options.moduleSpecifier, [extractorName])
          // .slice(1, newCalls.length)
          .forEach(n=>{
            const p = n.getParent()
            if(TypeGuards.isStatement(p)){
              p.remove()
            }
            else {
              console.error('Require() call must be in an statement (ExpressionStatement) and this is not ', n.getText());              
            }
          })
  
          // console.log(newFile.getText());
          // newFile.formatText()
          newFile.saveSync()
          // return new Promise(resolve=>{
            try {
              // import(newFile.getFilePath()).then(e=>{
                // console.log(e.default);
                const e = require(withoutExtension(newFile.getFilePath()))
                const ex = e.default
                if(isExportedExtractor(ex)){
                  options.extracts[ex.name] = ex.extractor
                }      
                newFile.deleteImmediatelySync()        
                // resolve()
              // })
            } catch (error) {
              console.error(`There was an error while trying to import Exported Extractor ${config.name}: `, error, error.stack);
              // throw error
              // resolve()
            }
          // })
          
       })
      //  return Promise.all(promises)
     }
    //  else {
      //  return Promise.resolve()
    // }
       
  }
  
}
