import { nextSibling } from '@src/next-sibling.js'
import { parseNodes } from '@src/parse-nodes.js'

describe('nextSibling(node: Node, distance: number): ChildNode | undefined', () => {
  describe('found', () => {
    it('returns the node by distance', () => {
      const nodes = parseNodes('<p></p><p></p><p></p>')

      const result = nextSibling(nodes[0], 2)

      expect(result).toBe(nodes[2])
    })
  })

  describe('not found', () => {
    it('returns undefined', () => {
      const nodes = parseNodes('<p></p>')

      const result = nextSibling(nodes[0], 1)

      expect(result).toBeUndefined()
    })
  })
})
