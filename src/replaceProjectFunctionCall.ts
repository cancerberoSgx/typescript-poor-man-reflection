import Project, { SourceFile } from 'ts-simple-ast'
import { replaceFileFunctionCall } from './replaceFileFunctionCall'
import { ReplaceProjectFunctionCallOptions, Replacement } from './types'
import { mkdir, cp } from 'shelljs'
import { dirname, join } from 'path'
import { writeFileSync } from 'fs'
import   minimatch from 'minimatch'
import { defaultExtractors } from './extractors';

//TODO: memoize
export function includeFile(f: SourceFile, config: {extractorDataFolderFileName?: string, filePattern?: string}){
  
  if(f.isFromExternalLibrary() || f.isDeclarationFile()){
    return false
  }
  if(f.getBaseName().includes(config.extractorDataFolderFileName||'__tsd_check_runtime__')){
    return false
  }
  if(config.filePattern) {
    if(minimatch(f.getFilePath(), config.filePattern)){
      return true
    }
    else {
      return false
    }
  }else {
    return true
  }
}

export const defaultOptions: Required<ReplaceProjectFunctionCallOptions> = {
  moduleSpecifier:'typescript-poor-man-reflection',
  clean:false,
  extracts:defaultExtractors,
  extractorDataVariableName:'__extractor_prepend__', 
  extractorDataMode: 'prependVariable', extractorDataFolderFileName:'__tsd_check_runtime__', filePattern: '', debug: false, extraOptionsHelp: {}, help: false, out: '', tsConfigFilePath: './tsconfig.json'
}
/**
 * Executes the tool on a given TypeScript project in filesystem. See `Config` documentation.
 */
export function replaceProjectFunctionCall(
  tsConfigFilePath: string,
  options: ReplaceProjectFunctionCallOptions,
  replacements: (Replacement | undefined)[]=[]
) {
      const project = new Project({
    tsConfigFilePath,
    addFilesFromTsConfig: true
  })
  project
    .getSourceFiles()
    .filter(f => {
      // we remove all folderFileData files always
      if(f.getBaseName().includes(options.extractorDataFolderFileName||defaultOptions.extractorDataFolderFileName)){
        f.deleteImmediatelySync()
        return false
      }
      return includeFile(f, options)
    })
    .forEach(f => {
      options.debug && console.log('Modifying file '+f.getFilePath());      
      replacements.push(...replaceFileFunctionCall(f, {...defaultOptions, ...options}))
    })
    
  if (options.out) {
    mkdir('-p', options.out)
    const base = project.createSourceFile('__test.ts', '')
    project.getSourceFiles().forEach(f => {
      
      if (f !== base) {
        const path = base.getRelativePathTo(f)
          mkdir('-p', join(options.out!, dirname(path)))
          writeFileSync( join(options.out!, path), f.getFullText())
        }
    })
    cp(tsConfigFilePath, join(options.out!, 'tsconfig.json'))
  } else {
    project.saveSync()
  }
  return replacements
}
