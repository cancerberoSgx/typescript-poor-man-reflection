import { removeWhites } from 'misc-utils-of-mine-generic'
import { Project } from 'ts-morph'
import { replaceFileFunctionCall } from '../replaceFileFunctionCall'

describe('ProjectFiles', () => {
  it('should extract this project source files names', () => {
    const project = new Project()
    project.createSourceFile('test.ts', `const projectFiles = ProjectFiles()`)
    project.createSourceFile('test2.ts', `export 1`)
    project.createSourceFile('foo/bar/file.ts', `export 2`)
    replaceFileFunctionCall(project.getSourceFile('test.ts')!, {
      extractorDataMode: 'asArgument',
      project
    })
    expect(removeWhites(project.getSourceFile('test.ts')!.getText())).toContain(
      `const projectFiles = ProjectFiles(["test.ts","test2.ts","foo/bar/file.ts"])`
    )
  })
})

describe('Exec', () => {
  it('should execute commands and return status code and stdout', () => {
    const project = new Project()
    project.createSourceFile(
      'test.ts',
      `
const {code, stdout, stderr} = Exec({command: \`node -e "console.log('hello')"\`})
const {code, stdout, stderr} = Exec({command: \`node -e "console.error('error'); process.exit(1)"\`})
      `
    )
    replaceFileFunctionCall(project.getSourceFile('test.ts')!, {
      extractorDataMode: 'asArgument',
      project
    })

    const t = removeWhites(project.getSourceFile('test.ts')!.getText()).trim()
    expect(t).toBe(
      removeWhites(
        `
const {code, stdout, stderr} = Exec({command: \`node -e "console.log('hello')"\`}, "{code: 0, stdout: \\"hello\\n\\", stderr: \\"\\"}")
const {code, stdout, stderr} = Exec({command: \`node -e "console.error('error'); process.exit(1)"\`}, "{code: 1, stdout: \\"\\", stderr: \\"error\\n\\"}")`
      )
    )
  })
})
