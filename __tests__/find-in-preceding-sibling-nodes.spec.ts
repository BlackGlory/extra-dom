import { findInPrecedingSiblingNodes } from '@src/find-in-preceding-sibling-nodes'
import { parse } from '@src/parse'

describe('findInPrecedingSiblingNodes(node: Node, predicate: (node: Node) => unknown): Node | undefined', () => {
  describe('found', () => {
    it('return the first matched node', () => {
      const nodes = parse('<p></p><p></p><p></p>')

      const result = findInPrecedingSiblingNodes(nodes[2], node => node.nodeName === 'P')

      expect(result).toBe(nodes[1])
    })
  })

  describe('not found', () => {
    it('return undefined', () => {
      const nodes = parse('<p></p><p></p>')

      const result = findInPrecedingSiblingNodes(nodes[1], node => node.nodeName === 'SPAN')

      expect(result).toBeUndefined()
    })
  })
})
