import { stringifyNodes } from '@src/stringify-nodes.js'
import { createDOMParser } from '@src/create-dom-parser.js'

describe('stringifyNodes', () => {
  test('nodes in current document', () => {
    const div = document.createElement('div')
    const span = document.createElement('span')

    const result = stringifyNodes([div, span])

    expect(result).toBe('<div></div><span></span>')
  })

  test('nodes in another document', () => {
    const parser = createDOMParser()
    const document = parser.parseFromString('', 'text/html')
    const div = document.createElement('div')
    const span = document.createElement('span')

    const result = stringifyNodes([div, span])

    expect(result).toBe('<div></div><span></span>')
  })

  test('textContent', () => {
    const div = document.createElement('div')
    div.textContent = 'hello\nworld'

    const result = stringifyNodes([div])

    expect(result).toBe('<div>hello\nworld</div>')
  })

  test('attributes', () => {
    const div = document.createElement('div')
    div.setAttribute('name', 'value')

    const result = stringifyNodes([div])

    expect(result).toBe('<div name="value"></div>')
  })
})
