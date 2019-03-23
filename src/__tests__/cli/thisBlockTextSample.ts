import { removeWhites } from 'misc-utils-of-mine-generic';
import { ThisBlockText } from '../..';

function escape(a: string, q: string) {
  C.counter++
  const c = new C()
  console.log(removeWhites(ThisBlockText() || 'undefined'))
  return a.replace('"', q) + c.m()
}
const ff = (a: Date) => {
  console.log(removeWhites(ThisBlockText() || 'undefined'))
  return a.getTime() + 1
}
class C {
  static counter = 0
  m() {
    console.log(removeWhites(ThisBlockText() || 'undefined'))
    return Math.PI
  }
}
new C().m()
escape('', '')
ff(new Date())
