import { NodeConstants } from './node-constants'

export function isTextNode(node: Node): boolean {
  return node.nodeType === NodeConstants.TEXT_NODE
}
