import { config, exec } from 'shelljs'
import { Project } from 'ts-simple-ast'

describe('extractorsCore', () => {
  it('should save/load functions and classes', () => {
    const project = new Project()
    project.createSourceFile(
      'test.ts',
      `
console.log('hello')
function Var<T=any>(config: any, t?: T): T {
  console.log(config, t)
  return t!
}
class C(){
  m(a:number){return a+1}
}
Var({name: 'C', target: C})
const C2 = Var({name: 'C'})
console.log('bye')

    `
    )

    const cmd = `npx ts-node -e ${JSON.stringify(
      project
        .getSourceFile('test.ts')!
        .getText()
        .replace(/\n/g, ' ; ')
    )} `
    config.silent = false
    exec(cmd)
  })
})

// class VarClass extends AbstractExtractor {
//   protected freeArgumentNumber = 1
//   extract(...[c, i, g, options, v]: Parameters<ExtractorFn>) {
//     const config = this.getOptionsFromFistArg(c) || {}
//     // const target = this.getTarget(c, config)
//     // if(target) {
//     //   v()
//     // }
//     // else {

//     // }
//     return this.buildExtractorResult(c, '""', g, i, options, config)
//   }
//   protected parseOptionValue(name: string, value: Node | undefined): any {
//     if (value && ['name'].includes(name)) {
//       return unquote(value.getText())
//     } else {
//       return super.parseOptionValue(name, value)
//     }
//   }
// }
// replaceFileFunctionCall(project.getSourceFile('test.ts')!, {
//   ...defaultOptions,
//   ...{ extractorDataMode: 'asArgument' },
//   extracts: {
//     Var: new VarClass()
//   },
//   project
// })

//     expect(removeWhites(project.getSourceFile('test.ts')!.getText())).toContain(
//       removeWhites(
//         `
// function previous(){}
// Destroyer({target: next}, undefined)

// function f(){}

// var a = 1, c = 'foo'
// `
//       )
// )
