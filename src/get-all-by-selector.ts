import { isDocument } from './is-document'
import { isElement } from './is-element'

export function getAllBySelector<T extends Element>(this: void | Element | Document, selectors: string): T[] {
  const root = (
    isElement(this) || isDocument(this)
  ? this
  : document
  )
  const results = root.querySelectorAll(selectors)
  if (results.length) {
    return Array.from(results) as T[]
  } else {
    throw new Error(`Could not find any elements matching ${selectors}`)
  }
}
