import { describe, test, expect } from 'vitest'
import { find } from '@src/find.js'
import { parseNodes } from '@src/parse-nodes.js'

describe('find', () => {
  describe('found', () => {
    test('general', () => {
      const root = parseNodes('<p><em></em><em></em></p>')[0]

      const result = find(root, node => node.nodeName === 'EM')

      expect(result).toBe(root.childNodes[0])
    })

    test('edge: root', () => {
      const root = parseNodes('<div><div></div></div>')[0]

      const result = find(root, node => node.nodeName === 'DIV')

      expect(result).toBe(root)
    })
  })

  test('not found', () => {
    const root = parseNodes('<p><em></em></p>')[0]

    const result = find(root, node => node.nodeName === 'SPAN')

    expect(result).toBeUndefined()
  })
})
