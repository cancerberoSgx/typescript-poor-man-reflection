import { removeWhites } from 'misc-utils-of-mine-generic'
import { CallExpression, Project, SyntaxKind, TypeGuards, Node } from 'ts-morph'
import { AbstractExtractor } from '../extractors/abstractExtractor'
import { replaceFileFunctionCall } from '../replaceFileFunctionCall'
import { defaultOptions } from '../replaceProjectFunctionCall'
import { ExtractorFn } from '../types'
import { asString } from '../util'

describe('customExtractors', () => {
  it('should build my custom function name and extract', () => {
    const project = new Project()
    project.createSourceFile(
      'test.ts',
      `
  import {Custom} from 'my-custom-module'
  function f<I>() {
    type Member<I> = keyof I
  }
  var a = Custom<typeof f>()
  `
    )
    replaceFileFunctionCall(project.getSourceFile('test.ts')!, {
      ...defaultOptions,
      extractorDataMode: 'asArgument',
      moduleSpecifier: 'my-custom-module',
      extracts: {
        Custom: n => '"custom"'
      },
      project
    })
    const t2 = project.getSourceFile('test.ts')!.getText()
    expect(t2).toContain('var a = Custom<typeof f>("custom")')
  })

  it('should build custom extractor for extracting  all declarations in current source file', () => {
    const project = new Project()
    project.createSourceFile(
      'test.ts',
      `
describe('ff', ()=>{
  interface I{
    i:number
  }
  it('as', ()=>{
    class C implements I {
      i:number=0
      m(){
        var foo=1
        while(true){
          var t0 = Date.now()
        }
      }
    }
  })  
})
test('bar', ()=>{
  const var55 = 's'
})
const body = AllDeclarationsInThisFile<any>()
      `
    )

    replaceFileFunctionCall(project.getSourceFile('test.ts')!, {
      ...defaultOptions,
      ...{ extractorDataMode: 'asArgument' },
      project,
      extracts: {
        /** return all declarations that contribute with names and are inside a describe() it() or test() */
        AllDeclarationsInThisFile: (n: CallExpression) => {
          const declarations = n
            .getSourceFile()
            .getDescendants()
            .filter(d => {
              return (
                TypeGuards.isCallSignatureDeclaration(d) ||
                TypeGuards.isClassDeclaration(d) ||
                TypeGuards.isClassLikeDeclarationBase(d) ||
                TypeGuards.isEnumDeclaration(d) ||
                TypeGuards.isVariableDeclarationList(d) ||
                TypeGuards.isFunctionDeclaration(d) ||
                TypeGuards.isInterfaceDeclaration(d) ||
                TypeGuards.isIndexSignatureDeclaration(d) ||
                TypeGuards.isNamespaceDeclaration(d) ||
                TypeGuards.isTypeAliasDeclaration(d)
              )
            })
            .filter(d => {
              const block = d.getFirstAncestorByKind(SyntaxKind.Block)
              if (
                block &&
                block.getParent() &&
                block.getParent()!.getParent() &&
                TypeGuards.isCallExpression(block.getParent()!.getParent()!)
              ) {
                const ce = block.getParent()!.getParent()! as CallExpression
                const id = ce.getFirstChildByKind(SyntaxKind.Identifier)
                if (id) {
                  return ['describe', 'it', 'test'].includes(id.getText())
                }
              }
            })

          return `${JSON.stringify(declarations.map(d => d.getText()).join('\n'))}`
        }
      }
    })

    expect(project.getSourceFile('test.ts')!.getText()).toContain(
      `const body = AllDeclarationsInThisFile<any>(\"interface I{\\n    i:number\\n  }\\nclass C implements I {\\n      i:number=0\\n      m(){\\n        var foo=1\\n        while(true){\\n          var t0 = Date.now()\\n        }\\n      }\\n    }\\nconst var55 = 's'\"`
    )
  })

  it('should build custom extractor inheriting from AbstractExtractor class', () => {
    const project = new Project()
    project.createSourceFile(
      'test.ts',
      `
function previous(){}
Destroyer({target: next})
function next(){}
function f(){}
Destroyer({target: b, removeMe: true})
var a = 1, b = 2, c = 'foo'
    `
    )

    class DestroyerClass extends AbstractExtractor {
      extract(...[c, i, g, options, v]: Parameters<ExtractorFn>) {
        const config = this.getOptionsFromFistArg(c) || {}
        const target = this.getTarget(c, config)
        if (target && (TypeGuards.isFunctionDeclaration(target) || TypeGuards.isVariableDeclaration(target))) {
          target.remove()
        }
        return this.buildExtractorResult(c, 'undefined', g, i, options, config)
      }
      protected freeArgumentNumber = 1
    }
    replaceFileFunctionCall(project.getSourceFile('test.ts')!, {
      ...defaultOptions,
      ...{ extractorDataMode: 'asArgument' },
      extracts: {
        Destroyer: new DestroyerClass()
      },
      project
    })
    expect(removeWhites(project.getSourceFile('test.ts')!.getText())).toContain(
      removeWhites(
        `
function previous(){}
Destroyer({target: next}, undefined)

function f(){}

var a = 1, c = 'foo'
`
      )
    )
  })

  it('should allow to store any kind of value', () => {
    const project = new Project()
    project.createSourceFile(
      'test.ts',
      `
        function previous(a:number){return a+1}
        SaverProbe5({target: previous})`
    )

    class SaverProbe5Class extends AbstractExtractor {
      protected freeArgumentNumber = 1
      extract(...[c, i, g, options, v]: Parameters<ExtractorFn>) {
        const config = this.getOptionsFromFistArg(c) || {}
        const target = this.getTarget(c, config)
        let output: string | Node = `undefined`
        if (target) {
          output = target
        }
        return this.buildExtractorResult(c, output, g, i, options, config)
      }
    }

    replaceFileFunctionCall(project.getSourceFile('test.ts')!, {
      ...defaultOptions,
      ...{ extractorDataMode: 'asArgument' },
      extracts: {
        SaverProbe5: new SaverProbe5Class()
      },
      project
    })

    expect(removeWhites(project.getSourceFile('test.ts')!.getText())).toContain(
      removeWhites(`
        function previous(a:number){return a+1}
        SaverProbe5({target: previous}, function previous(a:number){return a+1})
        `)
    )
  })
})
