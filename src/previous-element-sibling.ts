import { isElement } from './is-element'
import { assert } from '@blackglory/errors'

export function previousElementSibling(node: Node, distance: number = 1): Element | null {
  assert(Number.isInteger(distance), 'parameter distance must be an integer')
  assert(distance >= 1, 'parameter distance must be greater than or equal to 1')

  return _previousElementSibling(node, distance)
}

function _previousElementSibling(node: Node, distance: number = 1): Element | null {
  const currentNode = node.previousSibling
  if (!currentNode) return null

  if (isElement(currentNode)) {
    if (distance === 1) {
      return currentNode as Element
    } else {
      return _previousElementSibling(currentNode, distance - 1)
    }
  } else {
    return _previousElementSibling(currentNode, distance)
  }
}
