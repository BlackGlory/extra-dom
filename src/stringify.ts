export function stringify(nodes: Node[]): string {
  const div = document.createElement('div')
  nodes.forEach(x => div.append(x.cloneNode(true)))
  return div.innerHTML
}
