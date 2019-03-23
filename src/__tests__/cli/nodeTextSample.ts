import { NodeText } from '../..';

function f() {
  type T = any
}

class C {
  i = 1
  m() {
    return this.i + 1
  }
}

console.log(
  (NodeText<typeof f>() || 'undefined').replace(/\n/g, ' '),
  (NodeText<C>() || 'undefined').replace(/\n/g, ' ')
)
