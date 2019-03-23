import { flat } from 'misc-utils-of-mine-generic';
import { notFalsy } from 'misc-utils-of-mine-typescript';
import { CallExpression, MethodDeclaration, PropertyDeclaration, SyntaxKind, TypeGuards } from 'ts-simple-ast';
import { getExtendsRecursively } from 'ts-simple-ast-extra';
import { getDefinitionsOf } from '../../astUtil';
import { ExtractorGetter, ExtractorOptions, ExtractorResult, ReplaceProjectFunctionCallOptions } from '../../types';
import { AbstractExtractor } from '../abstractExtractor';

/**
 * TODO: only works for classes, not for interfaces signatures - there we need a type.
 * Will produce a type error in case the method or property doesn't override a super class or interface member. 
 
```ts
class C {
  prop1:string|undefined = Overrides()
  method1() {
    Overrides()
  }
}
```
In case property or method dont override  super class or interface method the following will be the result:

```ts
class C {
  prop1:string|undefined = Overrides(undefined, false)
  method1() {
    Overrides(undefined, false)
  }
}
```
which will generate a type error in the second argument

 */
export function Overrides <T = any>(t?:T, pass?:true, data?: T): T {
  return data!
}

export interface OverridesOptions extends ExtractorOptions {}

export class OverridesClass extends AbstractExtractor {

  protected freeArgumentNumber = 2

  extract(
    n: CallExpression,
    index: number,
    getter: ExtractorGetter,
    options: Required<ReplaceProjectFunctionCallOptions>
  ): ExtractorResult {

    const target= n.getFirstAncestor(a=>TypeGuards.isPropertyDeclaration(a)||TypeGuards.isMethodDeclaration(a)) as PropertyDeclaration|MethodDeclaration|undefined 
    const config = this.getOptionsFromFistArg<OverridesOptions>(n)
    let error=''
    if(target){
      const c = target.getFirstAncestorByKind(SyntaxKind.ClassDeclaration)
      if(!c){
        error='Cannot find ancestor class declaration'
      }
      else {
        const defs = flat(getExtendsRecursively(c).map(e=>e.getFirstChildByKind(SyntaxKind.Identifier) && getDefinitionsOf(e.getFirstChildByKind(SyntaxKind.Identifier)!)).filter(notFalsy)).filter(TypeGuards.isClassDeclaration)
        // n.addArgument(JSON.stringify(defs.map(d=>d.getName()).join(', ')))
        let pass=false
        if(TypeGuards.isMethodDeclaration(target)){
          pass = !!defs.find(def=>!!def.getMethods().find(m=>m.getName()===target.getName()))
        }
        else {//(TypeGuards.isMethodDeclaration(target)){
          pass = !!defs.find(def=>!!def.getProperties().find(m=>m.getName()===target.getName()))
        }
        // target.getName()
        if(!pass){
          if(n.getArguments().length===0){
            n.addArguments(['undefined', `'Not Overriding anything'`])
          }
          else {
            for (let i = 1; i < n.getArguments().length; i++) {
              n.removeArgument(i)          
            }
            n.insertArgument(1,`'Not Overriding anything'`)
          }
        }
      }
    }
    else {
      error = 'override target not found'
    }

    if(error){
      if(n.getArguments().length===0){
        n.addArguments(['undefined', `'override target not found'`])
      }
      else {
        for (let i = 1; i < n.getArguments().length; i++) {
          n.removeArgument(i)          
        }
        n.insertArgument(1, `'override target not found'`)
      }
    }
      
    

    // getImplementsAll()
    return this.buildExtractorResult(n, 'undefined', getter, index, options, config)
  }
}
