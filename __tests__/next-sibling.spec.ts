import { nextSibling } from '@src/next-sibling'
import { parse } from '@src/parse'

describe('nextSibling(node: Node, distance: number): ChildNode | undefined', () => {
  describe('found', () => {
    it('returns the node by distance', () => {
      const nodes = parse('<p></p><p></p><p></p>')

      const result = nextSibling(nodes[0], 2)

      expect(result).toBe(nodes[2])
    })
  })

  describe('not found', () => {
    it('returns undefined', () => {
      const nodes = parse('<p></p>')

      const result = nextSibling(nodes[0], 1)

      expect(result).toBeUndefined()
    })
  })
})
