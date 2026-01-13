import { toArray } from 'iterable-operator'
import { parseFragment } from './parse-fragment.js'

export function parseNodes(html: string): Node[] {
  return toArray(parseFragment(html).childNodes)
}
