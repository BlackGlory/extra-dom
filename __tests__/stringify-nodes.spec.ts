import { describe, test, expect } from 'vitest'
import { stringifyNodes } from '@src/stringify-nodes.js'
import { createDOMParser } from '@src/create-dom-parser.js'

describe('stringifyNodes', () => {
  test('flat elements', () => {
    const div = document.createElement('div')
    const span = document.createElement('span')

    const result = stringifyNodes([div, span])

    expect(result).toBe('<div></div><span></span>')
  })

  test('nested elements', () => {
    const div = document.createElement('div')
    const span = document.createElement('span')
    div.append(span)

    const result = stringifyNodes([div])

    expect(result).toBe('<div><span></span></div>')
  })

  test('attributes', () => {
    const div = document.createElement('div')
    div.setAttribute('name', 'value')

    const result = stringifyNodes([div])

    expect(result).toBe('<div name="value"></div>')
  })

  test('text', () => {
    const text = document.createTextNode('foo\nbar')

    const result = stringifyNodes([text])

    expect(result).toBe('foo\nbar')
  })

  test('edge: nodes in another document', () => {
    const parser = createDOMParser()
    const document = parser.parseFromString('', 'text/html')
    const div = document.createElement('div')

    const result = stringifyNodes([div])

    expect(result).toBe('<div></div>')
  })
})
