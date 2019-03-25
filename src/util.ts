import { Node } from 'ts-morph'

// TODO: from misc

export function evaluate<T = any>(s: string, defaultValue = undefined): T | undefined {
  try {
    return eval(`(${s})`) as T
  } catch (error) {
    return defaultValue
  }
}
export function evaluateAndError<T = any>(s: string): T | undefined {
  try {
    return eval(`(${s})`) as T
  } catch (error) {
    // console.error(`Eval error ${error} ${(error.stack||'').split('\n').join('\n')}`);

    // const c = callsites() as any[]
    // console.log();

    return error
  }
}

// const callsites = require('callsites')
// /** @internal */
// export function getCallerFile(): { callerFile: string | undefined; allCallerFiles: string[] } {
//   const c = callsites() as any[]
//   let f: string | undefined
//   const jestMatcher = c
//     .filter(c => c.getFileName())
//     .findIndex(
//       c => c.getFileName().endsWith('dist/src/jestMatcher.js') || c.getFileName().endsWith('src/jestMatcher.ts')
//     )
//   if (jestMatcher !== -1) {
//     // this is for the case of using jest matcher from an external project:
//     f = c[jestMatcher + 2].getFileName()
//   } else {
//     // this works for the rest of the environments
//     f = c[3] && c[3].getFileName()
//   }
//   // console.log('choose: ', f, 'all\n', c.map((c: any) => c.getFileName()))
//   return { callerFile: f, allCallerFiles: c.map((c: any) => c.getFileName()).map(c => c) }
// }

export type Map<V> = { [key: string]: V }
export function unquote(s: string) {
  return s.substring(1, s.length - 1)
}

export function asString(s: string) {
  return `\`${s.replace(/`/g, '\\`')}\``
}
export function withoutExtension(f: string) {
  return f.substring(0, f.lastIndexOf('.'))
}
export type Fn = (...args: any[]) => any

// to ts-simple-ast-extra
export function isNode(n: any): n is Node {
  return n && typeof n.getText === 'function' && typeof n.getKindName === 'function'
}
