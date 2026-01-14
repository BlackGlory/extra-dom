import { describe, test, expect } from 'vitest'
import { nextSibling } from '@src/next-sibling.js'
import { parseNodes } from '@src/parse-nodes.js'

describe('nextSibling', () => {
  test('found', () => {
    const nodes = parseNodes('<p></p><p></p><p></p>')

    const result = nextSibling(nodes[0], 2)

    expect(result).toBe(nodes[2])
  })

  test('not found', () => {
    const nodes = parseNodes('<p></p>')

    const result = nextSibling(nodes[0], 1)

    expect(result).toBeUndefined()
  })
})
