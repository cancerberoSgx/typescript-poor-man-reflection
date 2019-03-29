import { test, ls } from 'shelljs'
import { defaultOptions, replaceProjectFunctionCall } from './replaceProjectFunctionCall'
import { Replacement, ReplaceProjectFunctionCallOptions } from './types'
import { flat, withoutExtension } from 'misc-utils-of-mine-generic'
import { notFalsy } from 'misc-utils-of-mine-typescript'
import { isExportedExtractor } from './extractors'

export function main(options: ReplaceProjectFunctionCallOptions) {
  let replacements: (Replacement | undefined)[] = []
  try {
    const { tsConfigFilePath = './tsconfig.json' } = options
    if (options.help) {
      helpAndExit(options)
    }
    if (!test('-f', tsConfigFilePath)) {
      console.error('Cannot find project configuration at ' + tsConfigFilePath + '. Aborting.')
      process.exit(1)
    }
    options.debug && console.log('Starting with user options:\n', options)

    options = { ...defaultOptions, ...options, tsConfigFilePath }
    options.debug && console.log('All options:\n', options)

    const promises: Promise<any>[] = [Promise.resolve()]
    if (options.register) {
      flat(options.register!.split(',').map(f => ls(f))).forEach(f => {
        try {
          if (f.endsWith('.ts')) {
            promises.push(import(withoutExtension(f)))
          } else {
            promises.push(import(f))
          }
        } catch (error) {
          console.warn('ERROR registering extractor --register', f, error)
        }
      })
    }
    Promise.all(promises).then(loaded => {
      loaded
        .map(m => m && m.default)
        .filter(notFalsy)
        .filter(isExportedExtractor)
        .forEach(e => {
          options.debug && console.log('Registered external extractor ', e.name)
          options.extracts = options.extracts || {}
          options.extracts[e.name] = e.extractor
        })
      replaceProjectFunctionCall(tsConfigFilePath, options)
      options.debug &&
        console.log(
          `Summary: 
${JSON.stringify(replacements)}
      `.trim()
        )
    })
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

  --extractorDataMode           data extraction mode: 'folderFile': (default) all folder's files data is stored in a single new file (--extractorDataFolderFileName). 'prependVariable' each file data is stored in a variable which is declared at the top of the file (--extractorDataVariableName)

  --filePattern                 if provided it will only modify files that match the given glob. Example: --filePattern "**/__tests__/**/withTypes/**/*.ts*"
  
  --moduleSpecifier             extract only from function calls imported from this module
  
  --extractorDataVariableName   name of the variable for  --extractorDataMode==='prependVariable'
  
  
  --extractorDataFolderFileName name of the file for --extractorDataMode==='folderFile'
  
  --out                         write modified files in that folder instead of writing files in-place
  
  --debug                       print debug information while executing

  --register                    comma separated paths or globs to packages or .ts files exporting (default) ExportedExtractor objects will be loaded and available to user code.
  
${
  config.extraOptionsHelp
    ? Object.keys(config.extraOptionsHelp)
        .map(option => `  --${option}  ${config.extraOptionsHelp![option]}`)
        .join('\n\n')
    : ''
}
      `.trim()
  )
  process.exit(0)
}
