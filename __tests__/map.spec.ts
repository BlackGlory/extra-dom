import { map } from '@src/map.js'
import { parse } from '@src/parse.js'
import { stringify } from '@src/stringify.js'

describe('map', () => {
  it('is preorder', () => {
    const root = parse('<p><em>text</em></p>')[0]

    const result: string[] = []
    map(root, node => {
      result.push(node.nodeName)
      return node
    })

    expect(result).toEqual(['P', 'EM', '#text'])
  })

  it('is DFS', () => {
    const root = parse('<p><em>deep</em>shallow</p>')[0]

    const result: string[] = []
    map(root, node => {
      if (node.nodeType === Node.TEXT_NODE) result.push(node.textContent!)
      return node
    })

    expect(result).toEqual(['deep', 'shallow'])
  })

  it('clone nodes', () => {
    const root = parse('<p><em>text</em></p>')[0]

    const result = map(root, node => node)

    expect(result).not.toBe(root)
    expect(result.isEqualNode(root)).toBeTruthy()
  })

  it('map', () => {
    const root = parse('<p><em>text</em></p>')[0]

    const result = map(root, node => {
      if (node.nodeName === 'EM') {
        return node.childNodes[0]
      } else {
        return node
      }
    })

    expect(stringify([result])).toBe('<p>text</p>')
  })
})
