import { NodeConstants } from './node-constants'
import { isObject } from '@blackglory/types'

export function isDocument(val: any): val is Document {
  if ('HTMLDocument' in globalThis && val instanceof HTMLDocument) return true

  return isObject(val) && val.nodeType === NodeConstants.DOCUMENT_NODE
}
