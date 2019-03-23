import { cat, config, exec } from 'shelljs';

let r:any

describe('cli', () => {
  afterAll(() => {
    exec('npx typescript-poor-man-reflection --clean')
  })

  it('src/__sample_tests__/typeTextSample.ts', () => {
    cliTest('src/__sample_tests__/typeTextSample.ts', 'undefined undefined undefined', `UnionOf<[1, Date[]]> UnionOf<[1, boolean | string]> Required<{a:null|false}>`);
  })

})

function cliTest(program: string, cleanOutput: string, instrumentedOutput: string) {
  config.silent=true
  
  r = exec(`npx typescript-poor-man-reflection --clean --filePattern "**/${program}"`);
  expect(r.code).toBe(0);
  r = exec(`npx ts-node ${program}`);
  expect(r.code).toBe(0);
  expect(r.stdout).toContain(cleanOutput);
  expect(cat(program).toString()).not.toContain('const __extractor_prepend__ ')
  expect(cat(program).toString()).not.toContain(`import { get } from "./__poor_man_reflection__";`)
  

  r = exec(`npx typescript-poor-man-reflection --extractorDataMode folderFile --filePattern "**/${program}"`);
  expect(r.code).toBe(0);
  r = exec(`npx ts-node ${program}`);
  expect(r.code).toBe(0);
  expect(r.stdout).toContain(instrumentedOutput);
  expect(cat(program).toString()).not.toContain('const __extractor_prepend__ ')
  expect(cat(program).toString()).toContain(`import { get } from "./__poor_man_reflection__";`)


  r = exec(`npx typescript-poor-man-reflection --clean --filePattern "**/${program}"`);
  expect(r.code).toBe(0);
  r = exec(`npx ts-node ${program}`);
  expect(r.code).toBe(0);
  expect(r.stdout).toContain(cleanOutput);
  expect(cat(program).toString()).not.toContain('const __extractor_prepend__ ')
  expect(cat(program).toString()).not.toContain(`import { get } from "./__poor_man_reflection__";`)


  r = exec(`npx typescript-poor-man-reflection --extractorDataMode prependVariable --filePattern "**/${program}"`);
  expect(r.code).toBe(0);
  r = exec(`npx ts-node ${program}`);
  expect(r.code).toBe(0);
  expect(r.stdout).toContain(instrumentedOutput);
  expect(cat(program).toString()).toContain('const __extractor_prepend__ ')
  expect(cat(program).toString()).not.toContain(`import { get } from "./__poor_man_reflection__";`)


  r = exec(`npx typescript-poor-man-reflection --clean --filePattern "**/${program}"`);
  expect(r.code).toBe(0);
  r = exec(`npx ts-node ${program}`);
  expect(r.code).toBe(0);
  expect(r.stdout).toContain(cleanOutput);
  expect(cat(program).toString()).not.toContain('const __extractor_prepend__ ')
  expect(cat(program).toString()).not.toContain(`import { get } from "./__poor_man_reflection__";`)

}