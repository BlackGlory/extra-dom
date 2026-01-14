import { isObject } from '@blackglory/prelude'

export function isNode(val: unknown): val is Node {
  return (
           'Node' in globalThis &&
           val instanceof Node
         )
      || (
           isObject(val) &&
           'nodeType' in val
         )
}
