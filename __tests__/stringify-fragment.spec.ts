import { describe, test, expect } from 'vitest'
import { stringifyFragment } from '@src/stringify-fragment.js'
import { go } from '@blackglory/prelude'

describe('stringifyFragment', () => {
  test('flat elements', () => {
    const fragment = go(() => {
      const fragment = new DocumentFragment()
      const div = document.createElement('div')
      const span = document.createElement('span')
      fragment.append(div, span)
      return fragment
    })

    const result = stringifyFragment(fragment)

    expect(result).toBe('<div></div><span></span>')
  })

  test('nested elements', () => {
    const fragment = go(() => {
      const fragment = new DocumentFragment()
      const div = document.createElement('div')
      const span = document.createElement('span')
      div.append(span)
      fragment.append(div)
      return fragment
    })

    const result = stringifyFragment(fragment)

    expect(result).toBe('<div><span></span></div>')
  })

  test('attributes', () => {
    const fragment = go(() => {
      const fragment = new DocumentFragment()
      const div = document.createElement('div')
      div.setAttribute('name', 'value')
      fragment.append(div)
      return fragment
    })

    const result = stringifyFragment(fragment)

    expect(result).toBe('<div name="value"></div>')
  })

  test('text', () => {
    const fragment = go(() => {
      const fragment = new DocumentFragment()
      fragment.append('foo\nbar')
      return fragment
    })

    const result = stringifyFragment(fragment)

    expect(result).toBe('foo\nbar')
  })
})
