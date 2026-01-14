import { test, expect } from 'vitest'
import { traverseDescendantNodes } from '@src/traverse-descendant-nodes.js'
import { parseNodes } from '@src/parse-nodes.js'
import { toArray } from 'iterable-operator'

test('traverseDescendantNodes', () => {
  const root = parseNodes('<p><em>text</em>text</p>')[0]

  const result = toArray(traverseDescendantNodes(root))
  const nodeNames = result.map(x => x.nodeName)

  expect(nodeNames).toStrictEqual(['EM', '#text', '#text'])
})
