import { isElement } from './is-element'
import { assert } from '@blackglory/errors'

export function previousElementSibling(
  node: Node
, distance: number = 1
): Element | undefined {
  assert(Number.isInteger(distance), 'parameter distance must be an integer')
  assert(distance >= 1, 'parameter distance must be greater than or equal to 1')

  return previousElementSibling(node, distance)

  function previousElementSibling(node: Node, distance: number = 1): Element | undefined {
    const currentNode = node.previousSibling
    if (!currentNode) return undefined

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
}
