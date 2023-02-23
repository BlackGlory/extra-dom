import { NodeType } from './node-type.js'
import { isObject } from '@blackglory/types'

export function isDocument(val: any): val is Document {
  return (
           'HTMLDocument' in globalThis &&
           val instanceof HTMLDocument
         )
      || (
           isObject(val) &&
           val.nodeType === NodeType.DOCUMENT_NODE
         )
}
