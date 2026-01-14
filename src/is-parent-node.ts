import { isNode } from './is-node.js'

export function isParentNode(val: unknown): val is Node & ParentNode {
  return isNode(val)
      && 'children' in val
}
