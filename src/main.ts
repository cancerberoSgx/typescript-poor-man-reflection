import { ReplaceProjectFunctionCallOptions, Replacement } from './types'
import { test } from 'shelljs'
import { replaceProjectFunctionCall } from './replaceProjectFunctionCall'

export function main(config: ReplaceProjectFunctionCallOptions) {
  let replacements: (Replacement | undefined)[] = []
  try {
    const { tsConfigFilePath = './tsconfig.json' } = config
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
    replaceProjectFunctionCall(tsConfigFilePath, config)

    config.debug &&
      console.log(
        `Summary: 
${JSON.stringify(replacements)}
      `.trim()
      )
  } catch (error) {
    console.error(`
An error has occurred: 
${error}
${error.stack}`)
    console.log(
      `The accomplishment report:
${JSON.stringify(replacements)}
    `.trim()
    )
    process.exit(1)
  }
}
