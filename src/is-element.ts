import { NodeType } from './node-type'
import { isRecord } from '@blackglory/types'

export function isElement(val: any): val is Element {
  if ('HTMLElement' in globalThis && val instanceof HTMLElement) return true

  return isRecord(val) && val.nodeType === NodeType.ELEMENT_NODE
}
