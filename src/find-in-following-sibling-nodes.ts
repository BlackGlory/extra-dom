export function findInFollowingSiblingNodes(
  node: Node
, predicate: (node: Node) => unknown
): Node | undefined {
  const nextNode = node.nextSibling

  if (!nextNode) return undefined

  if (predicate(nextNode)) {
    return nextNode
  } else {
    return findInFollowingSiblingNodes(nextNode, predicate)
  }
}
