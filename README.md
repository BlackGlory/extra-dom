# extra-dom

Utilities for DOM.

## Install

```sh
npm install --save extra-dom
# or
yarn add extra-dom
```

## API

### map

```ts
function map(node: Node, fn: (node: Node) => Node): Node
```

Traverse the node tree and do `map`.

### flatMap

```ts
function flatMap(node: Node, fn: (node: Node) => Node[]): Node[]
```

Traverse the node tree and do `flatMap`.

- `[]`: remove current node
- `[node]`: replace current node
- `[node1, node2, ...nodeN]`: replace current node with more nodes

### filter

```ts
function filter(node: Node, fn: (node: Node) => boolean): Node | null
```

Traverse the node tree and do `filter`.

### parseNode

```ts
function parseNode(str: string): Node[]
```

### stringifyNode

```ts
function stringifyNode(...nodes: Node[]): string
```
