import { describe, test, expect } from 'vitest'
import { filter } from '@src/filter.js'
import { parseNodes } from '@src/parse-nodes.js'
import { stringifyNodes } from '@src/stringify-nodes.js'
import { assert } from '@blackglory/prelude'

describe('filter', () => {
  test('preorder', () => {
    const root = parseNodes('<p><em>text</em></p>')[0]

    const result: string[] = []
    filter(root, node => {
      result.push(node.nodeName)
      return true
    })

    expect(result).toStrictEqual(['P', 'EM', '#text'])
  })

  test('DFS', () => {
    const root = parseNodes('<p><em>deep</em>shallow</p>')[0]

    const result: string[] = []
    filter(root, node => {
      if (node.nodeType === Node.TEXT_NODE) {
        assert(node.textContent)
        result.push(node.textContent)
      }
      return true
    })

    expect(result).toStrictEqual(['deep', 'shallow'])
  })

  test('clone nodes', () => {
    const root = parseNodes('<p><em>text</em></p>')[0]

    const result = filter(root, _ => true)

    assert(result)
    expect(result).not.toBe(root)
    expect(result.isEqualNode(root)).toBeTruthy()
  })

  test('reject children', () => {
    const root = parseNodes('<p><em></em></p>')[0]

    const result = filter(root, node => node.nodeName !== 'EM')

    assert(result)
    expect(stringifyNodes([result])).toBe('<p></p>')
  })

  test('reject root', () => {
    const root = parseNodes('<p><em></em></p>')[0]

    const result = filter(root, node => node.nodeName !== 'P')

    expect(result).toBeUndefined()
  })
})
