import { NodeType } from './node-type.js'
import { isObject } from '@blackglory/types'

export function isElement(val: any): val is Element {
  if ('HTMLElement' in globalThis && val instanceof HTMLElement) {
    return true
  } else {
    return isObject(val)
        && val.nodeType === NodeType.ELEMENT_NODE
  }
}
