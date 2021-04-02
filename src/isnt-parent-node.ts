import { isParentNode } from './is-parent-node'

export function isntParentNode<T extends Node>(node: Node): node is Exclude<T, ParentNode> {
  return !isParentNode(node)
}
