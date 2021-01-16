import { isDocument } from './is-document'
import { isElement } from './is-element'

export function getBySelector(this: void | Element | Document, selectors: string): Element {
  const root = (
    isElement(this) || isDocument(this)
  ? this
  : document
  )
  const result = root.querySelector(selectors)
  if (result) {
    return result
  } else {
    throw new Error(`Could not find any elements matching ${selectors}`)
  }
}
