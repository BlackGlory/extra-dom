import { isParentNode } from '@src/is-parent-node'

describe('isParentNode', () => {
  describe('val is ParentNode', () => {
    it('returns true', () => {
      const val = document.createElement('div')

      const result = isParentNode(val)

      expect(result).toBe(true)
    })
  })

  describe('val isnt ParentNode', () => {
    it('returns false', () => {
      const val = document.createTextNode('')

      const result = isParentNode(val)

      expect(result).toBe(false)
    })
  })
})
