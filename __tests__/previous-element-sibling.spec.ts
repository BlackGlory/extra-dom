import { previousElementSibling } from '@src/previous-element-sibling'
import { parse } from '@src/parse'

describe('previousElementSibling(node: Node, distance: number): Element | null', () => {
  describe('found', () => {
    it('returns the element by distance', () => {
      const nodes = parse('<p></p>text<p></p>text<p></p>')

      const result = previousElementSibling(nodes[4], 2)

      expect(result).toBe(nodes[0])
    })
  })

  describe('not found', () => {
    it('returns null', () => {
      const nodes = parse('text<p></p>')

      const result = previousElementSibling(nodes[1], 1)

      expect(result).toBeNull()
    })
  })
})
