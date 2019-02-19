import { Project } from 'ts-simple-ast'
import { replaceFunctionCall } from '../replaceFunctionCall'

describe('replaceFunctionCall', () => {
  describe('add argument', () => {
    it('should  replace given function name and module specifier with first type attr text', () => {
      const project = new Project()
      project.createSourceFile(
        'test.ts',
        `
import TypeText from 'get-type-text'
type Type<T> = {a: string, b: T}[]
const n = TypeText<Type<Date>>()
const b = TypeText<{a:'a'}>()
const c = TypeText<{a:"a"}>()
    `,
      )

      replaceFunctionCall(project.getSourceFile('test.ts')!)

      const t = project.getSourceFile('test.ts')!.getText()

      expect(t).toContain(
        `
import TypeText from 'get-type-text'
type Type<T> = {a: string, b: T}[]
const n = TypeText<Type<Date>>('Type<Date>')
const b = TypeText<{a:'a'}>('{a:\\'a\\'}')
const c = TypeText<{a:"a"}>('{a:"a"}')
    `.trim(),
      )

      // and now the second time without modifications
      project.getSourceFile('test.ts')!.replaceWithText(
        `
import TypeText from 'get-type-text'
type Type<T> = {a: string, b: T}[]
const n = TypeText<Type<Date>>('Type<Date>')
const b = TypeText<Type<{a:'a'}>>('{a:\\'a\\'}')
const c = TypeText<{a:Type<number>}>('{a:"a"}')
        `.trim(),
      )

      replaceFunctionCall(project.getSourceFile('test.ts')!)

      const t2 = project.getSourceFile('test.ts')!.getText()

      expect(t2).toContain(
        `
import TypeText from 'get-type-text'
type Type<T> = {a: string, b: T}[]
const n = TypeText<Type<Date>>('Type<Date>')
const b = TypeText<Type<{a:'a'}>>('Type<{a:\\'a\\'}>')
const c = TypeText<{a:Type<number>}>('{a:Type<number>}')
`.trim(),
      )
    })
  })

  describe('cleanArguments', () => {
    it('should clean existing args', () => {
      const project = new Project()
      project.createSourceFile('test.ts', `const b = TypeText<{a:'a'}>("{a:'a'}")`)
      replaceFunctionCall(project.getSourceFile('test.ts')!, { cleanArguments: true })
      const t2 = project.getSourceFile('test.ts')!.getText()
      expect(t2).toContain(`const b = TypeText<{a:'a'}>()`)
    })
    it('should work if call does not have args', () => {
      const project = new Project()
      project.createSourceFile('test.ts', `const b = TypeText<{a:'a'}>()`)
      replaceFunctionCall(project.getSourceFile('test.ts')!, { cleanArguments: true })
      const t2 = project.getSourceFile('test.ts')!.getText()
      expect(t2).toContain(`const b = TypeText<{a:'a'}>()`)
    })
    it('should remove arg comma', () => {
      const project = new Project()
      project.createSourceFile('test.ts', `const b = TypeText<{a:'a'}>("{a:'a'}",)`)
      replaceFunctionCall(project.getSourceFile('test.ts')!, { cleanArguments: true })
      const t2 = project.getSourceFile('test.ts')!.getText()
      expect(t2).toContain(`const b = TypeText<{a:'a'}>()`)
    })
  })

  describe('custom function names and extracts', () => {
    it('should build my custom function name and extract', () => {
      const project = new Project()
      project.createSourceFile('test.ts', `
  import {Custom} from 'my-custom-module'
  function f<I>() {
    type Member<I> = keyof I
  }
  var a = Custom<typeof f>()
  `)
      replaceFunctionCall(project.getSourceFile('test.ts')!, {
        moduleSpecifier: 'my-custom-module',
        extracts: {
          Custom: n => '"custom"'
        }
      })
      const t2 = project.getSourceFile('test.ts')!.getText()
      expect(t2).toContain('var a = Custom<typeof f>("custom")')
    })
  })
})
