import {TypeText, PrintAst} from 'typescript-poor-man-reflection'
type Type<T> = {a: string, b: T}[]
const n = TypeText<Type<Date>>()
const b = TypeText<{a:'a'}>()
const c = TypeText<{a:"a"}>()
console.log(`${n} ${b} ${c}`);

function user(s:string){

}

user(TypeText<number>())

// var s = ''
// const r = PrintAst<typeof user>(CallExpression)