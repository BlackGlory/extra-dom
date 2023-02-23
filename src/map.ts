import { clone } from '@src/utils.js'

export function map(node: Node, fn: (node: Node) => Node): Node {
  const newNode = clone(fn(clone(node)))
  for (const node of newNode.childNodes) {
    newNode.replaceChild(map(node, fn), node)
  }
  return newNode
}
