import { flatMap } from './flat-map.js'
import * as Iter from 'iterable-operator'
import { pipe } from '@blackglory/prelude'

export function unwrap(node: Node, predicate: (node: Node) => unknown): Node[] {
  return flatMap(node, node => {
    if (predicate(node)) {
      return pipe(
        node.childNodes
      , nodes => Iter.flatMap(nodes, node => unwrap(node, predicate))
      , Iter.toArray
      )
    } else {
      return [node]
    }
  })
}
