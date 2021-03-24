import { findInDescendantNodes } from '@src/find-in-descendant-nodes'
import '@blackglory/jest-matchers'
import { parse } from '@src/parse'

describe('findInDescendantNodes(node: Node, predicate: (node: ChildNode) => unknown): ChildNode | null', () => {
  describe('found', () => {
    it('returns the first matched node', () => {
      const root = parse('<div><div></div><div></div><div>')[0]

      const result = findInDescendantNodes(root, node => node.nodeName === 'DIV')

      expect(result).toBe(root.childNodes[0])
    })
  })

  describe('not found', () => {
    it('returns null', () => {
      const root = parse('<div><div></div><div></div></div>')[0]

      const result = findInDescendantNodes(root, node => node.nodeName === 'SPAN')

      expect(result).toBeNull()
    })
  })
})
