import { describe, test, expect } from 'vitest'
import { unwrap } from '@src/unwrap.js'
import { parseNodes } from '@src/parse-nodes.js'
import { stringifyNodes } from '@src/stringify-nodes.js'
import { assert } from '@blackglory/prelude'

describe('unwrap', () => {
  test('preorder', () => {
    const root = parseNodes('<p><em>text</em></p>')[0]

    const result: string[] = []
    unwrap(root, node => {
      result.push(node.nodeName)
      return false
    })

    expect(result).toStrictEqual(['P', 'EM', '#text'])
  })

  test('DFS', () => {
    const root = parseNodes('<p><em>deep</em>shallow</p>')[0]

    const result: string[] = []
    unwrap(root, node => {
      if (node.nodeType === Node.TEXT_NODE) {
        assert(node.textContent)
        result.push(node.textContent)
      }
      return false
    })

    expect(result).toStrictEqual(['deep', 'shallow'])
  })

  test('clone nodes', () => {
    const root = parseNodes('<p><em>text</em></p>')[0]

    const result = unwrap(root, _ => false)

    expect(result[0]).not.toBe(root)
    expect(result[0].isEqualNode(root)).toBeTruthy()
  })

  test('unwrap', () => {
    const root = parseNodes('<div><span>text</span></div>')[0]

    const result = unwrap(root, node => node instanceof Element)

    expect(stringifyNodes(result)).toBe('text')
  })
})
