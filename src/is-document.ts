import { NodeType } from './node-type'
import { isObject } from '@blackglory/types'

export function isDocument(val: any): val is Document {
  if ('HTMLDocument' in globalThis && val instanceof HTMLDocument) return true

  return isObject(val)
      && val.nodeType === NodeType.DOCUMENT_NODE
}
