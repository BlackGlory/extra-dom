import { isElement } from '@src/is-element.js'

describe('isElement', () => {
  describe('val is element', () => {
    it('return true', () => {
      const val = document.createElement('div')

      const result = isElement(val)

      expect(result).toBe(true)
    })
  })

  describe('val isnt element', () => {
    it('return false', () => {
      const val = document.createTextNode('')

      const result = isElement(val)

      expect(result).toBe(false)
    })
  })

  describe('element from DOMParser', () => {
    describe('val is element', () => {
      it('return true', () => {
        const parser = new DOMParser()
        const doc = parser.parseFromString('', 'text/html')
        const val = doc.createElement('div')

        const result = isElement(val)

        expect(result).toBe(true)
      })
    })

    describe('val isnt element', () => {
      it('return false', () => {
        const parser = new DOMParser()
        const doc = parser.parseFromString('', 'text/html')
        const val = doc.createTextNode('')

        const result = isElement(val)

        expect(result).toBe(false)
      })
    })
  })
})
