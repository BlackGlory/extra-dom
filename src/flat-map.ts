import { clone, cloneNodes, copyNodesToChildNodes, emptyChildNodes } from '@src/utils'

export function flatMap(node: Node, fn: (node: Node) => Node[]): Node[] {
  const newNodes = cloneNodes(fn(clone(node)))
  return newNodes.map(node => {
    const newChildNodes: Node[] = []
    for (const childNode of node.childNodes) {
      newChildNodes.push(...cloneNodes(flatMap(childNode, fn)))
    }
    emptyChildNodes(node)
    copyNodesToChildNodes(newChildNodes, node)
    return node
  })
}
