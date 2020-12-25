import { filter } from '@src/filter'
import { parse } from '@src/parse'
import { stringify } from '@src/stringify'

describe('filter', () => {
  it('is preorder', () => {
    const root = parse('<p><em>text</em></p>')[0]

    const result: string[] = []
    filter(root, node => {
      result.push(node.nodeName)
      return true
    })

    expect(result).toEqual(['P', 'EM', '#text'])
  })

  it('is DFS', () => {
    const root = parse('<p><em>deep</em>shallow</p>')[0]

    const result: string[] = []
    filter(root, node => {
      if (node.nodeType === Node.TEXT_NODE) result.push(node.textContent!)
      return true
    })

    expect(result).toEqual(['deep', 'shallow'])
  })

  it('clone nodes', () => {
    const root = parse('<p><em>text</em></p>')[0]

    const result = filter(root, _ => true)!

    expect(result).not.toBe(root)
    expect(result.isEqualNode(root)).toBeTruthy()
  })

  describe('reject children', () => {
    it('return Node', () => {
      const root = parse('<p><em></em></p>')[0]

      const result = filter(root, node => node.nodeName !== 'EM')!

      expect(stringify([result])).toBe('<p></p>')
    })
  })

  describe('reject root', () => {
    it('return null', () => {
      const root = parse('<p><em></em></p>')[0]

      const result = filter(root, node => node.nodeName !== 'P')

      expect(result).toBeNull()
    })
  })
})
