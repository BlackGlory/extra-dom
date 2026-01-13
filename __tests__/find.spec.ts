import { find } from '@src/find.js'
import { parseNodes } from '@src/parse-nodes.js'

describe('find(node: Node, predicate: (node: Node) => boolean): Node | undefined ', () => {
  describe('found', () => {
    it('returns the first matched node', () => {
      const root = parseNodes('<p><em></em><em></em></p>')[0]

      const result = find(root, node => node.nodeName === 'EM')

      expect(result).toBe(root.childNodes[0])
    })

    it('also works on root', () => {
      const root = parseNodes('<div><div></div></div>')[0]

      const result = find(root, node => node.nodeName === 'DIV')

      expect(result).toBe(root)
    })
  })

  describe('not found', () => {
    it('returns undefined', () => {
      const root = parseNodes('<p><em></em></p>')[0]

      const result = find(root, node => node.nodeName === 'SPAN')

      expect(result).toBeUndefined()
    })
  })
})
