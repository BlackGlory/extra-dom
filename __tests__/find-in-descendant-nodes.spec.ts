import { findInDescendantNodes } from '@src/find-in-descendant-nodes.js'
import { parse } from '@src/parse.js'

describe('findInDescendantNodes(node: Node, predicate: (node: ChildNode) => unknown): ChildNode | undefined', () => {
  describe('found', () => {
    it('returns the first matched node', () => {
      const root = parse('<div><div></div><div></div><div>')[0]

      const result = findInDescendantNodes(root, node => node.nodeName === 'DIV')

      expect(result).toBe(root.childNodes[0])
    })
  })

  describe('not found', () => {
    it('returns undefined', () => {
      const root = parse('<div><div></div><div></div></div>')[0]

      const result = findInDescendantNodes(root, node => node.nodeName === 'SPAN')

      expect(result).toBeUndefined()
    })
  })
})
