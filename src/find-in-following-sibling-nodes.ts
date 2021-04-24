export function findInFollowingSiblingNodes(
  node: Node
, predicate: (node: Node) => unknown
): Node | null {
  const nextNode = node.nextSibling

  if (!nextNode) return null

  if (predicate(nextNode)) {
    return nextNode
  } else {
    return findInFollowingSiblingNodes(nextNode, predicate)
  }
}
