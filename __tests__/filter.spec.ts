import { filter } from '@src/filter.js'
import { parseNodes } from '@src/parse-nodes.js'
import { stringifyNodes } from '@src/stringify-nodes.js'

describe('filter', () => {
  it('is preorder', () => {
    const root = parseNodes('<p><em>text</em></p>')[0]

    const result: string[] = []
    filter(root, node => {
      result.push(node.nodeName)
      return true
    })

    expect(result).toEqual(['P', 'EM', '#text'])
  })

  it('is DFS', () => {
    const root = parseNodes('<p><em>deep</em>shallow</p>')[0]

    const result: string[] = []
    filter(root, node => {
      if (node.nodeType === Node.TEXT_NODE) result.push(node.textContent!)
      return true
    })

    expect(result).toEqual(['deep', 'shallow'])
  })

  it('clone nodes', () => {
    const root = parseNodes('<p><em>text</em></p>')[0]

    const result = filter(root, _ => true)!

    expect(result).not.toBe(root)
    expect(result.isEqualNode(root)).toBeTruthy()
  })

  describe('reject children', () => {
    it('return Node', () => {
      const root = parseNodes('<p><em></em></p>')[0]

      const result = filter(root, node => node.nodeName !== 'EM')!

      expect(stringifyNodes([result])).toBe('<p></p>')
    })
  })

  describe('reject root', () => {
    it('return undefined', () => {
      const root = parseNodes('<p><em></em></p>')[0]

      const result = filter(root, node => node.nodeName !== 'P')

      expect(result).toBeUndefined()
    })
  })
})
