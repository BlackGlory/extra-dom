export function* traverseFollowingSiblingNodes(node: Node): Iterable<Node> {
  const nextSiblingNode = node.nextSibling
  if (nextSiblingNode) {
    yield nextSiblingNode
    yield* traverseFollowingSiblingNodes(nextSiblingNode)
  }
}
