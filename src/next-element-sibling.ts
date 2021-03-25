import { isElement } from './is-element'

export function nextElementSibling(node: Node, distance: number = 1): Element | null {
  const currentNode = node.nextSibling
  if (!currentNode) return null

  if (isElement(currentNode)) {
    if (distance === 1) {
      return currentNode as Element
    } else {
      return nextElementSibling(currentNode, distance - 1)
    }
  } else {
    return nextElementSibling(currentNode, distance)
  }
}
