import { previousSibling } from '@src/previous-sibling.js'
import { parse } from '@src/parse.js'

describe('previousSibling(node: Node, distance: number): ChildNode | undefined', () => {
  describe('found', () => {
    it('returns the node by distance', () => {
      const nodes = parse('<p></p><p></p><p></p>')

      const result = previousSibling(nodes[2], 2)

      expect(result).toBe(nodes[0])
    })
  })

  describe('not found', () => {
    it('returns undefined', () => {
      const nodes = parse('<p></p>')

      const result = previousSibling(nodes[0], 1)

      expect(result).toBeUndefined()
    })
  })
})
