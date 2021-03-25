export function nextSibling(node: Node, distance: number = 1): ChildNode | null {
  const currentNode = node.nextSibling
  if (!currentNode) return null

  if (distance === 1) {
    return currentNode
  } else {
    return nextSibling(currentNode, distance - 1)
  }
}
