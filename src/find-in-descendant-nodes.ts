import { traverseDescendantNodes } from './traverse-descendant-nodes.js'
import { find } from 'iterable-operator'

export function findInDescendantNodes(
  node: Node
, predicate: (node: ChildNode) => unknown
): ChildNode | undefined {
  return find(traverseDescendantNodes(node), node => predicate(node))
}
