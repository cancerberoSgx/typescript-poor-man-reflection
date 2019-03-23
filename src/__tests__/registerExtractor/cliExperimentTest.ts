import { exec, config } from 'shelljs'

describe('registerExtractor', () => {
  const customExtractor =
    '/home/sg/git/typescript-poor-man-reflection/src/__tests__/registerExtractor/exportedExtractor1.ts'
  afterAll(() => {
    exec(`npx ts-node src/cli.ts --moduleSpecifier "./exportedExtractor1"  --register "${customExtractor}" --clean`)
  })

  it('dummy', () => {
    expect(1).toBe(1)
  })

  it('Should be able to register a .ts file exporting an extractor', () => {
    config.silent = true
    const program = `src/__tests__/registerExtractor/cliExperimentTestSample1.ts`
    let r = exec(
      `npx ts-node src/cli.ts --moduleSpecifier "./exportedExtractor1" --extractorDataMode folderFile --filePattern "**/${program}"  --register "${customExtractor}" --clean`
    )
    expect(r.code).toBe(0)

    r = exec(`npx ts-node ${program}`)
    expect(r.code).toBe(0)
    expect(r.stdout).not.toContain('hello seba')

    r = exec(
      `npx ts-node src/cli.ts --moduleSpecifier "./exportedExtractor1" --extractorDataMode folderFile --filePattern "**/${program}" --register "${customExtractor}"`
    )
    expect(r.code).toBe(0)
    r = exec(`npx ts-node ${program}`)
    expect(r.code).toBe(0)
    expect(r.stdout).toContain('hello seba')
  })

  xit('Should be able to register node package exporting an extractor (npm i)', () => {})
})
