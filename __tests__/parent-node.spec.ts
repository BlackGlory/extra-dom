import { parentNode } from '@src/parent-node.js'
import { parseNodes } from '@src/parse-nodes.js'

describe('parentNode(node: Node, distance: number): (Node & ParentNode) | undefined', () => {
  describe('found', () => {
    it('returns the node by distance', () => {
      const root = parseNodes('<div><span><em></em></span></div>')[0]
      const node = (root as Element).querySelector('em')!

      const result = parentNode(node, 2)

      expect(result).toBe(root)
    })
  })

  describe('not found', () => {
    it('returns undefined', () => {
      const root = parseNodes('<div></div>')[0]

      const result = parentNode(root, 2)

      expect(result).toBeUndefined()
    })
  })
})
