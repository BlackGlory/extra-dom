import { traverseAncestorNodes } from './traverse-ancestor-nodes'
import * as IO from 'iterable-operator'

export function findInAncestorNodes(
  node: Node
, predicate: (node: Node) => unknown
): (Node & ParentNode) | null {
  try {
    return IO.find(traverseAncestorNodes(node), node => predicate(node))
  } catch (e) {
    if (e instanceof IO.RuntimeError) return null
    throw e
  }
}
