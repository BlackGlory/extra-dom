import { previousSibling } from '@src/previous-sibling'
import { parse } from '@src/parse'

describe('previousSibling(node: Node, distance: number): ChildNode | null', () => {
  describe('found', () => {
    it('returns the node by distance', () => {
      const nodes = parse('<p></p><p></p><p></p>')

      const result = previousSibling(nodes[2], 2)

      expect(result).toBe(nodes[0])
    })
  })

  describe('not found', () => {
    it('returns null', () => {
      const nodes = parse('<p></p>')

      const result = previousSibling(nodes[0], 1)

      expect(result).toBeNull()
    })
  })
})
