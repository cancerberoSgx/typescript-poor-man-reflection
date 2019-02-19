import Project from 'ts-simple-ast'
import {replaceFunctionCall} from './replaceFunctionCall'
import {Config, Replacement} from './types'

/** public JavaScript API to execute the tool on a given TypeScript project in filesystem. See `Config`. */
export function main(config: Config) {
  const replacements: (Replacement | undefined)[] = []

  try {
    const {tsConfigFilePath = './tsconfig.json'} = config
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

    project.saveSync()

    config.debug &&
      console.log(`Summary: 
    
${JSON.stringify(replacements)}`)
  } catch (error) {
    console.error(`An error has occurred: 
${error}
${error.stack}`)
    console.log(`The accomplishment report:
${JSON.stringify(replacements)}
`)
  }
}
