import {Project} from 'ts-simple-ast'
import {replaceFileFunctionCall} from '../replaceFileFunctionCall'

describe('replaceFunctionCall', () => {
  describe('add argument', () => {
    it('should  replace given function name and module specifier with first type attr text', () => {
      const project = new Project()
      project.createSourceFile(
        'test.ts',
        `
import TypeText from 'typescript-poor-man-reflection'
type Type<T> = {a: string, b: T}[]
const n = TypeText<Type<Date>>()
const b = TypeText<{a:'a'}>()
const c = TypeText<{a:"a"}>()
    `,
      )

      replaceFileFunctionCall(project.getSourceFile('test.ts')!)

      const t = project.getSourceFile('test.ts')!.getText()

      expect(t).toContain(
        `
import TypeText from 'typescript-poor-man-reflection'
type Type<T> = {a: string, b: T}[]
const n = TypeText<Type<Date>>('Type<Date>')
const b = TypeText<{a:'a'}>('{a:\\'a\\'}')
const c = TypeText<{a:"a"}>('{a:"a"}')
    `.trim(),
      )

      // and now the second time without modifications
      project.getSourceFile('test.ts')!.replaceWithText(
        `
import TypeText from 'typescript-poor-man-reflection'
type Type<T> = {a: string, b: T}[]
const n = TypeText<Type<Date>>('Type<Date>')
const b = TypeText<Type<{a:'a'}>>('{a:\\'a\\'}')
const c = TypeText<{a:Type<number>}>('{a:"a"}')
        `.trim(),
      )

      replaceFileFunctionCall(project.getSourceFile('test.ts')!)

      const t2 = project.getSourceFile('test.ts')!.getText()

      expect(t2).toContain(
        `
import TypeText from 'typescript-poor-man-reflection'
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
      replaceFileFunctionCall(project.getSourceFile('test.ts')!, {clean: true})
      const t2 = project.getSourceFile('test.ts')!.getText()
      expect(t2).toContain(`const b = TypeText<{a:'a'}>()`)
    })
    it('should work if call does not have args', () => {
      const project = new Project()
      project.createSourceFile('test.ts', `const b = TypeText<{a:'a'}>()`)
      replaceFileFunctionCall(project.getSourceFile('test.ts')!, {clean: true})
      const t2 = project.getSourceFile('test.ts')!.getText()
      expect(t2).toContain(`const b = TypeText<{a:'a'}>()`)
    })
    it('should remove arg comma', () => {
      const project = new Project()
      project.createSourceFile('test.ts', `const b = TypeText<{a:'a'}>("{a:'a'}",)`)
      replaceFileFunctionCall(project.getSourceFile('test.ts')!, {clean: true})
      const t2 = project.getSourceFile('test.ts')!.getText()
      expect(t2).toContain(`const b = TypeText<{a:'a'}>()`)
    })
  })
})
