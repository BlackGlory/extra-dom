import { removeAllChildren } from '@src/remove-all-children.js'
import { parseNodes } from '@src/parse-nodes.js'

describe('removeAllChildren', () => {
  it('empty childNodes', () => {
    const node = parseNodes('<div>start<span>middle<span>end</div>')[0]

    removeAllChildren(node)

    expect(node.hasChildNodes()).toBeFalsy()
  })
})
