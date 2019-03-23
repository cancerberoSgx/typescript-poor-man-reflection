import { removeWhites } from 'misc-utils-of-mine-generic'
import { BodyText } from '../..'

function escape(a: string, q: string) {
  C.counter++
  const c = new C()
  return a.replace('"', q) + c.m()
}
class C {
  static counter = 0
  m() {
    return Math.PI
  }
}
console.log(removeWhites(BodyText<typeof escape>() || 'undefined'))
