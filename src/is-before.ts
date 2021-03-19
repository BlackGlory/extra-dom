export function isBefore(subject: Node, object: Node): boolean {
  if (subject.compareDocumentPosition(object) & Node.DOCUMENT_POSITION_FOLLOWING) {
    return true
  } else {
    return false
  }
}
