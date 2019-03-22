import { exec, cat } from 'shelljs'
import { removeWhites } from 'misc-utils-of-mine-generic'

describe('cli', () => {
  afterAll(() => {
    exec('npx ts-node src/cli.ts --moduleSpecifier "../.." --clean')
  })

  it('src/__tests__/cli/typeTextSample.ts', () => {
    cliTest(
      'src/__tests__/cli/typeTextSample.ts',
      'undefined undefined undefined',
      `UnionOf<[1, Date[]]> UnionOf<[1, boolean | string]> Required<{ a: null | false }>`
    )
  })

  it('src/__tests__/cli/nodeTextSample.ts', () => {
    cliTest(
      'src/__tests__/cli/nodeTextSample.ts',
      'undefined undefined',
      `function f() { type T = any } class C { i = 1 m() { return this.i + 1 } }`
    )
  })

  it('src/__tests__/cli/bodyTextSample.ts', () => {
    cliTest(
      'src/__tests__/cli/bodyTextSample.ts',
      'undefined',
      `C.counter++ const c = new C() return a.replace('"', q) + c.m()`
    )
  })

  it('src/__tests__/cli/thisBlockTextSample.ts', () => {
    cliTest(
      'src/__tests__/cli/thisBlockTextSample.ts',
      'undefined undefined undefined',
      `C.counter++ const c = new C() console.log(removeWhites(ThisBlockText() || 'undefined')) return a.replace('"', q) + c.m() console.log(removeWhites(ThisBlockText() || 'undefined')) return Math.PI console.log(removeWhites(ThisBlockText() || 'undefined')) return a.getTime() + 1`
    )
  })

  it('src/__tests__/cli/astSample.ts', () => {
    cliTest(
      'src/__tests__/cli/astSample.ts',
      'undefined undefined',
      `(SourceFile) <----- TARGET NODE IS THE FOLLOWING ------> I (InterfaceDeclaration)  (Identifier) m (MethodSignature)  (Identifier)  (VoidKeyword)  (SourceFile)  C (ClassDeclaration) m (MethodDeclaration)  (Block)  (ReturnStatement) f (FunctionExpression) (Block) (VariableStatement) (VariableDeclarationList)  <----- TARGET NODE IS THE FOLLOWING ------> ast1 (VariableDeclaration)   (Identifier)`
  )
  })

})

function cliTest(program: string, cleanOutput: string, instrumentedOutput: string) {
  let r: any

  r = exec(`npx ts-node src/cli.ts --moduleSpecifier "../.." --clean --filePattern "**/${program}"`)
  expect(r.code).toBe(0)
  r = exec(`npx ts-node ${program}`)
  expect(r.code).toBe(0)
  expect(removeWhites(r.stdout)).toContain(removeWhites(cleanOutput))
  expect(cat(program).toString()).not.toContain('const __extractor_prepend__ ')
  expect(cat(program).toString()).not.toContain(`import { get } from "./__poor_man_reflection__";`)

  r = exec(
    `npx ts-node src/cli.ts --moduleSpecifier "../.." --extractorDataMode folderFile --filePattern "**/${program}"`
  )
  expect(r.code).toBe(0)
  r = exec(`npx ts-node ${program}`)
  expect(r.code).toBe(0)
  expect(removeWhites(r.stdout)).toContain(removeWhites(instrumentedOutput))
  expect(cat(program).toString()).not.toContain('const __extractor_prepend__ ')
  expect(cat(program).toString()).toContain(`import { get } from "./__poor_man_reflection__";`)

  r = exec(`npx ts-node src/cli.ts --moduleSpecifier "../.." --clean --filePattern "**/${program}"`)
  expect(r.code).toBe(0)
  r = exec(`npx ts-node ${program}`)
  expect(r.code).toBe(0)
  expect(removeWhites(r.stdout)).toContain(removeWhites(cleanOutput))
  expect(cat(program).toString()).not.toContain('const __extractor_prepend__ ')
  expect(cat(program).toString()).not.toContain(`import { get } from "./__poor_man_reflection__";`)

  r = exec(
    `npx ts-node src/cli.ts --moduleSpecifier "../.." --extractorDataMode prependVariable --filePattern "**/${program}"`
  )
  expect(r.code).toBe(0)
  r = exec(`npx ts-node ${program}`)
  expect(r.code).toBe(0)
  expect(removeWhites(r.stdout)).toContain(removeWhites(instrumentedOutput))
  expect(cat(program).toString()).toContain('const __extractor_prepend__ ')
  expect(cat(program).toString()).not.toContain(`import { get } from "./__poor_man_reflection__";`)

  r = exec(`npx ts-node src/cli.ts --moduleSpecifier "../.." --clean --filePattern "**/${program}"`)
  expect(r.code).toBe(0)
  r = exec(`npx ts-node ${program}`)
  expect(r.code).toBe(0)
  expect(removeWhites(r.stdout)).toContain(removeWhites(cleanOutput))
  expect(cat(program).toString()).not.toContain('const __extractor_prepend__ ')
  expect(cat(program).toString()).not.toContain(`import { get } from "./__poor_man_reflection__";`)
}
