export function isBefore(subject: Node, object: Node): boolean {
  return !!(
    subject.compareDocumentPosition(object) & Node.DOCUMENT_POSITION_FOLLOWING
  )
}
