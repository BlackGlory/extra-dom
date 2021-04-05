import { NodeConstants } from './node-constants'
import { isObject } from '@blackglory/types'

export function isTextNode(val: any): val is Text {
  if ('Text' in globalThis && val instanceof Text) return true

  return isObject(val) && val.nodeType === NodeConstants.TEXT_NODE
}
