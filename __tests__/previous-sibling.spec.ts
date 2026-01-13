import { previousSibling } from '@src/previous-sibling.js'
import { parseNodes } from '@src/parse-nodes.js'

describe('previousSibling(node: Node, distance: number): ChildNode | undefined', () => {
  describe('found', () => {
    it('returns the node by distance', () => {
      const nodes = parseNodes('<p></p><p></p><p></p>')

      const result = previousSibling(nodes[2], 2)

      expect(result).toBe(nodes[0])
    })
  })

  describe('not found', () => {
    it('returns undefined', () => {
      const nodes = parseNodes('<p></p>')

      const result = previousSibling(nodes[0], 1)

      expect(result).toBeUndefined()
    })
  })
})
