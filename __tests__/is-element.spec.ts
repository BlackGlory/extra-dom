import { describe, test, expect } from 'vitest'
import { isElement } from '@src/is-element.js'

describe('isElement', () => {
  test('val is element', () => {
    const val = document.createElement('div')

    const result = isElement(val)

    expect(result).toBe(true)
  })

  test('val isnt element', () => {
    const val = document.createTextNode('')

    const result = isElement(val)

    expect(result).toBe(false)
  })

  describe('element from DOMParser', () => {
    test('val is element', () => {
      const parser = new DOMParser()
      const doc = parser.parseFromString('', 'text/html')
      const val = doc.createElement('div')

      const result = isElement(val)

      expect(result).toBe(true)
    })

    test('val isnt element', () => {
      const parser = new DOMParser()
      const doc = parser.parseFromString('', 'text/html')
      const val = doc.createTextNode('text')

      const result = isElement(val)

      expect(result).toBe(false)
    })
  })
})
