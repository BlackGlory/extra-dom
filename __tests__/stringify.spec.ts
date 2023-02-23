import { stringify } from '@src/stringify.js'
import { createDOMParser } from '@src/create-dom-parser.js'

describe('stringify', () => {
  test('nodes in current document', () => {
    const div = document.createElement('div')
    const span = document.createElement('span')

    const result = stringify([div, span])

    expect(result).toBe('<div></div><span></span>')
  })

  test('nodes in another document', () => {
    const parser = createDOMParser()
    const document = parser.parseFromString('', 'text/html')
    const div = document.createElement('div')
    const span = document.createElement('span')

    const result = stringify([div, span])

    expect(result).toBe('<div></div><span></span>')
  })

  test('textContent', () => {
    const div = document.createElement('div')
    div.textContent = 'hello\nworld'

    const result = stringify([div])

    expect(result).toBe('<div>hello\nworld</div>')
  })

  test('attributes', () => {
    const div = document.createElement('div')
    div.setAttribute('name', 'value')

    const result = stringify([div])

    expect(result).toBe('<div name="value"></div>')
  })
})
