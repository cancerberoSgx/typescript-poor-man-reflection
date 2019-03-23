
## TODO / ISSUES

 * FileDeclaration<Type>(orNode) to get the file path where a node was declared
 * it always adds an argument and I can't prevent it in case I dont need it.

### Done

 * Exec({program: string}) - to exec a program and return its return code, stdout, stderr. Example ( minify before embed): `const {stdout, code} = Exec('npx terser files/**/*.js -o tmp/js'); export files = code===0 ? ReadFiles({path: './tmp/js/**/*.js'}) : []`
 * Tool configuration - api so I can ThisBlockText<>({withoutParens: true})
 * test if --clean only cleans --filePattern or all - -DONE it cleans only --filePattern
 * test with all the extractors together DONE
 * extractor that perform type inference DONE
 * Overrides

## IDEAS

### @override

DONE

```
function Overrides<T extends true=true>(){}
class C implements I{
  m1(){
    Overrides()
  }
}
```
which will be transformed to `Overrides<false>()` in case there are no super classes or interfaces defining m1()

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

// and at some config.ts file and this happens at compile time:
RegisterImplementation<SomeInterface>(some, Impl1)
...

