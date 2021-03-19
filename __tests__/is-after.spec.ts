import { isAfter } from '@src/is-after'
import { parse } from '@src/parse'

describe('isAfter(subject: Node, object: Node): boolean', () => {
  it('returns boolean', () => {
    const nodes = parse('<p></p><em></em>')

    const result1 = isAfter(nodes[1], nodes[0])
    const result2 = isAfter(nodes[0], nodes[1])

    expect(result1).toBe(true)
    expect(result2).toBe(false)
  })
})
