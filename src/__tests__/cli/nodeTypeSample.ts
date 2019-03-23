import { NodeType } from '../../extractors/source/nodeType';

interface I {
  m(): void
}
var d: I | null
class C implements I {
  m() {
    console.log(NodeType({ target: this },  ))
    console.log(NodeType({ target: this, inferenceMode: 'none' },  ))
    console.log(NodeType({ target: d },  ))
    var self = this
    return function f() {
      console.log(NodeType({ target: self },  ))
      const t = Math.random() > 0.5 ? false : 'foo'
      console.log(NodeType({ target: t },  ))
      console.log(NodeType<typeof t>({},  ))
    }
  }
}
export const eee = new C().m()()
