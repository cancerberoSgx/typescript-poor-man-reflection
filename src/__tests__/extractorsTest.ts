import {
  Project,
  TypeGuards,
  UserPreferences,
  CallExpression,
  SyntaxKind,
  ts,
  LanguageService,
  TextRange,
  FormatCodeSettings
} from 'ts-simple-ast'
import { replaceFileFunctionCall } from '../replaceFileFunctionCall'
import { defaultOptions } from '../replaceProjectFunctionCall'
import { removeWhites } from 'misc-utils-of-mine-generic'
import { writeFileSync } from 'fs'
import { flat } from 'misc-utils-of-mine-generic'
import { getAllSupportedCodeFixes } from '../extractors/source/codeFixes'

describe('extractors', () => {
  describe('custom extractors', () => {
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
        }
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
  })

  describe('NodeText', () => {
    it('should get referenced node text', () => {
      const project = new Project()
      project.createSourceFile(
        'test.ts',
        `
NodeText<typeof f>()
function f(){
type T = any
}
      `
      )

      replaceFileFunctionCall(project.getSourceFile('test.ts')!, { extractorDataMode: 'asArgument' })
      expect(project.getSourceFile('test.ts')!.getText()).toContain(
        `NodeText<typeof f>(\"function f(){\\ntype T = any\\n}\")`
      )
    })
  })

  describe('BodyText', () => {
    it('should get function body text', () => {
      const project = new Project()
      project.createSourceFile(
        'test.ts',
        `
BodyText<typeof f>()
function f(){
type T = any
}
      `
      )
      replaceFileFunctionCall(project.getSourceFile('test.ts')!, { extractorDataMode: 'asArgument' })
      expect(project.getSourceFile('test.ts')!.getText()).toContain(`BodyText<typeof f>("type T = any")`)
    })
  })

  describe('ThisBlockText', () => {
    it('should get function body text', () => {
      const project = new Project()
      project.createSourceFile(
        'test.ts',
        `
var a = 1
function f(){
  var b = 1
  var thisBlock = ThisBlockText<any>()
}
      `.trim()
      )
      replaceFileFunctionCall(project.getSourceFile('test.ts')!, { extractorDataMode: 'asArgument' })
      expect(removeWhites(project.getSourceFile('test.ts')!.getText())).toContain(
        `var thisBlock = ThisBlockText<any>("\\n var b = 1\\n var thisBlock = ThisBlockText<any>()\\n")`
      )
    })
  })

  describe('nested', () => {
    it('should extract node body that calls an extractor', () => {
      const project = new Project()
      project.createSourceFile(
        'test.ts',
        `
const body = BodyText<typeof f>()
function f(){
  const c = BodyText<typeof f>()
}
      `.trim()
      )

      replaceFileFunctionCall(project.getSourceFile('test.ts')!, { extractorDataMode: 'asArgument' })
      expect(removeWhites(project.getSourceFile('test.ts')!.getText())).toContain(
        `const c = BodyText<typeof f>("const c = BodyText<typeof f>()")`
      )
    })
  })

  describe('ProjectFiles', () => {
    it('should extract this project source files names', () => {
      const project = new Project()
      project.createSourceFile('test.ts', `const projectFiles = ProjectFiles()`)
      project.createSourceFile('test2.ts', `export 1`)
      project.createSourceFile('foo/bar/file.ts', `export 2`)
      replaceFileFunctionCall(project.getSourceFile('test.ts')!, {
        extractorDataMode: 'asArgument',
        project
      })
      expect(removeWhites(project.getSourceFile('test.ts')!.getText())).toContain(
        `const projectFiles = ProjectFiles(["test.ts","test2.ts","foo/bar/file.ts"])`
      )
    })
  })

  describe('OrganizeImports', () => {
    it('should organize imports of current file if none given', () => {
      const project = new Project()
      project.createSourceFile('test.ts', `import {foo} from './foo'; const count = OrganizeImports()`)
      replaceFileFunctionCall(project.getSourceFile('test.ts')!, {
        extractorDataMode: 'asArgument',
        project
      })
      expect(removeWhites(project.getSourceFile('test.ts')!.getText()).trim()).toBe(
        `const count = OrganizeImports({}, undefined)`
      )
    })

    it('should organize imports of given files only', () => {
      const project = new Project()
      project.createSourceFile(
        'test1.ts',
        `import {foo} from './foo1'; const count = OrganizeImports({path: '**/test*.ts'}); export Math.random()`
      )
      project.createSourceFile('test2.ts', `import {foo} from './foo2'; export Math.random()`)
      project.createSourceFile('noTest.ts', `import {foo} from './foo3'; export Math.random()`)
      replaceFileFunctionCall(project.getSourceFile('test1.ts')!, {
        extractorDataMode: 'asArgument',
        project
      })
      expect(removeWhites(project.getSourceFile('test1.ts')!.getText()).trim()).toBe(
        `const count = OrganizeImports({path: '**/test*.ts'}, undefined); export Math.random()`
      )
      expect(removeWhites(project.getSourceFile('test2.ts')!.getText()).trim()).toBe(`export Math.random()`)
      expect(removeWhites(project.getSourceFile('noTest.ts')!.getText()).trim()).toBe(
        `import {foo} from './foo3'; export Math.random()`
      )
    })
  })

  describe('RemoveUnused', () => {
    it('should remove unused symbols of current file if none given', () => {
      const project = new Project()
      project.createSourceFile(
        'test.ts',
        `import {foo} from 'foo'; var a=1; const count = 0; export function f<T>(a: number){}; export 5; RemoveUnused() export class C {
        private m(p:string){}
      }`
      )
      replaceFileFunctionCall(project.getSourceFile('test.ts')!, {
        extractorDataMode: 'asArgument',
        project
      })
      const t = removeWhites(project.getSourceFile('test.ts')!.getText()).trim()
      expect(t).not.toContain(`import {foo} from`)
      expect(t).not.toContain(`var a=1`)
      expect(t).not.toContain(`const count = 0`)
    })

    xit('should remove unused symbols of given files only', () => {})
  })
})


