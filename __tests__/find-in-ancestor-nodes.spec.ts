import { findInAncestorNodes } from '@src/find-in-ancestor-nodes.js'
import { parseNodes } from '@src/parse-nodes.js'

describe(`
  findInAncestorNodes(
    node: Node
  , predicate: (node: Node & ParentNode) => unknown
  ): (Node & ParentNode) | undefined
`, () => {
  describe('found', () => {
    it('returns the first matched node', () => {
      const root = parseNodes('<div><div><span></span></div><div>')[0]
      const node = (root as Element).querySelector('span')!

      const result = findInAncestorNodes(node, node => node.nodeName === 'DIV')

      expect(result).toBe(root.childNodes[0])
    })
  })

  describe('not found', () => {
    it('returns undefined', () => {
      const root = parseNodes('<article><span></span><article>')[0]
      const node = (root as Element).querySelector('span')!

      const result = findInAncestorNodes(node, node => node.nodeName === 'SPAN')

      expect(result).toBeUndefined()
    })
  })
})
