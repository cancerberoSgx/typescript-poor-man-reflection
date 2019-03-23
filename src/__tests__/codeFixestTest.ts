import Project from 'ts-simple-ast';
import { getAllSupportedCodeFixes } from '../extractors/source/codeFixes';

describe('CodeFixes', () => {
  it('should organize imports of current file if none given', () => {
    const project = new Project()
    project.createSourceFile('test.ts', `var a=1; const count = 0; export function f<T>(a: number){}; export 5`)

    const f = project.getSourceFile('test.ts')!
   const d = getAllSupportedCodeFixes(project.getLanguageService(), f, 0, f.getText().length-1, [6133, 6138])

   d.forEach(d=>d.changes.filter(c=>c.getFilePath()===f.getFilePath()).forEach(c=>project.getSourceFile('test.ts')!.applyTextChanges(c.getTextChanges())))

  //  f.applyTextChanges(flat(d.map(d=>flat(d.changes.map(c=>c.getTextChanges())))))
  //  console.log(project.getSourceFile('test.ts')!.getText());

  //  [6133, 6138, 6196]
    // console.log(d.length, d.map(d=>({
    //   fixName: d.fixName,
    //   d: d.diagnostic.message,
    //   // category: d.diagnostic.category,
    //   code: d.diagnostic.code,
    //   // f: d.changes.length && d.changes[0].fileName,
    //   // fixAll: d.fixAllDescription,
    // })));

    // d.forEach(d=>console.log())

    // writeFileSync('allTsDiagnostics.json', JSON.stringify(getTsDiagnostics().map(d=>`${d.code} ${d.message}`), null, 2))
    // console.log(d.map(d=>({description: d.getDescription(), getFixAllDescription: d.getFixAllDescription(), getFixName: d.getFixName()})));
// "7028 Unused label.",
// "95024 Delete all unused declarations",
// "95053 Remove unused label",
// "95054 Remove all unused labels",

  })
})