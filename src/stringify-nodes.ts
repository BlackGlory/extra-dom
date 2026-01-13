import { isElement } from './is-element.js'
import { isTextNode } from './is-text-node.js'

export function stringifyNodes(nodes: Node[]): string {
  return nodes
    .map(node => {
      if (isElement(node)) return node.outerHTML
      if (isTextNode(node)) return node.textContent
      return ''
    })
    .join('')
}
