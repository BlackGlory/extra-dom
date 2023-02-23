import { isObject } from '@blackglory/types'

export function isNode(val: any): val is Node {
  return (
           'Node' in globalThis &&
           val instanceof Node
         )
      || (
           isObject(val) &&
           'nodeType' in val
         )
}
