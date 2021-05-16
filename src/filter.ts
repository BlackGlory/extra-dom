import { flatMap } from './flat-map'

export function filter(node: Node, predicate: (node: Node) => unknown): Node | undefined {
  const results = flatMap(node, node => {
    if (predicate(node)) {
      return [node]
    } else {
      return []
    }
  })

  if (results.length === 1) return results[0]
  return undefined
}
