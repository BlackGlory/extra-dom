import { NodeConstants } from './node-constants'
import { isObject } from '@blackglory/types'

export function isElement(val: any): val is Element {
  if ('HTMLElement' in globalThis && val instanceof HTMLElement) return true

  return isObject(val) && val.nodeType === NodeConstants.ELEMENT_NODE
}
