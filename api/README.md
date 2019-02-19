
get-type-text
=============

An unconventional way of getting a type text at runtime in TypeScript

Why ?
=====

*   [https://github.com/Microsoft/TypeScript/issues/14419](https://github.com/Microsoft/TypeScript/issues/14419)
*   I need to get a type text at runtime and I cannot hardcode it as string since it will get outdated on code refactors
*   I don't want to use a tsc wrapper like ttypescript

What ?
======

```
npm install -D get-type-text
```

```ts
import TypeText from 'get-type-text'
import { UnionOf } from '..'
const x = TypeText<UnionOf<[1, Date[]]>>()
const z = TypeText<UnionOf<[1, boolean \| string]>>()
console.log(x, z)
```

Executing the program gives, as expected:

```sh
undefined undefined
```

But executing:

```sh
npx get-type-text
```

and running the program again we get:

```sh
Type<Date> { a: 'a' } { a: "a" }
UnionOf<[1, Date[]]> UnionOf<[1, boolean \| string]>
```

But at a terrible cost, go back to your source file and see how it changed:

```ts
import TypeText from 'get-type-text'
import { UnionOf } from '..'
const x = TypeText<UnionOf<[1, Date[]]>>('UnionOf<[1, Date[]]>')
const z = TypeText<UnionOf<[1, boolean \| string]>>('UnionOf<[1, boolean \| string]>')
console.log(x, z)
```

Options
-------

Workflow
--------

Basically use this only for test projects. Run `npx get-type-text` before `npm test` or `tsc`, `ts-node`, `jest`, etc.

### Rollback

To rollback the changes execute the following command. It will clean all the added arguments:

```
npx get-type-string --cleanArguments
```

API
===

*   [Per-project JS API](api/interfaces/_types_.config.md)
*   [Per-file JS API](api/interfaces/_types_.replacefunctioncallsoptions.md)

(all the options apply to the CLI)

Motivation
----------

Trying to test types utilities, like:

```ts
import TypeText from 'get-type-text'
import { UnionOf } from '..'
test('UnionOf transform a tuple into an union type', () => {
  expect(2).not.toMatchType(TypeText<UnionOf<[1, false]>>)
  expect(1).toMatchType(TypeText<UnionOf<[1, false]>>)
})
```

Trying to develop a preprocessing tool to mutate TypeScript and replace certain function call expressions with referenced type text so we have access to this info at runtime. tsd-check is not enough for me since I need to verify types at runtime to reproduce false positives, and isNot helpers. (I cannot reproduce an error at compile time in a test)

TODO / ISSUES
-------------

*   \--cleanArguments - when comma it breaks - TypeText<ArrayIndexUnion('T',) - must remove the comma too.

## Index

### External modules

* ["main"](modules/_main_.md)
* ["replaceFunctionCall"](modules/_replacefunctioncall_.md)
* ["types"](modules/_types_.md)

---

