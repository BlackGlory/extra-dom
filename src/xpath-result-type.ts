const xpathResultExists = 'XPathResult' in globalThis

export enum XPathResultType {
  ANY_TYPE = xpathResultExists
    ? globalThis.XPathResult.ANY_TYPE
    : 0

, NUMBER_TYPE = xpathResultExists
    ? globalThis.XPathResult.NUMBER_TYPE
    : 1

, STRING_TYPE = xpathResultExists
    ? globalThis.XPathResult.STRING_TYPE
    : 2

, BOOLEAN_TYPE = xpathResultExists
    ? globalThis.XPathResult.BOOLEAN_TYPE
    : 3

, UNORDERED_NODE_ITERATOR_TYPE = xpathResultExists
    ? globalThis.XPathResult.UNORDERED_NODE_ITERATOR_TYPE
    : 4

, ORDERED_NODE_ITERATOR_TYPE = xpathResultExists
    ? globalThis.XPathResult.ORDERED_NODE_ITERATOR_TYPE
    : 5

, UNORDERED_NODE_SNAPSHOT_TYPE = xpathResultExists
    ? globalThis.XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE
    : 6

, ORDERED_NODE_SNAPSHOT_TYPE = xpathResultExists
    ? globalThis.XPathResult.ORDERED_NODE_SNAPSHOT_TYPE
    : 7

, ANY_UNORDERED_NODE_TYPE = xpathResultExists
    ? globalThis.XPathResult.ANY_UNORDERED_NODE_TYPE
    : 8

, FIRST_ORDERED_NODE_TYPE = xpathResultExists
    ? globalThis.XPathResult.FIRST_ORDERED_NODE_TYPE
    : 9
}
