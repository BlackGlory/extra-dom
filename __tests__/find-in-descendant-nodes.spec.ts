import { describe, test, expect } from 'vitest'
import { findInDescendantNodes } from '@src/find-in-descendant-nodes.js'
import { parseNodes } from '@src/parse-nodes.js'

describe('findInDescendantNodes', () => {
  test('found', () => {
    const root = parseNodes('<div><div></div><div></div><div>')[0]

    const result = findInDescendantNodes(root, node => node.nodeName === 'DIV')

    expect(result).toBe(root.childNodes[0])
  })

  test('not found', () => {
    const root = parseNodes('<div><div></div><div></div></div>')[0]

    const result = findInDescendantNodes(root, node => node.nodeName === 'SPAN')

    expect(result).toBeUndefined()
  })
})
