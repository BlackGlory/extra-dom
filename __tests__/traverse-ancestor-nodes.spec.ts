import { test, expect } from 'vitest'
import { traverseAncestorNodes } from '@src/traverse-ancestor-nodes.js'
import { parseNodes } from '@src/parse-nodes.js'
import { toArray } from 'iterable-operator'
import { assert } from '@blackglory/prelude'
import { removeAllChildren } from '@src/remove-all-children.js'

test('traverseAncestorNodes', () => {
  const root = parseNodes('<p><em>text</em>text</p>')[0]
  assert(root.parentNode)
  // 移除节点共同的document-framgent节点
  removeAllChildren(root.parentNode)
  const node = (root as Element).querySelector('em')?.childNodes[0]
  assert(node)

  const result = toArray(traverseAncestorNodes(node))
  const nodeNames = result.map(x => x.nodeName)

  expect(nodeNames).toStrictEqual(['EM', 'P'])
})
