export function isAfter(subject: Node, object: Node): boolean {
  return !!(
    subject.compareDocumentPosition(object) & Node.DOCUMENT_POSITION_PRECEDING
  )
}
