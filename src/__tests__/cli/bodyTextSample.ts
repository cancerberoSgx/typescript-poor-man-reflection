import { BodyText } from '../..'
import { removeWhites } from 'misc-utils-of-mine-generic';

function escape(a: string) {
  C.counter++
  const c = new C()
  return a.replace('"', '\\"') + c.m()
}
class C {
  static counter = 0
  m() {
    return Math.PI
  }
}
const c = new C()

console.log(removeWhites((BodyText<typeof escape>() || 'undefined')))
