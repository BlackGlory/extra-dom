import { findInFollowingSiblingNodes } from '@src/find-in-following-sibling-nodes'
import { parse } from '@src/parse'

describe('findInFollowingSiblingNodes(node: Node, predicate: (node: Node) => unknown): Node | undefined', () => {
  describe('found', () => {
    it('return the first matched node', () => {
      const nodes = parse('<p></p><p></p><p></p>')

      const result = findInFollowingSiblingNodes(nodes[0], node => node.nodeName === 'P')

      expect(result).toBe(nodes[1])
    })
  })

  describe('not found', () => {
    it('return undefined', () => {
      const nodes = parse('<p></p><p></p>')

      const result = findInFollowingSiblingNodes(nodes[0], node => node.nodeName === 'SPAN')

      expect(result).toBeUndefined()
    })
  })
})
