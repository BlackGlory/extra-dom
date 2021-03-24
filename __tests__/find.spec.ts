import { find } from '@src/find'
import '@blackglory/jest-matchers'
import { parse } from '@src/parse'

describe('find(node: Node, predicate: (node: Node) => boolean): Node | null ', () => {
  describe('found', () => {
    it('returns the first matched node', () => {
      const root = parse('<p><em></em><em></em></p>')[0]

      const result = find(root, node => node.nodeName === 'EM')

      expect(result).toBe(root.childNodes[0])
    })

    it('also works on root', () => {
      const root = parse('<div><div></div></div>')[0]

      const result = find(root, node => node.nodeName === 'DIV')

      expect(result).toBe(root)
    })
  })

  describe('not found', () => {
    it('returns null', () => {
      const root = parse('<p><em></em></p>')[0]

      const result = find(root, node => node.nodeName === 'SPAN')

      expect(result).toBeNull()
    })
  })
})
