import { describe, test, expect } from 'vitest'
import { findInAncestorNodes } from '@src/find-in-ancestor-nodes.js'
import { parseNodes } from '@src/parse-nodes.js'
import { assert } from '@blackglory/prelude'

describe('findInAncestorNodes', () => {
  test('found', () => {
    const root = parseNodes('<div><div><span></span></div><div>')[0]
    const node = (root as Element).querySelector('span')
    assert(node)

    const result = findInAncestorNodes(node, node => node.nodeName === 'DIV')

    expect(result).toBe(root.childNodes[0])
  })

  test('not found', () => {
    const root = parseNodes('<article><span></span><article>')[0]
    const node = (root as Element).querySelector('span')
    assert(node)

    const result = findInAncestorNodes(node, node => node.nodeName === 'SPAN')

    expect(result).toBeUndefined()
  })
})
