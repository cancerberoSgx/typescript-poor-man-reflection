
## TODO / ISSUES

 * FileDeclaration<Type>(orNode) to get the file path where a node was declared
 * it always adds an argument and I can't prevent it in case I dont need it. if I pass undefined should not add anything
 * flag to disable --moduleSpecifier

### Done

 * Exec({program: string}) - to exec a program and return its return code, stdout, stderr. Example ( minify before embed): `const {stdout, code} = Exec('npx terser files/**/*.js -o tmp/js'); export files = code===0 ? ReadFiles({path: './tmp/js/**/*.js'}) : []`
 * Tool configuration - api so I can ThisBlockText<>({withoutParens: true})
 * test if --clean only cleans --filePattern or all - -DONE it cleans only --filePattern
 * test with all the extractors together DONE
 * extractor that perform type inference DONE
 * Overrides
 * PrintAst
 * organizeImports
 * removeUnused
 * extractInterface
 * ls, cat, readFiles 
 * --register extractor (CLI)



## IDEAS

### Var() get/set global variables compile-run-time

set global variables at compile time `Var({name:'foo', value: aFunction})` but supporting any value, not just strings

get global variables values at runtime

IoC would base on this.


### If()

conditionals at compile time:

```ts
interface I {
  m(a:number):string
}
class Impl1 implements I{
  m(a:number){return a+'_development'}
}
class Impl2 implements I{
  m(a:number){return a+'_production'}
}
function If(...args: any[]):any{}
const Impl:I = If({condition: ()=>process.env.NODE_ENV==='development', then: ()=>Impl1, else: ()=>Impl2})
```

### References<Type>({}, orNode)

List all the references to given node in the project.


### dataMode configurable from call

And more general, by convention, let the first arg to be the configuration object

```ts
const a = TypeText<SomeType>({mode: 'asStringLiteral'})
```

### Idea: refactor tools programmatically API: example: 

WIP : we did organizeImports, RemoveUnused

```ts
import {Fruit} from './other'
Rename<Fruit>('Vegetable')
```

 ```ts
function f(){}
Move(f, '../util')
 ```


### IoC

```
const impl = GetImplementation<SomeInterface>({some: 'options'})
class Impl1 implements SomeInterface {...}

// and at some config.ts file and this happens at compile time:
RegisterImplementation<SomeInterface>(some, Impl1)
```




# Ideas Done


### Register extractors directly from code

WIP - working but very limited and buggy... I dont want to make things complicate for this non important feature... 
see src/__tests__/registerExtractorTest.ts and src/extractors/internal/register.ts

TODO: document limitations. 
TODO: put validations / defensive code in the extractor 

...would be awesome to do, from the same code:

```ts
import {AbstractExtractor, ExtractorFn, Register } from '..'

interface NewExtractorOptions { name?: string }

class NewExtractorClass extends AbstractExtractor {
  protected freeArgumentNumber = 1
  extract(...[c, i, g, options, v]: Parameters<ExtractorFn>) {
    const config = this.getOptionsFromFistArg(c) || {}
    return this.buildExtractorResult(c, '"hello"', g, i, options, config)
  }
}
Register({
  name: 'NewExtractor', 
  extractor: new NewExtractorClass(), 
  fn: function <T = any>(config: NewExtractorOptions, r?: T): T {
    return r!
  }
})
// and from here I can use it: 
const c = NewExtractor()
console.log(c)
```
I think we can use beforeExtract()




### --register new extractors from CLI

DONE : can register .ts files exporting extractors. 

TODO: test packages (npm install custom-extractor)

npx typescript-poor-man-reflection --register ./foo/newExtractor.ts


```ts
// ./foo/newExtractor.ts
class NewExtractorClass extends AbstractExtractor {
  extract(...[c, i, g, options, v]: Parameters<ExtractorFn>) {
    const config = this.getOptionsFromFistArg(c) || {}
    return this.buildExtractorResult(c, '"hello"', g, i, options, config)
  }
}
export function NewExtractor<T=any>(config: NewExtractorOptions, r?: T): T {
  return r!
}
export default {
  name: 'NewExtractor',
  extractor: new NewExtractorClass(),
  fn: NewExtractor
} as ExportedExtractor

// and then the code can import the Fn: 
import {NewExtractor} '../../bar/foo/newExtractor.ts'
const a = NewExtractor()
```

And then the code can import the Fn: 
```ts
import {NewExtractor} '../../bar/foo/newExtractor.ts'
const a = NewExtractor()
```

### @override

DONE

```ts
function Overrides<T extends true=true>(){}
class C implements I{
  m1(){
    Overrides()
  }
}
```
which will be transformed to `Overrides<false>()` in case there are no super classes or interfaces defining m1()



###  data serialization 

(DONE - see Ls, Cat, ReadFiles)

```ts
// assets.ts
type files = Tuple<Ls('-l', '../assets/**/*.json')> // type ['f1.json', ...]
export jsonfiles = Map<files>(fileName=>({fileName, content: readFileSync(f))}) // array with file contents {fileName, content}[]
```