import { DocumentPosition } from './utils.js'

export function isAfter(subject: Node, object: Node): boolean {
  return !!(
    subject.compareDocumentPosition(object) & DocumentPosition.DOCUMENT_POSITION_PRECEDING
  )
}
