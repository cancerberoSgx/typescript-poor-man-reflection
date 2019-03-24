
## TODO / ISSUES

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
 
### Done

 * Exec({program: string}) - to exec a program and return its return code, stdout, stderr. Example ( minify before embed): `const {stdout, code} = Exec('npx terser files/**/*.js -o tmp/js'); export files = code===0 ? ReadFiles({path: './tmp/js/**/*.js'}) : []`
 * flexible APIs - implementations can choose which param to use or/if type params for data / options
 * --clean only cleans --filePattern and --moduleIdentifier given. (tested)
 * test with all the extractors together DONE
 * extractor that perform type inference DONE
 * Overrides
 * PrintAst
 * organizeImports
 * removeUnused
 * extractInterface
 * ls, cat, readFiles 
 * --register extractor (CLI)
 * Register() : mark the new file and on --clean register to remove it and never process it
 * flag to disable --moduleSpecifier  --moduleSpecifier _IGNORE_
 * If()

