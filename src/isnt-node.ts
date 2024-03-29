import { isNode } from './is-node.js'

export function isntNode<T>(val: T): val is Exclude<T, Node> {
  return !isNode(val)
}
