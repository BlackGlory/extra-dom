import { isParentNode } from './is-parent-node'

export function isntParentNode<T>(val: any): val is Exclude<T, Node & ParentNode> {
  return !isParentNode(val)
}
