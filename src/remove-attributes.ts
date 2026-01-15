import { isElement } from './is-element.js'

export function removeAttributes(
  node: Node
, predicate: (attributeName: string) => unknown = () => true
): void {
  if (isElement(node)) {
    for (const attributeName of node.getAttributeNames()) {
      if (predicate(attributeName)) {
        node.removeAttribute(attributeName)
      }
    }
  }
}
