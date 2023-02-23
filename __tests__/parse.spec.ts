import { parse } from '@src/parse.js'

describe('parse(html: string): Node[]', () => {
  it('return Node[]', () => {
    const result = parse('<div></div><span></span>')

    expect(result[0]).toBeInstanceOf(HTMLDivElement)
    expect(result[1]).toBeInstanceOf(HTMLSpanElement)
  })
})
