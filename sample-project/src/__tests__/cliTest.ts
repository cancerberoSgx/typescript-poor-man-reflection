import { exec } from 'shelljs';
import { readFileSync, writeFileSync } from 'fs';


describe('cli', () => {
  let bkp: string
  beforeAll(() => {
    bkp = readFileSync('src/index.ts').toString()
  })
  afterAll(() => {
    writeFileSync('src/index.ts', bkp)

  })
  it('should work', () => {
    let r = exec('npx ts-node src/index')
    expect(r.code).toBe(0)
    expect(r.stdout).toContain('undefined undefined undefined')

    r = exec('npx  get-type-text')
    expect(r.code).toBe(0)

    r = exec('npx ts-node src/index')
    expect(r.code).toBe(0)
    expect(r.stdout).toContain(`Type<Date> {a:'a'} {a:"a"}`)

    r = exec('npx  get-type-text --clean')
    expect(r.code).toBe(0)

    r = exec('npx ts-node src/index')
    expect(r.code).toBe(0)
    expect(r.stdout).toContain('undefined undefined undefined')

  })
})



