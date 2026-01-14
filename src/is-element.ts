import { NodeType } from './node-type.js'
import { isObject } from '@blackglory/prelude'

export function isElement(val: unknown): val is Element {
  return (
           'HTMLElement' in globalThis &&
           val instanceof HTMLElement
         )
      || (
           isObject(val) &&
           val.nodeType === NodeType.ELEMENT_NODE
         )
}
