import { find } from '@src/find'
import '@blackglory/jest-matchers'
import { parse } from '@src/parse'

describe('find(node: Node, predicate: (node: Node) => boolean): Node | null ', () => {
  describe('work on root', () => {
    describe('found', () => {
      it('returns Node', () => {
        const root = parse('<p><em>text</em>text</p>')[0]

        const result = find(root, node => node.nodeName === 'P')

        expect(result).toBe(root)
      })
    })

    describe('not found', () => {
      it('returns null', () => {
        const root = parse('<p><em>text</em>text</p>')[0]

        const result = find(root, node => node.nodeName === 'SPAN')

        expect(result).toBeNull()
      })
    })
  })

  describe('work on descendant nodes', () => {
    describe('found', () => {
      it('returns Node', () => {
        const root = parse('<p><em>text</em>text</p>')[0]

        const result = find(root, node => node.nodeName === 'EM')

        expect(result).toBe(root.childNodes[0])
      })
    })

    describe('not found', () => {
      it('returns null', () => {
        const root = parse('<p><em>text</em>text</p>')[0]

        const result = find(root, node => node.nodeName === 'SPAN')

        expect(result).toBeNull()
      })
    })
  })
})
