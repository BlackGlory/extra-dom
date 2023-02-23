import { isElement } from './is-element.js'
import { assert } from '@blackglory/errors'

export function nextElementSibling(node: Node, distance: number = 1): Element | undefined {
  assert(Number.isInteger(distance), 'parameter distance must be an integer')
  assert(distance >= 1, 'parameter distance must be greater than or equal to 1')

  return _nextElementSibling(node, distance)
}

function _nextElementSibling(node: Node, distance: number): Element | undefined {
  const currentNode = node.nextSibling
  if (!currentNode) return undefined

  if (isElement(currentNode)) {
    if (distance === 1) {
      return currentNode as Element
    } else {
      return _nextElementSibling(currentNode, distance - 1)
    }
  } else {
    return _nextElementSibling(currentNode, distance)
  }
}
