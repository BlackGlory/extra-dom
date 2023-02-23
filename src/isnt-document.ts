import { isDocument } from './is-document.js'

export function isntDocument<T>(val: T): val is Exclude<T, Document> {
  return !isDocument(val)
}
