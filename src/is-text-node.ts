import { NodeType } from './node-type'
import { isRecord } from '@blackglory/types'

export function isTextNode(val: any): val is Text {
  if ('Text' in globalThis && val instanceof Text) return true

  return isRecord(val) && val.nodeType === NodeType.TEXT_NODE
}
