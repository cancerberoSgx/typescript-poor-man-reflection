// TODO: from mist
export function evaluate<T = any>(s: string, defaultValue = undefined): T | undefined {
  try {
    return eval(`(${s})`) as T
  } catch (error) {
    return defaultValue
  }
}
export type Map<V> = { [key: string]: V }
export function unquote(s: string) {
  return s.substring(1, s.length - 1)
}
