
## TODO / ISSUES

 * default mode should be folderFile not prependVariable
 * folderFile is creating the data file in all folders not just in those containing calls to extractors!
 * readFiles path is relative to CWD not to current file dir. 
 * folderFile - the extractor call has the literal value instead of calling get(0,1) - verified with readFiles() but probably happens with all extractors
 * since the package must be imported from source files, is not clear if it should be installed as dependency or devDependency
 * remove Register() and Attribute() from main - they are definitely not ready
 * inherent issue of prependVariable: if you reference something from the variable(global) that is in an enclosing scope thenyou have type not found error:
```
const __extractor_prepend__ = ["", ""]
const fileVariables: {[name:string]: any} = {
    "0_a3_0": {value: (i: I)=>CC, name: "a3", index: 0, extractorName: "Attribute"}
}
function test(){
  interface I{  }
class CC{m(){return 'fooo'}}
}
```
the only solution for this would be moving the nodes and we dont want this.


 * prependVariable issue : because variable is on top,if referencing a type gives tyoe bit defined because is declared below. Solution: instead avariable make it a function?
 * check if its possible to target generics: `Attribute<I<number>>(value: 123)`
 * all names like _get, fileVariables, etc must be super configurable
 * performance timing tests - I'm adding features blindly and dont know the impact on performance.
 * FileDeclaration<Type>(orNode) to get the file path where a node was declared
 * diagnostics (different kind) of single file and whole project
 * emit .js with different configurations?
 * it always adds an argument and I can't prevent it in case I dont need it. if I pass undefined should not add anything
 * we should support also Types beside functions so we can operate on types. Example, Override() - I cannot put a function call in the middle of an interface declaration (method / property signature ).
 * test --register with node_modules packages
 * Register()
   * document limitations. 
   * put validations / defensive code in the extractor 
   * review require() and import   try{}catch{} in extractors.ts and error when spawned with ts-node
 * --clean only cleans --filePattern and --moduleIdentifier given. (tested) - maybe we want to review this and (configurable) make it clean everything?) 
 * Format(), Format({path})  - preferences ? from .editor , eslint, tslint, prettier ?
 * extractorDataMode configurable from call: const a = TypeText<SomeType>({mode: 'asStringLiteral'})
 * perhaps is possible to format jsdoc with jsa ? no tool do this.
 * sourceFile.fixMissingImports(); 
 * contribute removeUnused/inferTypes to ts-morph?
 * join all refactors (orgImports, removeUnused,inferTypes) setc that have similar signature in the same extractor?
 * files: delete, copy,move, rename ?
 * variableAccessor: 
  * provide more elegant API for getters - so instead of passing a function as string like "functionPredicate: `v=>v.extractorName==='Attribute'&&v.name===${quote(config.name)}`" they pass something like `{name: config.name, extractorName: 'Attribute'}` although values will still need to be stringified.
  * more: TODO:cannot we use currentCompileTimeVariables to get the value instead of printing a ugly  function string ?
  * For attributes bound to nodes&types, the setter call must occur BEFORE the GETTER call (while the source file is being processed.). TODO: can we solve this using afterExtract()?
 