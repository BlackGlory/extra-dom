import { flatMap } from './flat-map'

export function filter(node: Node, predicate: (node: Node) => boolean): Node | null {
  const results = flatMap(node, node => {
    if (predicate(node)) {
      return [node]
    } else {
      return []
    }
  })

  if (results.length === 1) return results[0]
  return null
}
