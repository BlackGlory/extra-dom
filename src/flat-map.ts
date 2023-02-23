import { clone, cloneNodes, copyNodesToChildNodes } from '@src/utils.js'
import { removeAllChildren } from '@src/remove-all-children.js'

export function flatMap(node: Node, fn: (node: Node) => Node[]): Node[] {
  const newNodes = cloneNodes(fn(clone(node)))
  return newNodes.map(node => {
    const newChildNodes: Node[] = []
    for (const childNode of node.childNodes) {
      newChildNodes.push(...cloneNodes(flatMap(childNode, fn)))
    }
    removeAllChildren(node)
    copyNodesToChildNodes(newChildNodes, node)
    return node
  })
}
