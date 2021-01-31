const nodeExists = 'Node' in globalThis

export enum NodeConstants {
  ELEMENT_NODE = nodeExists ? Node.ELEMENT_NODE : 1
, ATTRIBUTE_NODE = nodeExists ? Node.ATTRIBUTE_NODE : 2
, TEXT_NODE	= nodeExists ? Node.TEXT_NODE : 3
, CDATA_SECTION_NODE = nodeExists ? Node.CDATA_SECTION_NODE : 4
, ENTITY_REFERENCE_NODE = nodeExists ? Node.ENTITY_REFERENCE_NODE : 5
, ENTITY_NODE = nodeExists ? Node.ENTITY_NODE : 6
, PROCESSING_INSTRUCTION_NODE	= nodeExists ? Node.PROCESSING_INSTRUCTION_NODE : 7
, COMMENT_NODE = nodeExists ? Node.COMMENT_NODE : 8
, DOCUMENT_NODE = nodeExists ? Node.DOCUMENT_NODE : 9
, DOCUMENT_TYPE_NODE = nodeExists ? Node.DOCUMENT_TYPE_NODE : 10
, DOCUMENT_FRAGMENT_NODE = nodeExists ? Node.DOCUMENT_FRAGMENT_NODE : 11
, NOTATION_NODE = nodeExists ? Node.NOTATION_NODE : 12
}
