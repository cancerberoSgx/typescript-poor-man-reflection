import { AbstractExtractorOptions } from './extractors/abstractExtractor'

export const TypeText = F
export const NodeText = F
export const BodyText = F
export const ThisBlockText = F
export const PrintAst = (config: AbstractExtractorOptions, t?: any) => t!

function F<T>(t?: string): string {
  return t! // we want to return undefined if that's the case should explore in user face.
}

export { replaceFileFunctionCall } from './replaceFileFunctionCall'
export { replaceProjectFunctionCall } from './replaceProjectFunctionCall'
export { main } from './main'
export * from './types'
