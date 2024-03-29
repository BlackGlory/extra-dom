import { removeAllChildren } from '@src/remove-all-children.js'
import { parse } from '@src/parse.js'

describe('removeAllChildren', () => {
  it('empty childNodes', () => {
    const node = parse('<div>start<span>middle<span>end</div>')[0]

    removeAllChildren(node)

    expect(node.hasChildNodes()).toBeFalsy()
  })
})
