import { NodeType } from './node-type.js'
import { isObject } from '@blackglory/types'

export function isElement(val: any): val is Element {
  return (
           'HTMLElement' in globalThis &&
           val instanceof HTMLElement
         )
      || (
           isObject(val) &&
           val.nodeType === NodeType.ELEMENT_NODE
         )
}
