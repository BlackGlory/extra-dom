import { isNode } from './is-node'

export function isParentNode(val: any): val is Node & ParentNode {
  return isNode(val) && 'children' in val
}
