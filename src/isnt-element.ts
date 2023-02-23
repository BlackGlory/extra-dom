import { isElement } from './is-element.js'

export function isntElement<T>(val: T): val is Exclude<T, Element> {
  return !isElement(val)
}
