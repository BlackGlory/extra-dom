import { isDocument } from '@src/is-document.js'

describe('isDocument', () => {
  describe('val is element', () => {
    it('return true', () => {
      const result = isDocument(document)

      expect(result).toBe(true)
    })
  })

  describe('val isnt flement', () => {
    it('return false', () => {
      const val = document.createElement('div')

      const result = isDocument(val)

      expect(result).toBe(false)
    })
  })

  describe('element from DOMParser', () => {
    describe('val is element', () => {
      it('return true', () => {
        const parser = new DOMParser()
        const val = parser.parseFromString('', 'text/html')

        const result = isDocument(val)

        expect(result).toBe(true)
      })
    })

    describe('val isnt flement', () => {
      it('return false', () => {
        const parser = new DOMParser()
        const doc = parser.parseFromString('', 'text/html')
        const val = doc.createElement('div')

        const result = isDocument(val)

        expect(result).toBe(false)
      })
    })
  })
})
