const nodeExists = 'Node' in globalThis

export enum NodeType {
  ELEMENT_NODE = nodeExists
  ? globalThis.Node.ELEMENT_NODE
  : 1

, ATTRIBUTE_NODE = nodeExists
  ? globalThis.Node.ATTRIBUTE_NODE
  : 2

, TEXT_NODE	= nodeExists
  ? globalThis.Node.TEXT_NODE
  : 3

, CDATA_SECTION_NODE = nodeExists
  ? globalThis.Node.CDATA_SECTION_NODE
  : 4

, ENTITY_REFERENCE_NODE = nodeExists
  ? globalThis.Node.ENTITY_REFERENCE_NODE
  : 5

, ENTITY_NODE = nodeExists
  ? globalThis.Node.ENTITY_NODE
  : 6

, PROCESSING_INSTRUCTION_NODE	= nodeExists
  ? globalThis.Node.PROCESSING_INSTRUCTION_NODE
  : 7

, COMMENT_NODE = nodeExists
  ? globalThis.Node.COMMENT_NODE
  : 8

, DOCUMENT_NODE = nodeExists
  ? globalThis.Node.DOCUMENT_NODE
  : 9

, DOCUMENT_TYPE_NODE = nodeExists
  ? globalThis.Node.DOCUMENT_TYPE_NODE
  : 10

, DOCUMENT_FRAGMENT_NODE = nodeExists
  ? globalThis.Node.DOCUMENT_FRAGMENT_NODE
  : 11

, NOTATION_NODE = nodeExists
  ? globalThis.Node.NOTATION_NODE
  : 12
}
