import { removeAllChildren } from '@src/remove-all-children'
import { parseNode } from '@src/parse-node'

describe('removeAllChildren', () => {
  it('empty childNodes', () => {
    const node = parseNode('<div>start<span>middle<span>end</div>')[0]

    removeAllChildren(node)

    expect(node.hasChildNodes()).toBeFalsy()
  })
})
