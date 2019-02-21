import { exec } from 'shelljs';
import { readFileSync, writeFileSync } from 'fs';

let r:any
describe('cli', () => {
describe('src/index.ts', () => {

  afterAll(() => {
    exec('npx typescript-poor-man-reflection --clean')
  })
  it('should work', () => {

    r = exec('npx typescript-poor-man-reflection --clean')
    expect(r.code).toBe(0)
    r = exec('npx ts-node src/index')
    expect(r.code).toBe(0)
    expect(r.stdout).toContain('undefined undefined undefined')

    r = exec('npx typescript-poor-man-reflection')
    expect(r.code).toBe(0)

    r = exec('npx ts-node src/index')
    expect(r.code).toBe(0)
    expect(r.stdout).toContain(`Type<Date> {a:'a'} {a:"a"}`)

    r = exec('npx typescript-poor-man-reflection --clean')
    expect(r.code).toBe(0)

    r = exec('npx ts-node src/index')
    expect(r.code).toBe(0)
    expect(r.stdout).toContain('undefined undefined undefined')
  })
})

describe('--extractorDataMode folderFile src/__sample_tests__/short.ts', () => {

  afterAll(() => {
     exec('npx typescript-poor-man-reflection --clean')
  })
  it('should work in both modes extractorDataMode', () => {
    r = exec('npx typescript-poor-man-reflection --clean')
    expect(r.code).toBe(0)

    r = exec('npx ts-node src/__sample_tests__/short.ts')
    expect(r.code).toBe(0)
    expect(r.stdout).toContain('undefined undefined undefined')

    r = exec('npx typescript-poor-man-reflection --extractorDataMode folderFile')
    expect(r.code).toBe(0)

    r = exec('npx ts-node src/__sample_tests__/short.ts')
    expect(r.code).toBe(0)
    expect(r.stdout).toContain(`UnionOf<[1, Date[]]> UnionOf<[1, boolean | string]> Required<{a:null|false}>`)

    r = exec('npx typescript-poor-man-reflection --clean')
    expect(r.code).toBe(0)

    r = exec('npx ts-node src/__sample_tests__/short.ts')
    expect(r.code).toBe(0)
    expect(r.stdout).toContain('undefined undefined undefined')


    r = exec('npx typescript-poor-man-reflection --extractorDataMode prependVariable')
    expect(r.code).toBe(0)
    r = exec('npx ts-node src/__sample_tests__/short.ts')
    expect(r.code).toBe(0)
    expect(r.stdout).toContain(`UnionOf<[1, Date[]]> UnionOf<[1, boolean | string]> Required<{a:null|false}>`)

    r = exec('npx typescript-poor-man-reflection --clean')
    expect(r.code).toBe(0)

    r = exec('npx ts-node src/__sample_tests__/short.ts')
    expect(r.code).toBe(0)
    expect(r.stdout).toContain('undefined undefined undefined')
  })
})

})
