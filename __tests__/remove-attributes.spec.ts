import { removeAttributes } from '@src/remove-attributes.js'
import { parseNodes } from '@src/parse-nodes.js'
import { stringifyNodes } from '@src/stringify-nodes.js'

describe('removeAttributes', () => {
  it('remove attributes', () => {
    const node = parseNodes('<div id="main">content</div>')[0]

    const result = removeAttributes(node, x => x === 'id')

    expect(result).toBeUndefined()
    expect(stringifyNodes([node])).toBe('<div>content</div>')
  })
})
