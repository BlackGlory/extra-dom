export function removeAttributes(node: Node, predicate: (name: string) => boolean): void {
  if (node instanceof Element) {
    const attributeNames = Array.from(node.attributes).map(x => x.name)
    for (const name of attributeNames) {
      if (predicate(name)) {
        node.removeAttribute(name)
      }
    }
  }
}
