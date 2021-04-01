import { stringify } from '@src/stringify'

describe('stringify(nodes: Node[]): string', () => {
  it('return string', () => {
    const div = document.createElement('div')
    const span = document.createElement('span')

    const result = stringify([div, span])

    expect(result).toBe('<div></div><span></span>')
  })
})
