import { isTextNode } from './is-text-node'

export function isntTextNode<T extends Node = Node>(val: T): val is Exclude<T, Text> {
  return !isTextNode(val)
}
