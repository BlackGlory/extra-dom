export function stringifyNode(node: Node): string {
  const div = document.createElement('div')
  div.append(node)
  return div.innerHTML
}
