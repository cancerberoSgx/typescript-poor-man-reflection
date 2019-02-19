import Project from 'ts-simple-ast'
import { replaceFunctionCall } from './replaceFunctionCall'
import { Config, Replacement } from './types'
import { mkdir } from 'shelljs';

/** 
 * Executes the tool on a given TypeScript project in filesystem. See `Config` documentation. 
 */
export function main(config: Config) {
  const replacements: (Replacement | undefined)[] = []

  try {
    const { tsConfigFilePath = './tsconfig.json' } = config
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
    
    if(config.out) {
      mkdir('-p', config.out)
      const tsConfig = project.getSourceFile(tsConfigFilePath)!
      project.getSourceFiles().forEach(f=>{
        const p = f.getRelativePathTo(tsConfig)
        console.log(config.out, p)     
      })
    }
    else {
      project.saveSync()
    }

    config.debug &&
      console.log(`Summary: 
${JSON.stringify(replacements)}
      `.trim())

  } catch (error) {
    console.error(`
An error has occurred: 
${error}
${error.stack}`)
    console.log(`The accomplishment report:
${JSON.stringify(replacements)}
    `.trim())
    process.exit(1)
  }
}
