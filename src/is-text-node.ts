import { NodeType } from './node-type.js'
import { isObject } from '@blackglory/types'

export function isTextNode(val: any): val is Text {
  return (
           'Text' in globalThis &&
           val instanceof Text
         )
      || (
           isObject(val) &&
           val.nodeType === NodeType.TEXT_NODE
         )
}
