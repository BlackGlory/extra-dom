import { describe, test, expect } from 'vitest'
import { isNode } from '@src/is-node.js'

describe('isNode', () => {
  test('val is node', () => {
    const val = document.createElement('div')

    const result = isNode(val)

    expect(result).toBe(true)
  })

  test('val isnt node', () => {
    const val = null

    const result = isNode(val)

    expect(result).toBe(false)
  })

  describe('node from DOMParser', () => {
    test('val is node', () => {
      const parser = new DOMParser()
      const doc = parser.parseFromString('', 'text/html')
      const val = doc.createElement('div')

      const result = isNode(val)

      expect(result).toBe(true)
    })

    test('val isnt node', () => {
      const parser = new DOMParser()
      const doc = parser.parseFromString('', 'text/html')
      const val = doc.createComment('comment')

      const result = isNode(val)

      expect(result).toBe(true)
    })
  })
})
