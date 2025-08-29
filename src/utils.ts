const nodeExists = 'Node' in globalThis

export enum DocumentPosition {
  DOCUMENT_POSITION_DISCONNECTED = nodeExists
  ? globalThis.Node.DOCUMENT_POSITION_DISCONNECTED
  : 1

, DOCUMENT_POSITION_PRECEDING = nodeExists
  ? globalThis.Node.DOCUMENT_POSITION_PRECEDING
  : 2

, DOCUMENT_POSITION_FOLLOWING = nodeExists
  ? globalThis.Node.DOCUMENT_POSITION_FOLLOWING
  : 4

, DOCUMENT_POSITION_CONTAINS = nodeExists
  ? globalThis.Node.DOCUMENT_POSITION_CONTAINS
  : 8

, DOCUMENT_POSITION_CONTAINED_BY = nodeExists
  ? globalThis.Node.DOCUMENT_POSITION_CONTAINED_BY
  : 16

, DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = nodeExists
  ? globalThis.Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
  : 32
}

export function clone(node: Node): Node {
  return node.cloneNode(true)
}

export function cloneNodes(nodes: Node[]): Node[] {
  return nodes.map(x => clone(x))
}

export function copyNodesToChildNodes(nodes: Node[], node: Node): void {
  nodes.forEach(x => node.appendChild(x))
}
