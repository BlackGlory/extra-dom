export function isParentNode<T extends Node = Node>(node: Node): node is T & ParentNode {
  return 'children' in node
}
