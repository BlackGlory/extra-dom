import { NodeConstants } from './node-constants'

export function isTextNode(node: Node): node is Text {
  return node.nodeType === NodeConstants.TEXT_NODE
}
