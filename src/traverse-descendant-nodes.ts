export function* traverseDescendantNodes(node: Node): Iterable<Node> {
  for (const childNode of node.childNodes) {
    yield childNode
    yield* traverseDescendantNodes(childNode)
  }
}
