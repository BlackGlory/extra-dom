import { assert } from '@blackglory/errors'

export function nextSibling(node: Node, distance: number = 1): Node | null {
  assert(Number.isInteger(distance), 'parameter distance must be an integer')
  assert(distance >= 1, 'parameter distance must be greater than or equal to 1')

  return _nextSibling(node, distance)
}

function _nextSibling(node: Node, distance: number): Node | null {
  const currentNode = node.nextSibling
  if (!currentNode) return null

  if (distance === 1) {
    return currentNode
  } else {
    return _nextSibling(currentNode, distance - 1)
  }
}
