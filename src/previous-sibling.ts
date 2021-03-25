export function previousSibling(node: Node, distance: number = 1): ChildNode | null {
  const currentNode = node.previousSibling
  if (!currentNode) return null

  if (distance === 1) {
    return currentNode
  } else {
    return previousSibling(currentNode, distance - 1)
  }
}
