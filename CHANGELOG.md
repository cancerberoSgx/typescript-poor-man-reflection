
#0.0.5

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
 * NOT RELEASED Register() : mark the new file and on --clean register to remove it and never process it
 * flag to disable --moduleSpecifier  --moduleSpecifier _IGNORE_
 * If()
 * ts-simple-ast updated with ts-morph
 * extractInterface and other refactor code will be maintained at ts-simple-ast-extra project
 * adds support for variableAccessor in prependVariable mode
 * variableAccessor more flexible (and harder) API
 * NOT RELEASED Attribute() - first implementation using variableAccessor - WIP - still missing node binding

# 0.0.6

 * Register enabled

# 0.0.7

 * updates dependencies

