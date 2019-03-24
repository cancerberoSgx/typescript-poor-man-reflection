

# IDEAS

## decorators

provide decorators to extractors that can be implemented with that?

target decorators with Extractors so they have more features, for example, they can implement static things that cannot now (i think @Ooerrides cannot with just decorators) but what if we apply a extractor?

## naming, vars, ioc, etc:

### Name() put/ get names to nodes

#### to types:
(so we can reference on IoC)

Name<FileSystemHost>({name: 'tsa.compiler.FileSystemHost'})
export interface FileSystemHost {

}
Name<FileSystemHost>() // put the type name

then in formal system:

GetImplementation<FileSystemHost>()

but if we dont know can't access the type, we can reference by name (if somebody previously used Name to name it):

GetImplementation({name: 'tsa.compiler.FileSystemHost'})

This gives advantage that different packages can provide the same interface cause is a name.

#### to nodes

be able to put names to a node so I can query when ast is forgotten or just reference it (documentation, etc). other (related) extractors can reference it for easy query, refactor, ...) 

Name({target: A, name: 'org.foo.A'})
Name({target: A, name: 'org.foo.A'})
class A {
  id: string|undefined
}

### Var() get/set global variables compile-run-time

get/set global variables at compile time `Var({name:'foo', value: aFunction})` that can be shared across the whole project.

IoC would base on this.

### qualified name factory 

https://stackoverflow.com/questions/28173555/full-object-name


### IoC

```
const impl = GetImplementation<SomeInterface>({some: 'options'})
class Impl1 implements SomeInterface {...}

// and at some config.ts file and this happens at compile time:
RegisterImplementation<SomeInterface>(some, Impl1)
```






## crazy ideas

### share objects between different projects . 

see superVar.ts

 * is it possible if two projects use this tool they can share objects (nodes?) referencing by name?



## low priority

### References<Type>({}, orNode)

List all the references to given node in the project.




### Refactor tools programmatically API: example: 

WIP : we did organizeImports, RemoveUnused, extractInterface, InferTypes

```ts
import {Fruit} from './other'
Rename<Fruit>('Vegetable')
```

 ```ts
function f(){}
Move(f, '../util')
 ```





# Ideas Done

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


### Register extractors directly from code

WIP - working but very limited and buggy... I dont want to make things complicate for this non important feature... 
see src/__tests__/registerExtractorTest.ts and src/extractors/internal/register.ts

TODO: document limitations. 
TODO: put validations / defensive code in the extractor 
TODO: test 
TODO: require() and import - review that  - try{}catch{} in extractors.ts

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




### --register new extractors from CLI

DONE : can register .ts files exporting extractors. 



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