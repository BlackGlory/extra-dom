export function findInPrecedingSiblingNodes(node: Node, predicate: (node: Node) => unknown): Node | null {
  const previousNode = node.previousSibling

  if (!previousNode) return null

  if (predicate(previousNode)) {
    return previousNode
  } else {
    return findInPrecedingSiblingNodes(previousNode, predicate)
  }
}
