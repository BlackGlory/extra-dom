import { describe, test, expect } from 'vitest'
import { flatMap } from '@src/flat-map.js'
import { parseNodes } from '@src/parse-nodes.js'
import { stringifyNodes } from '@src/stringify-nodes.js'
import { assert } from '@blackglory/prelude'

describe('flatMap', () => {
  test('preorder', () => {
    const root = parseNodes('<p><em>text</em></p>')[0]

    const result: string[] = []
    flatMap(root, node => {
      result.push(node.nodeName)
      return [node]
    })

    expect(result).toStrictEqual(['P', 'EM', '#text'])
  })

  test('DFS', () => {
    const root = parseNodes('<p><em>deep</em>shallow</p>')[0]

    const result: string[] = []
    flatMap(root, node => {
      if (node.nodeType === Node.TEXT_NODE) {
        assert(node.textContent)
        result.push(node.textContent)
      }
      return [node]
    })

    expect(result).toStrictEqual(['deep', 'shallow'])
  })

  test('clone nodes', () => {
    const root = parseNodes('<p><em>text</em></p>')[0]

    const result = flatMap(root, node => [node])

    expect(result[0]).not.toBe(root)
    expect(result[0].isEqualNode(root)).toBeTruthy()
  })

  test('flat-map', () => {
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

  test('edges', () => {
    const root = parseNodes('<p>before<em>text</em>after</p>')[0]

    const result = flatMap(root, node => [node])

    expect(stringifyNodes(result)).toBe('<p>before<em>text</em>after</p>')
  })
})
