import { TypeText } from 'typescript-poor-man-reflection'
import { get } from "./__poor_man_reflection__";

type UnionOf<T extends any[]> = T[number]
const x = TypeText<UnionOf<[1, Date[]]>>(get(1, 0))
const z = TypeText<UnionOf<[1, boolean | string]>>(get(1, 1))
console.log(x, z, TypeText<Required<{a:null|false}>>(get(1, 2)))