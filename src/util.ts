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
    return error
  }
}

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
