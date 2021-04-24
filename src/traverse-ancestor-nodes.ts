export function* traverseAncestorNodes(node: Node): Iterable<Node & ParentNode> {
  const parentNode = node.parentNode
  if (parentNode) {
    yield parentNode
    yield* traverseAncestorNodes(parentNode)
  }
}
