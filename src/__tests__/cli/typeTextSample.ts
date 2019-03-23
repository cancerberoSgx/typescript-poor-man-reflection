import { TypeText } from '../..'
type UnionOf<T extends any[]> = T[number]
const x = TypeText<UnionOf<[1, Date[]]>>()
const z = TypeText<UnionOf<[1, boolean | string]>>()
console.log(x, z, TypeText<Required<{ a: null | false }>>())
