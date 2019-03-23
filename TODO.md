
## TODO / ISSUES

 * FileDeclaration<Type>(orNode) to get the file path where a node was declared
 * Exec({program: string}) - to exec a program and return its return code, stdout, stderr. Example ( minify before embed): `const {stdout, code} = Exec('npx terser files/**/*.js -o tmp/js'); export files = code===0 ? ReadFiles({path: './tmp/js/**/*.js'}) : []`


### Done

 * Tool configuration - api so I can ThisBlockText<>({withoutParens: true})
 * test if --clean only cleans --filePattern or all - -DONE it cleans only --filePattern
 * test with all the extractors together DONE
 * extractor that perform type inference DONE

## IDEAS



### References<Type>({}, orNode)

List all the references to given node in the project.


### dataMode configurable from call
And more general, by convention, let the first arg to be the configuration object
```
const a = TypeText<SomeType>({mode: 'asStringLiteral'})
```

### Idea: refactor tools programmatically API: example: 

```
 import {Fruit} from './other'
 Rename<Fruit>('Vegetable')
 ```

 ```
function f(){}
Move(f, '../util')
 ```

###  data serialization 

(DONE - see Ls, Cat, ReadFiles)

```// assets.ts
type files = Tuple<Ls('-l', '../assets/**/*.json')> // type ['f1.json', ...]
export jsonfiles = Map<files>(fileName=>({fileName, content: readFileSync(f))}) // array with file contents {fileName, content}[]
```

### IoC

```
const impl = GetImplementation<SomeInterface>({some: 'options'})

class Impl1 implements SomeInterface {...}
RegisterImplementation<SomeInterface>(some, Impl1)
...

