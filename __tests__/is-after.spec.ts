import { isAfter } from '@src/is-after.js'
import { parseNodes } from '@src/parse-nodes.js'

describe('isAfter(subject: Node, object: Node): boolean', () => {
  it('returns boolean', () => {
    const nodes = parseNodes('<p></p><em></em>')

    const result1 = isAfter(nodes[1], nodes[0])
    const result2 = isAfter(nodes[0], nodes[1])

    expect(result1).toBe(true)
    expect(result2).toBe(false)
  })
})
