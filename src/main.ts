import Project from 'ts-simple-ast'
import {replaceFunctionCall} from './replaceFunctionCall'
import {Config, Replacement} from './types'
import {mkdir, cp, test} from 'shelljs'
import {dirname, join} from 'path'
import {writeFileSync} from 'fs'

/**
 * Executes the tool on a given TypeScript project in filesystem. See `Config` documentation.
 */
export function main(config: Config) {
  const replacements: (Replacement | undefined)[] = []

  try {
    const {tsConfigFilePath = './tsconfig.json'} = config
    if (config.help) {
      console.log(`Usage: 

npx typescript-poor-man-reflection

Options: 

  --clean               will clean up arguments from project previously modified with this tool
  --tsConfigFilePath    get project configuration from different file than default './tsconfig.json'
  --out                 will write modified files in that folder instead of writing files in-place
  --debug               will print debug information while executing

`)
      process.exit(0)
    }
    if (!test('-f', tsConfigFilePath)) {
      console.error('Cannot find project configuration at ' + tsConfigFilePath + '. Aborting.')
      process.exit(1)
    }
    config.debug && console.log('Starting with configuration:\n', config)
    const project = new Project({
      tsConfigFilePath,
      addFilesFromTsConfig: true,
    })
    project
      .getSourceFiles()
      .filter(f => !f.isFromExternalLibrary() && !f.isDeclarationFile())
      .forEach(f => {
        replacements.push(...replaceFunctionCall(f, config))
      })

    if (config.out) {
      mkdir('-p', config.out)
      const base = project.createSourceFile('__test.ts', '')
      project.getSourceFiles().forEach(f => {
        if (f !== base) {
          const path = base.getRelativePathTo(f)
          mkdir('-p', join(config.out!, dirname(path)))
          writeFileSync(join(config.out!, path), f.getFullText())
        }
      })
      cp(tsConfigFilePath, join(config.out!, 'tsconfig.json'))
    } else {
      project.saveSync()
    }

    config.debug &&
      console.log(
        `Summary: 
${JSON.stringify(replacements)}
      `.trim(),
      )
  } catch (error) {
    console.error(`
An error has occurred: 
${error}
${error.stack}`)
    console.log(
      `The accomplishment report:
${JSON.stringify(replacements)}
    `.trim(),
    )
    process.exit(1)
  }
}
