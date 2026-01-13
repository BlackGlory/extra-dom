import { toArray } from 'iterable-operator'
import { stringifyNodes } from './stringify-nodes.js'

export function stringifyFragment(fragment: DocumentFragment): string {
  return stringifyNodes(toArray(fragment.childNodes))
}
