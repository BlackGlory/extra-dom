import { describe, test, expect } from 'vitest'
import { isParentNode } from '@src/is-parent-node.js'

describe('isParentNode', () => {
  test('val is ParentNode', () => {
    const val = document.createElement('div')

    const result = isParentNode(val)

    expect(result).toBe(true)
  })

  test('val isnt ParentNode', () => {
    const val = document.createTextNode('text')

    const result = isParentNode(val)

    expect(result).toBe(false)
  })

  describe('node from DOMParser', () => {
    test('val is ParentNode', () => {
      const parser = new DOMParser()
      const doc = parser.parseFromString('', 'text/html')
      const val = doc.createElement('div')

      const result = isParentNode(val)

      expect(result).toBe(true)
    })

    test('val isnt ParentNode', () => {
      const parser = new DOMParser()
      const doc = parser.parseFromString('', 'text/html')
      const val = doc.createTextNode('text')

      const result = isParentNode(val)

      expect(result).toBe(false)
    })
  })
})
