import { describe, test, expect } from 'vitest'
import { parentNode } from '@src/parent-node.js'
import { parseNodes } from '@src/parse-nodes.js'
import { assert } from '@blackglory/prelude'

describe('parentNode', () => {
  test('found', () => {
    const root = parseNodes('<div><span><em></em></span></div>')[0]
    const node = (root as Element).querySelector('em')
    assert(node)

    const result = parentNode(node, 2)

    expect(result).toBe(root)
  })

  test('not found', () => {
    const root = parseNodes('<div></div>')[0]

    const result = parentNode(root, 2)

    expect(result).toBeUndefined()
  })
})
