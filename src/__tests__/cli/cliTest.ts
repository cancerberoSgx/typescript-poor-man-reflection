import { exec, cat } from 'shelljs';

describe('cli', () => {
  afterAll(() => {
    exec('npx ts-node src/cli.ts --moduleSpecifier "../.." --clean')
  })
  it('src/__tests__/cli/typeTextSample.ts', () => {
    cliTest('src/__tests__/cli/typeTextSample.ts', 'undefined undefined undefined', `UnionOf<[1, Date[]]> UnionOf<[1, boolean | string]> Required<{a:null|false}>`);
  })
  it('src/__tests__/cli/nodeTextSample.ts', () => {
    cliTest('src/__tests__/cli/nodeTextSample.ts', 'undefined undefined', `function f(){   type T = any } class C {   i=1   m(){return this.i+1} }`);
  })
})

function cliTest(program: string, cleanOutput: string, instrumentedOutput: string) {
  let r: any

  r = exec(`npx ts-node src/cli.ts --moduleSpecifier "../.." --clean --filePattern "**/${program}"`);
  expect(r.code).toBe(0);
  r = exec(`npx ts-node ${program}`);
  expect(r.code).toBe(0);
  expect(r.stdout).toContain(cleanOutput);
  expect(cat(program).toString()).not.toContain('const __extractor_prepend__ ')
  expect(cat(program).toString()).not.toContain(`import { get } from "./__poor_man_reflection__";`)

  r = exec(`npx ts-node src/cli.ts --moduleSpecifier "../.." --extractorDataMode folderFile --filePattern "**/${program}"`);
  expect(r.code).toBe(0);
  r = exec(`npx ts-node ${program}`);
  expect(r.code).toBe(0);
  expect(r.stdout).toContain(instrumentedOutput);
  expect(cat(program).toString()).not.toContain('const __extractor_prepend__ ')
  expect(cat(program).toString()).toContain(`import { get } from "./__poor_man_reflection__";`)

  r = exec(`npx ts-node src/cli.ts --moduleSpecifier "../.." --clean --filePattern "**/${program}"`);
  expect(r.code).toBe(0);
  r = exec(`npx ts-node ${program}`);
  expect(r.code).toBe(0);
  expect(r.stdout).toContain(cleanOutput);
  expect(cat(program).toString()).not.toContain('const __extractor_prepend__ ')
  expect(cat(program).toString()).not.toContain(`import { get } from "./__poor_man_reflection__";`)

  r = exec(`npx ts-node src/cli.ts --moduleSpecifier "../.." --extractorDataMode prependVariable --filePattern "**/${program}"`);
  expect(r.code).toBe(0);
  r = exec(`npx ts-node ${program}`);
  expect(r.code).toBe(0);
  expect(r.stdout).toContain(instrumentedOutput);
  expect(cat(program).toString()).toContain('const __extractor_prepend__ ')
  expect(cat(program).toString()).not.toContain(`import { get } from "./__poor_man_reflection__";`)

  r = exec(`npx ts-node src/cli.ts --moduleSpecifier "../.." --clean --filePattern "**/${program}"`);
  expect(r.code).toBe(0);
  r = exec(`npx ts-node ${program}`);
  expect(r.code).toBe(0);
  expect(r.stdout).toContain(cleanOutput);
  expect(cat(program).toString()).not.toContain('const __extractor_prepend__ ')
  expect(cat(program).toString()).not.toContain(`import { get } from "./__poor_man_reflection__";`)

}