import { test, expect } from 'vitest'
import { traverseFollowingSiblingNodes } from '@src/traverse-following-sibling-nodes.js'
import { parseNodes } from '@src/parse-nodes.js'
import { assert, toArray } from '@blackglory/prelude'
import { first } from 'extra-utils'

test('traverseFollowingSiblingNodes', () => {
  const nodes = parseNodes('<div>foo</div>bar<span>baz</span>')
  const node = first(nodes)
  assert(node)

  const result = toArray(traverseFollowingSiblingNodes(node))
  const nodeNames = result.map(x => x.nodeName)

  expect(nodeNames).toStrictEqual(['#text', 'SPAN'])
})
