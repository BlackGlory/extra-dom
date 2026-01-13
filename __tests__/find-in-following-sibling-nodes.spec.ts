import { findInFollowingSiblingNodes } from '@src/find-in-following-sibling-nodes.js'
import { parseNodes } from '@src/parse-nodes.js'

describe('findInFollowingSiblingNodes(node: Node, predicate: (node: Node) => unknown): Node | undefined', () => {
  describe('found', () => {
    it('return the first matched node', () => {
      const nodes = parseNodes('<p></p><p></p><p></p>')

      const result = findInFollowingSiblingNodes(nodes[0], node => node.nodeName === 'P')

      expect(result).toBe(nodes[1])
    })
  })

  describe('not found', () => {
    it('return undefined', () => {
      const nodes = parseNodes('<p></p><p></p>')

      const result = findInFollowingSiblingNodes(nodes[0], node => node.nodeName === 'SPAN')

      expect(result).toBeUndefined()
    })
  })
})
