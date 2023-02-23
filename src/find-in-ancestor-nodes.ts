import { traverseAncestorNodes } from './traverse-ancestor-nodes.js'
import { find } from 'iterable-operator'

export function findInAncestorNodes(
  node: Node
, predicate: (node: Node) => unknown
): (Node & ParentNode) | undefined {
  return find(traverseAncestorNodes(node), node => predicate(node))
}
