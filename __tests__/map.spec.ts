import { map } from '@src/map.js'
import { parseNodes } from '@src/parse-nodes.js'
import { stringifyNodes } from '@src/stringify-nodes.js'

describe('map', () => {
  it('is preorder', () => {
    const root = parseNodes('<p><em>text</em></p>')[0]

    const result: string[] = []
    map(root, node => {
      result.push(node.nodeName)
      return node
    })

    expect(result).toEqual(['P', 'EM', '#text'])
  })

  it('is DFS', () => {
    const root = parseNodes('<p><em>deep</em>shallow</p>')[0]

    const result: string[] = []
    map(root, node => {
      if (node.nodeType === Node.TEXT_NODE) result.push(node.textContent!)
      return node
    })

    expect(result).toEqual(['deep', 'shallow'])
  })

  it('clone nodes', () => {
    const root = parseNodes('<p><em>text</em></p>')[0]

    const result = map(root, node => node)

    expect(result).not.toBe(root)
    expect(result.isEqualNode(root)).toBeTruthy()
  })

  it('map', () => {
    const root = parseNodes('<p><em>text</em></p>')[0]

    const result = map(root, node => {
      if (node.nodeName === 'EM') {
        return node.childNodes[0]
      } else {
        return node
      }
    })

    expect(stringifyNodes([result])).toBe('<p>text</p>')
  })
})
