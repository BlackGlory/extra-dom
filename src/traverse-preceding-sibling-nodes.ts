export function* traversePrecedingSiblingNodes(node: Node): Iterable<Node> {
  const previousSiblingNode = node.previousSibling
  if (previousSiblingNode) {
    yield previousSiblingNode
    yield* traversePrecedingSiblingNodes(previousSiblingNode)
  }
}
