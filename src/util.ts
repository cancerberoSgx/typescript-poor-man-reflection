// TODO: from mist
export function evaluate<T = any>(s: string, defaultValue = undefined): T | undefined {
  try {
    return eval(`(${s})`) as T
  } catch (error) {
    return defaultValue
  }
}

// export function quote(s: string, q: string = "'"): string {
//   return q + s.replace(new RegExp(q, 'g'), '\\' + q) + q
// }

// export type NotUndefined<T> = Exclude<T, undefined>
// export function notUndefined<T>(n: T): n is NotUndefined<T> {
//   return n !== undefined
// }

// export function asArray<T>(selectors: T | T[]): T[] {
//   return Array.isArray(selectors) ? selectors : [selectors];
// }
// export function tryTo<F extends (...args: any[]) => any>(f: F): ReturnType<F> | undefined {
//   try {
//     return f()
//   } catch (error) {
//   }
// }
// export function parseJSON<K=any>(s: string, defaultValue?: K): K|undefined {
//   try {
//     return JSON.parse(s)
//   } catch (error) {
//     return defaultValue
//   }
// }
