import { toArray } from 'iterable-operator'
import { parseFragment } from './parse-fragment.js'

export function parseNodes(htmlFragment: string): Node[] {
  const fragment = parseFragment(htmlFragment)
  const nodes = toArray(fragment.childNodes)
  return nodes
}
