export function isAfter(subject: Node, object: Node): boolean {
  if (subject.compareDocumentPosition(object) & Node.DOCUMENT_POSITION_PRECEDING) {
    return true
  } else {
    return false
  }
}
