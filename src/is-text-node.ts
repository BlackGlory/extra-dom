import { NodeType } from './node-type'
import { isObject } from '@blackglory/types'

export function isTextNode(val: any): val is Text {
  if ('Text' in globalThis && val instanceof Text) {
    return true
  } else {
    return isObject(val)
        && val.nodeType === NodeType.TEXT_NODE
  }
}
