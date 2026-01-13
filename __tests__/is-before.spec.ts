import { isBefore } from '@src/is-before.js'
import { parseNodes } from '@src/parse-nodes.js'

describe('isBefore(subject: Node, object: Node): boolean', () => {
  it('returns boolean', () => {
    const nodes = parseNodes('<p></p><em></em>')

    const result1 = isBefore(nodes[0], nodes[1])
    const result2 = isBefore(nodes[1], nodes[0])

    expect(result1).toBe(true)
    expect(result2).toBe(false)
  })
})
