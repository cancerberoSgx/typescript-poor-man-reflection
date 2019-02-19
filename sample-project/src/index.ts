import {TypeText} from 'get-type-text'
import { spawn } from 'child_process';

type Type<T> = {a: string, b: T}[]
const n = TypeText<Type<Date>>()
const b = TypeText<{a:'a'}>()
const c = TypeText<{a:"a"}>()
const a = spawn
console.log(`${n} ${b} ${c}`);

function user(s:string){

}

user(TypeText<number>())

