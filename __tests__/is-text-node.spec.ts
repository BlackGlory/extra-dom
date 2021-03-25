import { isTextNode } from '@src/is-text-node'

describe('isTextNode(node: Node): boolean', () => {
  describe('node is TextNode', () => {
    it('returns true', () => {
      const node = document.createTextNode('')

      const result = isTextNode(node)

      expect(result).toBe(true)
    })
  })

  describe('node isnt TextNode', () => {
    it('returns false', () => {
      const node = document.createElement('div')

      const result = isTextNode(node)

      expect(result).toBe(false)
    })
  })

  describe('element from DOMParser', () => {
    describe('node is TextNode', () => {
      it('returns true', () => {
        const parser = new DOMParser()
        const doc = parser.parseFromString('', 'text/html')
        const node = doc.createTextNode('')

        const result = isTextNode(node)

        expect(result).toBe(true)
      })
    })

    describe('node isnt TextNode', () => {
      it('returns false', () => {
        const parser = new DOMParser()
        const doc = parser.parseFromString('', 'text/html')
        const node = doc.createElement('div')

        const result = isTextNode(node)

        expect(result).toBe(false)
      })
    })
  })
})
