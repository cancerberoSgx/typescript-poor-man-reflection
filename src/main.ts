import { ReplaceProjectFunctionCallOptions, Replacement } from './types'
import { test } from 'shelljs'
import { replaceProjectFunctionCall } from './replaceProjectFunctionCall'

export function main(config: ReplaceProjectFunctionCallOptions) {
  let replacements: (Replacement | undefined)[] = []
  try {
    const { tsConfigFilePath = './tsconfig.json' } = config
    if (config.help) {
      helpAndExit(config)
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

function helpAndExit(config: ReplaceProjectFunctionCallOptions) {
  console.log(
    `Usage: 
      
npx typescript-poor-man-reflection

Options: 

  --clean                       clean up arguments from project previously modified with this tool

  --tsConfigFilePath            get project configuration from different file than default './tsconfig.json'

  --out                         write modified files in that folder instead of writing files in-place

  --debug                       print debug information while executing

  --moduleSpecifier             extract only from function calls imported from this module

  --extractorDataVariableName   name of the variable for  --extractorDataMode==='prependVariable'

  --extractorDataMode           data extraction mode: 'folderFile': (default) all folder's files data is stored in a single new file (extractorDataFolderFileName). 'prependVariable' each file data is stored in a variable which is declared at the top of the file

  --extractorDataFolderFileName  name of the file for --extractorDataMode==='folderFile'
${
  config.extraOptionsHelp
    ? Object.keys(config.extraOptionsHelp).map(option => `  --${option}  ${config.extraOptionsHelp![option]}`).join('\n\n')
    : ''
}
      `.trim()
  )
  process.exit(0)
}
