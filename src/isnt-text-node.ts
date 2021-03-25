import { isTextNode } from './is-text-node'

export function isntTextNode<T extends Node = Node>(node: Node): node is T {
  return !isTextNode(node)
}
