import { flatMap } from '@src/flat-map.js'
import { parseNodes } from '@src/parse-nodes.js'
import { stringifyNodes } from '@src/stringify-nodes.js'

describe('flatMap', () => {
  it('is preorder', () => {
    const root = parseNodes('<p><em>text</em></p>')[0]

    const result: string[] = []
    flatMap(root, node => {
      result.push(node.nodeName)
      return [node]
    })

    expect(result).toEqual(['P', 'EM', '#text'])
  })

  it('is DFS', () => {
    const root = parseNodes('<p><em>deep</em>shallow</p>')[0]

    const result: string[] = []
    flatMap(root, node => {
      if (node.nodeType === Node.TEXT_NODE) result.push(node.textContent!)
      return [node]
    })

    expect(result).toEqual(['deep', 'shallow'])
  })

  it('clone nodes', () => {
    const root = parseNodes('<p><em>text</em></p>')[0]

    const result = flatMap(root, node => [node])

    expect(result[0]).not.toBe(root)
    expect(result[0].isEqualNode(root)).toBeTruthy()
  })

  it('flat-map', () => {
    const root = parseNodes('<p><em>text</em></p>')[0]

    const result = flatMap(root, node => {
      if (node.nodeName === 'EM') {
        return [
          document.createTextNode('hello')
        , document.createTextNode(' ')
        , document.createTextNode('world')
        ]
      } else {
        return [node]
      }
    })

    expect(stringifyNodes(result)).toBe('<p>hello world</p>')
  })

  describe('edges', () => {
    it('can return the same nodes', () => {
      const root = parseNodes('<p>before<em>text</em>after</p>')[0]

      const result = flatMap(root, node => [node])

      expect(stringifyNodes(result)).toBe('<p>before<em>text</em>after</p>')
    })
  })
})