// function getApplicableRefactors(fileName: string, positionOrRange: number | ts.TextRange, preferences: ts.UserPreferences | undefined): ts.ApplicableRefactorInfo[] {
//   const all = getAllSupportedCodeFixesTryEach(info.languageService, fileName, positionOrRange, {}, preferences)
//   const thisRefactor = {
//     name: PLUGIN_NAME,
//     description: PLUGIN_NAME,
//     actions:
//       all.map(fix => {
//         const line = fix.changes[0] && fix.changes[0].textChanges[0] && fix.changes[0].textChanges[0].span && ts.getLineAndCharacterOfPosition(info.languageService.getProgram().getSourceFile(fileName), fix.changes[0].textChanges[0].span.start).line
//         return {
//           name: fix.diagnostic.code + '',
//           description: `${fix.description} (code:${fix.diagnostic.code}, line:${line} - ${fix.diagnostic.message})`,
//         }
//       })
//   }
//   return [thisRefactor]
// }

// function getEditsForRefactor(fileName: string, formatOptions: ts.FormatCodeSettings, positionOrRange: number | ts.TextRange, refactorName: string, actionName: string, preferences: ts.UserPreferences | undefined): ts.RefactorEditInfo | undefined {
//   if (refactorName === PLUGIN_NAME) {
//     log('getEditsForRefactor ' + actionName)
//   }
//   const code = parseInt(actionName)
//   if (!code) {
//     return undefined
//   }
//   const range: ts.TextRange = typeof (positionOrRange) === 'number' ? { pos: positionOrRange, end: positionOrRange } : positionOrRange
//   const codeFixes = info.languageService.getCodeFixesAtPosition(fileName, range.pos, range.end, [code], formatOptions, preferences)
//   return {
//     edits: flat(codeFixes.map(c => c.changes))
//   }
// }
