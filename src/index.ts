export const TypeText = F
export const NodeText = F
export const BodyText = F
export const ThisBlockText = F

function F<T>(t?: string): string {
  return t! // we want to return undefined if that's the case should explore in user face.
}

export {replaceFileFunctionCall} from './replaceFileFunctionCall'
export {replaceProjectFunctionCall} from './replaceProjectFunctionCall'
export {main} from './main'
