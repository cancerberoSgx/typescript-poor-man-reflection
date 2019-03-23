import { removeWhites } from 'misc-utils-of-mine-generic'
import { cat, exec } from 'shelljs'

describe('cli', () => {
  afterAll(() => {
    exec('npx ts-node src/cli.ts --moduleSpecifier "../.." --clean')
  })

  it('dummy', () => {
    expect(1).toBe(1)
  })

  it('src/__tests__/cli/typeTextSample.ts', () => {
    cliTest('src/__tests__/cli/typeTextSample.ts', 'undefined undefined undefined', [
      `UnionOf<[1, Date[]]> UnionOf<[1, boolean | string]> Required<{ a: null | false }>`
    ])
  })

  it('src/__tests__/cli/nodeTextSample.ts', () => {
    cliTest('src/__tests__/cli/nodeTextSample.ts', 'undefined undefined', [
      `function f() { type T = any } class C { i = 1 m() { return this.i + 1 } }`
    ])
  })

  it('src/__tests__/cli/bodyTextSample.ts', () => {
    cliTest('src/__tests__/cli/bodyTextSample.ts', 'undefined', [
      `C.counter++ const c = new C() return a.replace('"', q) + c.m()`
    ])
  })

  it('src/__tests__/cli/thisBlockTextSample.ts', () => {
    cliTest('src/__tests__/cli/thisBlockTextSample.ts', 'undefined undefined undefined', [
      `C.counter++ const c = new C() console.log(removeWhites(ThisBlockText() || 'undefined')) return a.replace('"', q) + c.m() console.log(removeWhites(ThisBlockText() || 'undefined')) return Math.PI console.log(removeWhites(ThisBlockText() || 'undefined')) return a.getTime() + 1`
    ])
  })

  it('src/__tests__/cli/astSample.ts', () => {
    cliTest('src/__tests__/cli/astSample.ts', 'undefined undefined {}', [
      '(SourceFile) <----- TARGET NODE IS THE FOLLOWING ------> I (InterfaceDeclaration) (Identifier) m (MethodSignature) (Identifier) (VoidKeyword) " " (SourceFile) C (ClassDeclaration) m (MethodDeclaration) (Block) (ReturnStatement) f (FunctionExpression) (Block) (VariableStatement) (VariableDeclarationList) <----- TARGET NODE IS THE FOLLOWING ------> ast1 (VariableDeclaration) (Identifier) PrintAst (CallExpression)',
      '{"name":"","kind":"SourceFile","text":"","children":[{"name":"","kind":"VariableStatement","text":"","children":[{"name":"","kind":"VariableDeclarationList","text":"","children":[{"name":"eee","kind":"VariableDeclaration","text":"","children":[{"name":"","kind":"Identifier","text":"","children":[]},{"name":"","kind":"CallExpression","text":"","children":[{"name":"","kind":"CallExpression","text":"","children":[{"name":"m","kind":"PropertyAccessExpression","text":"","children":[{"name":"C","kind":"NewExpression","text":"","children":[{"name":"","kind":"Identifier","text":"","children":[]}]},{"name":"","kind":"Identifier","text":"","children":[]}]}]}]}]}]}]}]}'
    ])
  })

  it('src/__tests__/cli/nodeTypeSample.ts', () => {
    cliTest('src/__tests__/cli/nodeTypeSample.ts', 'undefined undefined undefined undefined undefined undefined', [
      `C this I | null C false | "foo" false | "foo"`
    ])
  })

  it('src/__tests__/cli/lsSample.ts', () => {
    cliTest('src/__tests__/cli/lsSample.ts', 'undefined undefined', [`package.json`, `index.ts`])
  })

  it('src/__tests__/cli/catSample.ts', () => {
    cliTest('src/__tests__/cli/catSample.ts', 'undefined', [`"name": "typescript-poor-man-reflection"`])
  })

  it('src/__tests__/cli/readFilesSample.ts', () => {
    cliTest('src/__tests__/cli/readFilesSample.ts', 'undefined', [
      `{ name: './src/__tests__/cli/astSample.ts'`,
      `content: "import { PrintAst } from '../.`
    ])
  })
})

function cliTest(program: string, cleanOutput: string, instrumentedOutput: string[]) {
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
  instrumentedOutput.forEach(o => expect(removeWhites(r.stdout)).toContain(removeWhites(o)))
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
  instrumentedOutput.forEach(o => expect(removeWhites(r.stdout)).toContain(removeWhites(o)))
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
