import { flatMap } from '@src/flat-map'
import { parseNode } from '@src/parse-node'
import { stringifyNode } from '@src/stringify-node'

describe('flatMap', () => {
  it('is preorder', () => {
    const root = parseNode('<p><em>text</em></p>')[0]

    const result: string[] = []
    flatMap(root, node => {
      result.push(node.nodeName)
      return [node]
    })

    expect(result).toEqual(['P', 'EM', '#text'])
  })

  it('is DFS', () => {
    const root = parseNode('<p><em>deep</em>shallow</p>')[0]

    const result: string[] = []
    flatMap(root, node => {
      if (node.nodeType === Node.TEXT_NODE) result.push(node.textContent!)
      return [node]
    })

    expect(result).toEqual(['deep', 'shallow'])
  })

  it('clone nodes', () => {
    const root = parseNode('<p><em>text</em></p>')[0]

    const result = flatMap(root, node => [node])

    expect(result[0]).not.toBe(root)
    expect(result[0].isEqualNode(root)).toBeTruthy()
  })

  it('flat-map', () => {
    const root = parseNode('<p><em>text</em></p>')[0]

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

    expect(stringifyNode(result[0])).toBe('<p>hello world</p>')
  })
})
