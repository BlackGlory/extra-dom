import { assert } from '@blackglory/prelude'

export function parentNode(
  node: Node
, distance: number = 1
): (Node & ParentNode) | undefined {
  assert(Number.isInteger(distance), 'parameter distance must be an integer')
  assert(distance >= 1, 'parameter distance must be greater than or equal to 1')

  return _parentNode(node, distance)
}

function _parentNode(node: Node, distance: number): (Node & ParentNode) | undefined {
  const currentNode = node.parentNode
  if (!currentNode) return undefined

  if (distance === 1) {
    return currentNode
  } else {
    return _parentNode(currentNode, distance - 1)
  }
}
