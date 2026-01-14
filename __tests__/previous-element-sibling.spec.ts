import { describe, test, expect } from 'vitest'
import { previousElementSibling } from '@src/previous-element-sibling.js'
import { parseNodes } from '@src/parse-nodes.js'

describe('previousElementSibling', () => {
  test('found', () => {
    const nodes = parseNodes('<p></p>text<p></p>text<p></p>')

    const result = previousElementSibling(nodes[4], 2)

    expect(result).toBe(nodes[0])
  })

  test('not found', () => {
    const nodes = parseNodes('text<p></p>')

    const result = previousElementSibling(nodes[1], 1)

    expect(result).toBeUndefined()
  })
})
