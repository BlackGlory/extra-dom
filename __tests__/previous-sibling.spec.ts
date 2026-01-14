import { describe, test, expect } from 'vitest'
import { previousSibling } from '@src/previous-sibling.js'
import { parseNodes } from '@src/parse-nodes.js'

describe('previousSibling', () => {
  test('found', () => {
    const nodes = parseNodes('<p></p><p></p><p></p>')

    const result = previousSibling(nodes[2], 2)

    expect(result).toBe(nodes[0])
  })

  test('not found', () => {
    const nodes = parseNodes('<p></p>')

    const result = previousSibling(nodes[0], 1)

    expect(result).toBeUndefined()
  })
})
