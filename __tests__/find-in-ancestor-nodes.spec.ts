import { findInAncestorNodes } from '@src/find-in-ancestor-nodes'
import '@blackglory/jest-matchers'
import { parse } from '@src/parse'

describe(`
  findInAncestorNodes(
    node: Node
  , predicate: (node: Node & ParentNode) => unknown
  ): (Node & ParentNode) | null
`, () => {
  describe('found', () => {
    it('returns the first matched node', () => {
      const root = parse('<div><div><span></span></div><div>')[0]
      const node = (root as Element).querySelector('span')!

      const result = findInAncestorNodes(node, node => node.nodeName === 'DIV')

      expect(result).toBe(root.childNodes[0])
    })
  })

  describe('not found', () => {
    it('returns null', () => {
      const root = parse('<article><span></span><article>')[0]
      const node = (root as Element).querySelector('span')!

      const result = findInAncestorNodes(node, node => node.nodeName === 'SPAN')

      expect(result).toBeNull()
    })
  })
})
