import { describe, test, expect } from 'vitest'
import { isDocument } from '@src/is-document.js'

describe('isDocument', () => {
  test('val is element', () => {
    const result = isDocument(document)

    expect(result).toBe(true)
  })

  test('val isnt flement', () => {
    const val = document.createElement('div')

    const result = isDocument(val)

    expect(result).toBe(false)
  })

  describe('element from DOMParser', () => {
    test('val is element', () => {
      const parser = new DOMParser()
      const val = parser.parseFromString('', 'text/html')

      const result = isDocument(val)

      expect(result).toBe(true)
    })

    test('val isnt flement', () => {
      const parser = new DOMParser()
      const doc = parser.parseFromString('', 'text/html')
      const val = doc.createElement('div')

      const result = isDocument(val)

      expect(result).toBe(false)
    })
  })
})
