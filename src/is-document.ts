import { NodeType } from './node-type'
import { isRecord } from '@blackglory/types'

export function isDocument(val: any): val is Document {
  if ('HTMLDocument' in globalThis && val instanceof HTMLDocument) return true

  return isRecord(val) && val.nodeType === NodeType.DOCUMENT_NODE
}
