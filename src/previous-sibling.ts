import { assert } from '@blackglory/errors'

export function previousSibling(node: Node, distance: number = 1): ChildNode | undefined {
  assert(Number.isInteger(distance), 'parameter distance must be an integer')
  assert(distance >= 1, 'parameter distance must be greater than or equal to 1')

  return _previousSibling(node, distance)
}

function _previousSibling(node: Node, distance: number = 1): ChildNode | undefined {
  const currentNode = node.previousSibling
  if (!currentNode) return undefined

  if (distance === 1) {
    return currentNode
  } else {
    return _previousSibling(currentNode, distance - 1)
  }
}
