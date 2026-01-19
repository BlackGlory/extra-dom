import { find } from 'iterable-operator'
import { traversePrecedingSiblingNodes } from './traverse-preceding-sibling-nodes.js'

export function findInPrecedingSiblingNodes(
  node: Node
, predicate: (node: Node) => unknown
): Node | undefined {
  return find(traversePrecedingSiblingNodes(node), predicate)
}
