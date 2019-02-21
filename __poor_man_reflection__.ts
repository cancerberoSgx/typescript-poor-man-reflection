// FILE CREATED AUTOMATICALLY AT COMPILE TIME. DO NOT MODIFY !

export const fileVariables: {[name:string]:string} = {
}

/** 
 * 'data[fileId][index]' is the value of the index-nth extractor call in the fieldId-nth source file where
 * fieldId is the index of the alphabetically ordered list of this directory source file children.
 */
export const data: any[][] = [[""]]

export function get(fileId: number, index: number) {
  return data[fileId] && data[fileId][index]
}