export function TypeText<T>(t?: string): string {
  return t!
}
export function NodeText<T>(t?: string): string {
  return t!
}
export function BodyText<T>(t?: string): string {
  return t!
}
export function ThisBlockText(t?: string) {
  return t!
}

export { PrintAst } from './extractors/ast'
export { NodeType } from './extractors/nodeType'
export { Ls } from './extractors/fs/ls'

export { replaceFileFunctionCall } from './replaceFileFunctionCall'
export { replaceProjectFunctionCall } from './replaceProjectFunctionCall'
export { main } from './main'
export * from './types'
