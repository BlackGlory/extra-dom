import { removeAttributes } from '@src/remove-attributes'
import { parse } from '@src/parse'
import { stringify } from '@src/stringify'

describe('removeAttributes', () => {
  it('remove attributes', () => {
    const node = parse('<div id="main">content</div>')[0]

    const result = removeAttributes(node, x => x === 'id')

    expect(result).toBeUndefined()
    expect(stringify([node])).toBe('<div>content</div>')
  })
})
