import { find } from 'iterable-operator'
import { traverseFollowingSiblingNodes } from './traverse-following-sibling-nodes.js'

export function findInFollowingSiblingNodes(
  node: Node
, predicate: (node: Node) => unknown
): Node | undefined {
  return find(traverseFollowingSiblingNodes(node), predicate)
}
