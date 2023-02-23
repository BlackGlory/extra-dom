import { isTextNode } from './is-text-node.js'

export function isntTextNode<T>(val: T): val is Exclude<T, Text> {
  return !isTextNode(val)
}
