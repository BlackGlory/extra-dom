export function stringifyNode(...nodes: Node[]): string {
  const div = document.createElement('div')
  nodes.forEach(x => div.append(x))
  return div.innerHTML
}
