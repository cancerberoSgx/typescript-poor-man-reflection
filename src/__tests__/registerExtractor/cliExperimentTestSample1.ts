import { NewExtractor } from './exportedExtractor1'
import { TypeText } from '../..'
const f = NewExtractor({ name: 'seba' },                 )
console.log(f)

const type = TypeText<typeof f>()
console.log(type)

// import { ExtractOptions } from '../../types';

// const _Var: { [a: string]: any } = {}
// function Var(config: any, t?: any) {
//   console.log(config, t)
//   if (config.target) {
//     _Var[config.name] = config.target
//   } else return _Var[config.name]
//   // return t!
// }
// // function If(config: {})

// // import {ExtractorOptions} from '/home/sg/git/typescript-poor-man-reflection/src/types'

// console.log('hello')
// interface I {
//   m(a: number): string
// }
// class Impl1 implements I {
//   m(a: number) {
//     return a + '_development'
//   }
// }
// class Impl2 implements I {
//   m(a: number) {
//     return a + '_production'
//   }
// }
// function If(...args: any[]): any {}
// const Impl: I = If({ condition: () => process.env.NODE_ENV === 'development', then: () => Impl1, else: () => Impl2 })

// Var({ name: 'I', target: Impl1 })
// const C2 = Var({ name: 'I' })
// console.log('bye', Var({ name: 'I' }))
