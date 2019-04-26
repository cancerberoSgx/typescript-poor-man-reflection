import { exec, config, cat } from 'shelljs'

describe('CLI --register', () => {
  config.silent = false
  const customExtractor =
    '/home/sg/git/typescript-poor-man-reflection/src/__tests__/registerExtractor/exportedExtractor1.ts'
  // const customExtractor = '/home/sg/git/typescript-poor-man-reflection/dist/src/__tests__/registerExtractor/exportedExtractor1'
  const runner = `npx ts-node -T src/cli.ts`
  // const runner = `node dist/src/cli`
  const program = `src/__tests__/registerExtractor/cliExperimentTestSample1.ts`
  // const program = `dist/src/__tests__/registerExtractor/cliExperimentTestSample1`

  afterAll(() => {
    exec(`${runner} --moduleSpecifier "./exportedExtractor1"  --register "${customExtractor}" --clean`)
  })

  it('dummy', () => {
    expect(1).toBe(1)
  })

  xit('Should be able to register a .ts file exporting an extractor', () => {
    let r = exec(
      `${runner} --moduleSpecifier "./exportedExtractor1" --extractorDataMode folderFile --filePattern "**/${program}"  --register "${customExtractor}" --clean`
    )
    expect(r.code).toBe(0)

    r = exec(`npx ts-node -T ${program}`)
    if (r.code !== 0) {
      console.error(cat(program).toString(), r.stdout, r.stderr)
      process.exit(1)
    }
    expect(r.code).toBe(0)
    expect(r.stdout).not.toContain('hello seba')

    r = exec(
      `${runner} --moduleSpecifier "./exportedExtractor1" --extractorDataMode folderFile --filePattern "**/${program}" --register "${customExtractor}"`
    )
    expect(r.code).toBe(0)
    r = exec(`npx ts-node -T ${program}`)
    expect(r.code).toBe(0)
    expect(r.stdout).toContain('hello seba')
  })

  xit('Should be able to register node package exporting an extractor (npm i)', () => {})
})
