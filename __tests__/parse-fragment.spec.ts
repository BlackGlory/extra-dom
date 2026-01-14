import { describe, test, expect } from 'vitest'
import { parseFragment } from '@src/parse-fragment.js'
import { go } from '@blackglory/prelude'

describe('parseFragment', () => {
  test('flat elements', () => {
    const html = '<div></div><span></span>'

    const result = parseFragment(html)

    expect(result).toStrictEqual(go(() => {
      const fragment = new DocumentFragment()
      const div = document.createElement('div')
      const span = document.createElement('span')
      fragment.append(div, span)
      return fragment
    }))
  })

  test('nested elements', () => {
    const html = '<div><span></span></div>'

    const result = parseFragment(html)

    expect(result).toStrictEqual(go(() => {
      const fragment = new DocumentFragment()
      const div = document.createElement('div')
      const span = document.createElement('span')
      div.append(span)
      fragment.append(div)
      return fragment
    }))
  })

  test('attributes', () => {
    const html = '<div name="value"></div>'

    const result = parseFragment(html)

    expect(result).toStrictEqual(go(() => {
      const fragment = new DocumentFragment()
      const div = document.createElement('div')
      div.setAttribute('name', 'value')
      fragment.append(div)
      return fragment
    }))
  })

  test('text', () => {
    const html = 'foo\nbar'

    const result = parseFragment(html)

    expect(result).toStrictEqual(go(() => {
      const fragment = new DocumentFragment()
      fragment.append('foo\nbar')
      return fragment
    }))
  })

  test('edge: full html', () => {
    const html = '<!DOCTYPE html><html><head></head><body></body></html>'

    const result = parseFragment(html)

    expect(result).toStrictEqual(new DocumentFragment())
  })
})
