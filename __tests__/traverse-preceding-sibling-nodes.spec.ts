import { test, expect } from 'vitest'
import { traversePrecedingSiblingNodes } from '@src/traverse-preceding-sibling-nodes.js'
import { parseNodes } from '@src/parse-nodes.js'
import { assert, toArray } from '@blackglory/prelude'
import { last } from 'extra-utils'

test('traversePrecedingSiblingNodes', () => {
  const nodes = parseNodes('<div>foo</div>bar<span>baz</span>')
  const node = last(nodes)
  assert(node)

  const result = toArray(traversePrecedingSiblingNodes(node))
  const nodeNames = result.map(x => x.nodeName)

  expect(nodeNames).toStrictEqual(['#text', 'DIV'])
})
