import { NewExtractor } from './exportedExtractor1'
import { TypeText } from '../..'
const f = NewExtractor({ name: 'seba' },   )
console.log(f)

const type = TypeText<typeof f>()
console.log(type)
