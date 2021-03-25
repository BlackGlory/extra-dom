import { nextElementSibling } from '@src/next-element-sibling'
import { parse } from '@src/parse'

describe('nextElementSibling(node: Node, distance: number): Element | null', () => {
  describe('found', () => {
    it('returns the element by distance', () => {
      const nodes = parse('<p></p>text<p></p>text<p></p>')

      const result = nextElementSibling(nodes[0], 2)

      expect(result).toBe(nodes[4])
    })
  })

  describe('not found', () => {
    it('returns null', () => {
      const nodes = parse('<p></p>text')

      const result = nextElementSibling(nodes[0], 1)

      expect(result).toBeNull()
    })
  })
})
