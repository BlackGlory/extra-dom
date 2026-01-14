import { describe, expect, test } from 'vitest'
import { findInFollowingSiblingNodes } from '@src/find-in-following-sibling-nodes.js'
import { parseNodes } from '@src/parse-nodes.js'

describe('findInFollowingSiblingNodes', () => {
  test('found', () => {
    const nodes = parseNodes('<p></p><p></p><p></p>')

    const result = findInFollowingSiblingNodes(
      nodes[0]
    , node => node.nodeName === 'P'
    )

    expect(result).toBe(nodes[1])
  })

  test('not found', () => {
    const nodes = parseNodes('<p></p><p></p>')

    const result = findInFollowingSiblingNodes(
      nodes[0]
    , node => node.nodeName === 'SPAN'
    )

    expect(result).toBeUndefined()
  })
})
