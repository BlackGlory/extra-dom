export function* traverseDescendantNodes(node: Node): Iterable<ChildNode> {
  for (const childNode of node.childNodes) {
    yield childNode
    yield* traverseDescendantNodes(childNode)
  }
}
