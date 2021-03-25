import { isElement } from './is-element'

export function previousElementSibling(node: Node, distance: number = 1): Element | null {
  const currentNode = node.previousSibling
  if (!currentNode) return null

  if (isElement(currentNode)) {
    if (distance === 1) {
      return currentNode as Element
    } else {
      return previousElementSibling(currentNode, distance - 1)
    }
  } else {
    return previousElementSibling(currentNode, distance)
  }
}
