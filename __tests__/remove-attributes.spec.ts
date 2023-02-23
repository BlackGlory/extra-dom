import { removeAttributes } from '@src/remove-attributes.js'
import { parse } from '@src/parse.js'
import { stringify } from '@src/stringify.js'

describe('removeAttributes', () => {
  it('remove attributes', () => {
    const node = parse('<div id="main">content</div>')[0]

    const result = removeAttributes(node, x => x === 'id')

    expect(result).toBeUndefined()
    expect(stringify([node])).toBe('<div>content</div>')
  })
})
