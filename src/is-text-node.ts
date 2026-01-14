import { NodeType } from './node-type.js'
import { isObject } from '@blackglory/prelude'

export function isTextNode(val: unknown): val is Text {
  return (
           'Text' in globalThis &&
           val instanceof Text
         )
      || (
           isObject(val) &&
           val.nodeType === NodeType.TEXT_NODE
         )
}
