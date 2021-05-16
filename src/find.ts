import { findInDescendantNodes } from './find-in-descendant-nodes'

export function find(node: Node, predicate: (node: Node) => unknown): Node | undefined {
  if (predicate(node)) return node

  return findInDescendantNodes(node, predicate)
}
