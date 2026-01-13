import { parseNodes } from '@src/parse-nodes.js'

describe('parseNodes(html: string): Node[]', () => {
  it('return Node[]', () => {
    const result = parseNodes('<div></div><span></span>')

    expect(result[0]).toBeInstanceOf(HTMLDivElement)
    expect(result[1]).toBeInstanceOf(HTMLSpanElement)
  })
})
