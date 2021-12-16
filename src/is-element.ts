import { NodeType } from './node-type'
import { isObject } from '@blackglory/types'

export function isElement(val: any): val is Element {
  if ('HTMLElement' in globalThis && val instanceof HTMLElement) return true

  return isObject(val)
      && (val as any).nodeType === NodeType.ELEMENT_NODE
}
