import { traverseDescendantNodes } from './traverse-descendant-nodes'
import * as IO from 'iterable-operator'

export function findInDescendantNodes(
  node: Node
, predicate: (node: ChildNode) => unknown
): ChildNode | null {
  try {
    return IO.find(traverseDescendantNodes(node), node => predicate(node))
  } catch (e) {
    if (e instanceof IO.RuntimeError) return null
    throw e
  }
}
