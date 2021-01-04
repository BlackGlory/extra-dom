import { flatMap } from './flat-map'
import { map, flatten, toArray } from 'iterable-operator'

export function unwrap(node: Node, predicate: (node: Node) => boolean): Node[] {
  return flatMap(node, node => {
    if (predicate(node)) {
      // return Array.from(node.childNodes).flatMap(node => unwrap(node, predicate)
      return toArray(flatten(map(node.childNodes, node => unwrap(node, predicate))))
    } else {
      return [node]
    }
  })
}
