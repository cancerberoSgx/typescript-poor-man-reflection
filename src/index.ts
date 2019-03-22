import { ExtractorOptions } from './types'

export const TypeText = F
export const NodeText = F
export const BodyText = F
export const ThisBlockText = function<T=any>(t?: string) { return t! }
export const PrintAst = (config: ExtractorOptions, t?: any) => t!

function F<T>(t?: string): string {
  return t! // we want to return undefined if that's the case should explore in user face.
}

export { replaceFileFunctionCall } from './replaceFileFunctionCall'
export { replaceProjectFunctionCall } from './replaceProjectFunctionCall'
export { main } from './main'
export * from './types'
