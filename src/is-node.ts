import { isObject } from '@blackglory/types'

export function isNode(val: any): val is Node {
  if ('Node' in globalThis && val instanceof Node) return true

  return isObject(val) && 'nodeType' in val
}
