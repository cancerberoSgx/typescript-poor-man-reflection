# typescript-poor-man-reflection 

An unconventional way of getting TypeScript code information (like types), as text, at runtime

# Why ?

 * https://github.com/Microsoft/TypeScript/issues/14419
 * I need to get a type text at runtime and I cannot hardcode it as string since it will get outdated on code refactors
 * I don't want to use a tsc wrapper like ttypescript
 
# What ?

A preprocessor tool to modify input TypeScript files embedding requested types or nodes text in the code. Right now it supports three extraction kinds: 

 * `TypeText` will extract a Type's text. Example: `const text = TypeText<UnionOf<[1, Date[]]>>()` will be transformed to `const text = TypeText<UnionOf<[1, Date[]]>>('UnionOf<[1, Date[]]>')`
 * `NodeText` will extract a Node's text. Example. `var o = {foo: [1]}; const text = NodeText<typeof o>()` will be transformed to `var o = {foo: [1]}; const text = NodeText<typeof o>('{foo: [1]}')`
 * `BodyText` will extract a Node's body text. Example: `function f() { return 1 } const text = BodyText<typeof f>()` will be transformed to `function f() { return 1 } const text = BodyText<typeof f>('return 1')`

The tool **will modify** TypeScript source files calling the library's functions, embedding referenced node's text in the source file. It should be called before `tsc` or before npm test, and it can be called with the option `--clean` to clean-up source files (for example before commit or after `npm test`).

## Example

```
npm install -D typescript-poor-man-reflection
```

```ts
import { TypeText } from 'typescript-poor-man-reflection'
import { UnionOf } from '..'
const x = TypeText<UnionOf<[1, Date[]]>>()
const z = TypeText<UnionOf<[1, boolean | string]>>()
console.log(x, z)
```

Executing the program gives, as expected:

```sh
undefined undefined
```

But executing:

```sh
npx typescript-poor-man-reflection
```

and running the program again we get:

```sh
Type<Date> { a: 'a' } { a: "a" }
UnionOf<[1, Date[]]> UnionOf<[1, boolean | string]>
```

But at a terrible cost, go back to your source file and see how it changed:

```ts
import TypeText from 'typescript-poor-man-reflection'
import { UnionOf } from '..'
const x = TypeText<UnionOf<[1, Date[]]>>('UnionOf<[1, Date[]]>')
const z = TypeText<UnionOf<[1, boolean | string]>>('UnionOf<[1, boolean | string]>')
console.log(x, z)
```

## Options

 * --clean               will clean up arguments from project previously modified with this tool
 * --tsConfigFilePath    get project configuration from different file than default './tsconfig.json'
 * --out                 will write modified files in that folder instead of writing files in-place
 * --debug               will print debug information while executing


## Workflow

Basically use this only for test projects. Run `npx typescript-poor-man-reflection` before `npm test` or `tsc`, `ts-node`, `jest`, etc. 

### Rollback

To rollback the changes execute the following command. It will clean all the added arguments:

```
npx get-type-string --clean
```

# API

 * [Per-project JS API](api/interfaces/_types_.config.md)
 * [Per-file JS API](api/interfaces/_types_.replacefunctioncallsoptions.md)

(all the options apply to the CLI)


## Motivation

Trying to test types utilities, like:

```ts
import TypeText from 'typescript-poor-man-reflection'
import { UnionOf } from '..'
test('UnionOf transform a tuple into an union type', () => {
  expect(2).not.toMatchType(TypeText<UnionOf<[1, false]>>)
  expect(1).toMatchType(TypeText<UnionOf<[1, false]>>)
})
```

Trying to develop a preprocessing tool to mutate TypeScript and replace certain function call expressions with referenced type text so we have access to this info at runtime. tsd-check is not enough for me since I need to verify types at runtime to reproduce false positives, and isNot helpers. (I cannot reproduce an error at compile time in a test)

## TODO / ISSUES


## IDEAS
