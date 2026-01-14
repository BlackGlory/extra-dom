import { describe, test, expect } from 'vitest'
import { nextElementSibling } from '@src/next-element-sibling.js'
import { parseNodes } from '@src/parse-nodes.js'

describe('nextElementSibling', () => {
  test('found', () => {
    const nodes = parseNodes('<p></p>text<p></p>text<p></p>')

    const result = nextElementSibling(nodes[0], 2)

    expect(result).toBe(nodes[4])
  })

  test('not found', () => {
    const nodes = parseNodes('<p></p>text')

    const result = nextElementSibling(nodes[0], 1)

    expect(result).toBeUndefined()
  })
})
