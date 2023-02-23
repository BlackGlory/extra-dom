import { isParentNode } from './is-parent-node.js'

export function isntParentNode<T>(val: any): val is Exclude<T, Node & ParentNode> {
  return !isParentNode(val)
}
