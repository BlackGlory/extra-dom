import { traverseDescendantNodes } from './traverse-descendant-nodes'
import * as IO from 'iterable-operator'

export function find(node: Node, predicate: (node: Node) => unknown): Node | null {
  if (predicate(node)) return node

  try {
    return IO.find(traverseDescendantNodes(node), node => predicate(node))
  } catch (e) {
    if (e instanceof IO.RuntimeError) return null
    throw e
  }
}
