import { unwrap } from '@src/unwrap.js'
import { parseNodes } from '@src/parse-nodes.js'
import { stringifyNodes } from '@src/stringify-nodes.js'

describe('unwrap', () => {
  it('is preorder', () => {
    const root = parseNodes('<p><em>text</em></p>')[0]

    const result: string[] = []
    unwrap(root, node => {
      result.push(node.nodeName)
      return false
    })

    expect(result).toEqual(['P', 'EM', '#text'])
  })

  it('is DFS', () => {
    const root = parseNodes('<p><em>deep</em>shallow</p>')[0]

    const result: string[] = []
    unwrap(root, node => {
      if (node.nodeType === Node.TEXT_NODE) result.push(node.textContent!)
      return false
    })

    expect(result).toEqual(['deep', 'shallow'])
  })

  it('clone nodes', () => {
    const root = parseNodes('<p><em>text</em></p>')[0]

    const result = unwrap(root, _ => false)!

    expect(result[0]).not.toBe(root)
    expect(result[0].isEqualNode(root)).toBeTruthy()
  })

  it('unwrap', () => {
    const root = parseNodes('<div><span>text</span></div>')[0]

    const result = unwrap(root, node => node instanceof Element)

    expect(stringifyNodes(result)).toBe('text')
  })
})
