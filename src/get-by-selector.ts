import { isDocument } from './is-document'
import { isElement } from './is-element'

export function getBySelector<T extends Element>(
  this: void | Element | Document, selectors: string
): T {
  const root = (
    isElement(this) || isDocument(this)
  ? this
  : document
  )
  const result = root.querySelector(selectors)
  if (result) {
    return result as T
  } else {
    throw new Error(`Could not find any elements matching ${selectors}`)
  }
}
