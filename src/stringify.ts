import { isElement } from './is-element'
import { isTextNode } from './is-text-node'

export function stringify(nodes: Node[]): string {
  return nodes
    .map(node => {
      if (isElement(node)) return node.outerHTML
      if (isTextNode(node)) return node.textContent
      return ''
    })
    .join('')
}
