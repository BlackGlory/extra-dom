import { traverseAncestorNodes } from './traverse-ancestor-nodes'
import { find } from 'iterable-operator'

export function findInAncestorNodes(
  node: Node
, predicate: (node: Node) => unknown
): (Node & ParentNode) | null {
  return find(traverseAncestorNodes(node), node => predicate(node)) ?? null
}
