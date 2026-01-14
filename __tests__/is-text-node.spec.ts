import { describe, test, expect } from 'vitest'
import { isTextNode } from '@src/is-text-node.js'

describe('isTextNode', () => {
  test('node is Text', () => {
    const node = document.createTextNode('')

    const result = isTextNode(node)

    expect(result).toBe(true)
  })

  test('node isnt Text', () => {
    const node = document.createElement('div')

    const result = isTextNode(node)

    expect(result).toBe(false)
  })

  describe('element from DOMParser', () => {
    test('node is Text', () => {
      const parser = new DOMParser()
      const doc = parser.parseFromString('', 'text/html')
      const node = doc.createTextNode('')

      const result = isTextNode(node)

      expect(result).toBe(true)
    })

    test('node isnt Text', () => {
      const parser = new DOMParser()
      const doc = parser.parseFromString('', 'text/html')
      const node = doc.createElement('div')

      const result = isTextNode(node)

      expect(result).toBe(false)
    })
  })
})
