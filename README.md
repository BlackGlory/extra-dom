# extra-dom

Utilities for DOM.

## Install

```sh
npm install --save extra-dom
# or
yarn add extra-dom
```

## API

### flatMap

```ts
function flatMap(node: Node, fn: (node: Node) => Node[]): Node[]
```

Traverse the node tree and do `flatMap`.

- `[]`: remove current node
- `[node]`: replace current node
- `[node1, node2, ...nodeN]`: replace current node with more nodes

### map

```ts
function map(node: Node, fn: (node: Node) => Node): Node
```

Traverse the node tree and do `map`.

### filter

```ts
function filter(node: Node, predicate: (node: Node) => unknown): Node | undefined
```

Traverse the node tree and do `filter`.

### unwrap

```ts
function unwrap(node: Node, predicate: (node: Node) => unknown): Node[]
```

Traverse the node tree and do `unwrap`.

### find

```ts
function find(node: Node, predicate: (node: Node) => unknown): Node | undefined
```

Traverse the node tree and do `find`.

### parse

```ts
function parse(html: string): Node[]
```

### stringify

```ts
function stringify(nodes: Node[]): string
```

### normalize

```ts
function normalize(html: string): string
```

It is the shortcut for `stringify(parse(html))`.

### removeAllChildren

```ts
function removeAllChildren(node: Node): void
```

### removeAttributes

```ts
function removeAttributes(node: Node, predicate: (name: string) => unknown): void
```

### getBySelector

```ts
function getBySelector<T extends Element>(
  this: void | Element | Document
, selectors: string
): T
```

Return the first matched element.

If cannot find any elements, it throws.

### getAllBySelector

```ts
function getAllBySelector<T extends Element>(
  this: void | Element | Document
, selectors: string
): T[]
```

Return matched elements.

If cannot find any elements, it throws.

### traverseAncestorNodes

```ts
function traverseAncestorNodes(node: Node): Iterable<Node & ParentNode>
```

### traverseDescendantNodes

```ts
function traverseDescendantNodes(node: Node): Iterable<ChildNode>
```

### findInAncestorNodes

```ts
function findInAncestorNodes(
  node: Node
, predicate: (node: Node & ParentNode) => unknown
): (Node & ParentNode) | undefined
```

### findInDescendantNodes

```ts
function find(node: Node, predicate: (node: ChildNode) => unknown): ChildNode | undefined
```

### findInPrecedingSiblingNodes

```ts
function findInPrecedingSiblingNodes(
  node: Node
, predicate: (node: Node) => unknown
): Node | undefined
```

This function uses `Node.previousSibling` to traverse the preceding sibling nodes.

### findInFollowingSiblingNodes

```ts
function findInFollowingSiblingNodes(
  node: Node
, predicate: (node: Node) => unknown
): Node | undefined
```

This function uses `Node.nextSibling` to traverse the following sibling nodes.

### parentNode

```ts
function parentNode(node: Node, distance: number = 1): (Node & ParentNode) | undefined
```

### nextSibling

```ts
function nextSibling(node: Node, distance: number = 1): ChildNode | undefined
```

### previousSibling

```ts
function previousSibling(node: Node, distance: number = 1): ChildNode | undefined
```

### nextElementSibling

```ts
function nextElementSibling(node: Node, distance: number = 1): Element | undefined
```

### previousElementSibling

```ts
function previousElementSibling(node: Node, distance: number = 1): Element | undefined
```

### isDocument

```ts
function isDocument(val: any): val is Document
```

### isntDocument

```ts
function isntDocument<T>(val: T): val is Exclude<T, Document>
```

### isElement

```ts
function isElement(val: any): val is Element
```

### isntElement

```ts
function isntElement<T>(val: T): val is Exclude<T, Element>
```

### isTextNode

```ts
function isTextNode(val: any): val is Text
```

### isntTextNode

```ts
function isntTextNode<T>(val: any): node is Exclude<T, Text>
```

### isNode

```ts
function isNode(val: any): val is Node
```

### isntNode

```ts
function isntNode<T>(val: T): val is Exclude<T, Node>
```

### isParentNode

```ts
function isParentNode(val: any): val is Node & ParentNode
```

### isntParentNode

```ts
function isntParentNode<T>(val: any): val is Exclude<T, Node & ParentNode>
```

### isBefore

```ts
function isBefore(subject: Node, object: Node): boolean
```

### isAfter

```ts
function isAfter(subject: Node, object: Node): boolean
```

### NodeType

```ts
enum NodeType {
  ELEMENT_NODE
, ATTRIBUTE_NODE
, TEXT_NODE
, CDATA_SECTION_NODE
, ENTITY_REFERENCE_NODE
, ENTITY_NODE
, PROCESSING_INSTRUCTION_NODE
, COMMENT_NODE
, DOCUMENT_NODE
, DOCUMENT_TYPE_NODE
, DOCUMENT_FRAGMENT_NODE
, NOTATION_NODE
}
```

### XPathResultType

```ts
enum XPathResultType {
  ANY_TYPE
, NUMBER_TYPE
, STRING_TYPE
, BOOLEAN_TYPE
, UNORDERED_NODE_ITERATOR_TYPE
, ORDERED_NODE_ITERATOR_TYPE
, UNORDERED_NODE_SNAPSHOT_TYPE
, ORDERED_NODE_SNAPSHOT_TYPE
, ANY_UNORDERED_NODE_TYPE
, FIRST_ORDERED_NODE_TYPE
}
```
