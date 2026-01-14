import { describe, test, expect } from 'vitest'
import { findInPrecedingSiblingNodes } from '@src/find-in-preceding-sibling-nodes.js'
import { parseNodes } from '@src/parse-nodes.js'

describe('findInPrecedingSiblingNodes', () => {
  test('found', () => {
    const nodes = parseNodes('<p></p><p></p><p></p>')

    const result = findInPrecedingSiblingNodes(
      nodes[2]
    , node => node.nodeName === 'P'
    )

    expect(result).toBe(nodes[1])
  })

  test('not found', () => {
    const nodes = parseNodes('<p></p><p></p>')

    const result = findInPrecedingSiblingNodes(
      nodes[1]
    , node => node.nodeName === 'SPAN'
    )

    expect(result).toBeUndefined()
  })
})
