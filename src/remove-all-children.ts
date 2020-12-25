// https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes#Remove_all_children_from_a_node
export function removeAllChildren(node: Node): void {
  while (node.firstChild) {
    node.removeChild(node.firstChild)
  }
}
