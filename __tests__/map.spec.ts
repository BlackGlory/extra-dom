import { describe, test, expect } from 'vitest'
import { map } from '@src/map.js'
import { parseNodes } from '@src/parse-nodes.js'
import { stringifyNodes } from '@src/stringify-nodes.js'
import { assert } from '@blackglory/prelude'

describe('map', () => {
  test('preorder', () => {
    const root = parseNodes('<p><em>text</em></p>')[0]

    const result: string[] = []
    map(root, node => {
      result.push(node.nodeName)
      return node
    })

    expect(result).toStrictEqual(['P', 'EM', '#text'])
  })

  test('DFS', () => {
    const root = parseNodes('<p><em>deep</em>shallow</p>')[0]

    const result: string[] = []
    map(root, node => {
      if (node.nodeType === Node.TEXT_NODE) {
        assert(node.textContent)
        result.push(node.textContent)
      }
      return node
    })

    expect(result).toStrictEqual(['deep', 'shallow'])
  })

  test('clone nodes', () => {
    const root = parseNodes('<p><em>text</em></p>')[0]

    const result = map(root, node => node)

    expect(result).not.toBe(root)
    expect(result.isEqualNode(root)).toBeTruthy()
  })

  test('map', () => {
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
