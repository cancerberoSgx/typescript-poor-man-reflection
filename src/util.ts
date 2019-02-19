export function quote(s: string, q: string = "'"): string {
  return q + s.replace(new RegExp(q, 'g'), '\\' + q) + q
}

export type NotUndefined<T> = Exclude<T, undefined>
export function notUndefined<T>(n: T): n is NotUndefined<T> {
  return n !== undefined
}
