import { parentNode } from '@src/parent-node'
import { parse } from '@src/parse'

describe('parentNode(node: Node, distance: number): (Node & ParentNode) | null', () => {
  describe('found', () => {
    it('returns the node by distance', () => {
      const root = parse('<div><span><em></em></span></div>')[0]
      const node = (root as Element).querySelector('em')!

      const result = parentNode(node, 2)

      expect(result).toBe(root)
    })
  })

  describe('not found', () => {
    it('returns null', () => {
      const root = parse('<div></div>')[0]

      const result = parentNode(root, 2)

      expect(result).toBeNull()
    })
  })
})
