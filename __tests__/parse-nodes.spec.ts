import { describe, test, expect } from 'vitest'
import { parseNodes } from '@src/parse-nodes.js'
import { go } from '@blackglory/prelude'

describe('parseNodes', () => {
  test('flat elements', () => {
    const html = '<div></div><span></span>'

    const result = parseNodes(html)

    const div = document.createElement('div')
    const span = document.createElement('span')
    expect(result).toStrictEqual([div, span])
  })

  test('nested elements', () => {
    const html = '<div><span></span></div>'

    const result = parseNodes(html)

    const div = go(() => {
      const div = document.createElement('div')
      const span = document.createElement('span')
      div.append(span)
      return div
    })
    expect(result).toStrictEqual([div])
  })

  test('attributes', () => {
    const html = '<div name="value"></div>'

    const result = parseNodes(html)

    const div = go(() => {
      const div = document.createElement('div')
      div.setAttribute('name', 'value')
      return div
    })
    expect(result).toStrictEqual([div])
  })

  test('text', () => {
    const html = 'foo\nbar'

    const result = parseNodes(html)

    const text = document.createTextNode('foo\nbar')
    expect(result).toStrictEqual([text])
  })

  test('edge: full html', () => {
    const html = '<!DOCTYPE html><html><head></head><body></body></html>'

    const result = parseNodes(html)

    expect(result).toStrictEqual([])
  })
})
