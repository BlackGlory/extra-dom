import { isNode } from '@src/is-node'

describe('isNode', () => {
  describe('val is node', () => {
    it('return true', () => {
      const val = document.createElement('div')

      const result = isNode(val)

      expect(result).toBe(true)
    })
  })

  describe('val isnt node', () => {
    it('return false', () => {
      const val = {}

      const result = isNode(val)

      expect(result).toBe(false)
    })
  })

  describe('node from DOMParser', () => {
    describe('val is node', () => {
      it('return true', () => {
        const parser = new DOMParser()
        const doc = parser.parseFromString('', 'text/html')
        const val = doc.createElement('div')

        const result = isNode(val)

        expect(result).toBe(true)
      })
    })
  })
})
