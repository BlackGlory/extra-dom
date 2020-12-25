export function clone(node: Node): Node {
  return node.cloneNode(true)
}

export function cloneNodes(nodes: Node[]): Node[] {
  return nodes.map(x => clone(x))
}

export function copyNodesToChildNodes(nodes: Node[], node: Node): void {
  nodes.forEach(x => node.appendChild(x))
}
