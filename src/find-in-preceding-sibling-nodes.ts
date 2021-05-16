export function findInPrecedingSiblingNodes(
  node: Node
, predicate: (node: Node) => unknown
): Node | undefined {
  const previousNode = node.previousSibling

  if (!previousNode) return undefined

  if (predicate(previousNode)) {
    return previousNode
  } else {
    return findInPrecedingSiblingNodes(previousNode, predicate)
  }
}
