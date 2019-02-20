import { TypeGuards, SyntaxKind, SourceFile, CallExpression, ArrayLiteralExpression } from 'ts-simple-ast';
import { ReplaceFileFunctionCallOptions, ExtractorGetter, ExtractorDataMode } from './types';
import { array2DInsert } from './astUtil';

/**
 * Responsible of reading the extractor data. It provides a getter function that returns a JS expression that
 * should evaluate in the data value corresponding to given index, sourcefile, extractor.
 */
export function extractorGetterBuilder(options: ReplaceFileFunctionCallOptions, index: number, sourceFile: SourceFile, c: CallExpression): ExtractorGetter {
  if (!options.extractorDataMode || options.extractorDataMode === 'prependVariable') {
    return (index: number) => `${options.extractorDataVariableName}[${index}]`;
  }
  else if(options.extractorDataMode==='folderFile'){
    const fileId = getFileId(sourceFile);
    return (index: number) => `get(${fileId}, ${index})`;
  }
  else {
    throw 'extractorDataMode option invalid '+options.extractorDataMode
  }
}

/**
 * Responsible of writing extractor data according to extractorDataMode. instead of fileName as string, we use
 * the file index  in the directory's children sorted alphabetically so the get() expressions are smaller.
 * Instead of `Name<T>(get('myCustomComponentTest.tsx',9))` we just have  `Name<T>(get(2,9))`
 */
export function writeExtractorData(sourceFile: SourceFile, options: {
  extractorDataVariableName: string;
  clean: boolean;
  extractorDataMode?: ExtractorDataMode;
  extractorDataFolderFileName?: string;
}, callExpressions: CallExpression[], prependToFile: string[]) {
  if (!options.extractorDataMode || options.extractorDataMode === 'prependVariable') {
    // we always remove the variable statement and always insert a new one
    const varDecl = sourceFile.getVariableDeclaration(options.extractorDataVariableName);
    if (varDecl) {
      const variableStatement = varDecl.getFirstAncestorByKind(SyntaxKind.VariableStatement);
      if (variableStatement) {
        variableStatement.remove();
      }
    }
    if (!options.clean && callExpressions.length) {
      sourceFile.insertStatements(0, `const ${options.extractorDataVariableName} = [${prependToFile.join(', ')}]`);
    }
  }
  else {
    // first ensure the data file is created and with our data. 
    options.extractorDataFolderFileName = options.extractorDataFolderFileName || '__tsd_check_runtime__';
    const { dataFile, fileId } = ensureDataFile(sourceFile, options, prependToFile)
    dataFile.saveSync();
    
    // Then, always remove the import statement and always insert a new one
    const il = sourceFile.getImportStringLiterals().find(l => l.getText().includes(options.extractorDataFolderFileName!))
    if(il){
      il.getFirstAncestorByKindOrThrow(SyntaxKind.ImportDeclaration).remove()
    }
    if(!options.clean){
      sourceFile.addImportDeclaration({moduleSpecifier: `./${options.extractorDataFolderFileName}`, namedImports: ['get']})
    }
    sourceFile.saveSync()
  }
}


function ensureDataFile(sourceFile: SourceFile, options: { extractorDataVariableName: string; clean: boolean; extractorDataMode?: "prependVariable" | "folderFile" | undefined; extractorDataFolderFileName?: string | undefined; }, prependToFile: string[]) {
  let dataFile = sourceFile.getDirectory().getSourceFiles().find(f => f.getBaseNameWithoutExtension() === options.extractorDataFolderFileName);
  if (!dataFile) {
    //TODO: maybe in put()/get() 
    dataFile = sourceFile.getDirectory().createSourceFile(`${options.extractorDataFolderFileName}.ts`, `
// FILE CREATED AUTOMATICALLY AT COMPILE TIME. DO NOT MODIFY !
export function get(fileId: number, index: number) {
  return data[fileId] && data[fileId][index]
}
/** 
 * 'data[fileId][index]' is the value of the index-nth extractor call in the fieldId-nth source file where
 * fieldId is the index of the alphabetically ordered list of this directory source file children.
 */
const data: any[][] = []
      `.trim());
    dataFile.saveSync();
  }
  const v = dataFile.getVariableDeclarationOrThrow('data');
  const init = v.getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);
  const fileId = getFileId(sourceFile);
  array2DInsert(init, fileId, -1, `[${prependToFile.join(', ')}]`);
  return { dataFile, fileId };
}

function getFileId(sourceFile: SourceFile) {
  const fileId = sourceFile.getDirectory().getSourceFiles().map(f => f.getBaseName()).sort().indexOf(sourceFile.getBaseName());
  if (fileId == -1) {
    throw 'fileId was -1 for file named ' + sourceFile.getFilePath() + ' and dir ' + sourceFile.getDirectory().getPath();
  }
  return fileId;
}

