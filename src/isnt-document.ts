import { isDocument } from './is-document'

export function isntDocument<T>(val: T): val is Exclude<T, Document> {
  return !isDocument(val)
}
