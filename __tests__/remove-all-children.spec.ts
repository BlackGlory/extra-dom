import { test, expect } from 'vitest'
import { removeAllChildren } from '@src/remove-all-children.js'
import { parseNodes } from '@src/parse-nodes.js'

test('removeAllChildren', () => {
  const node = parseNodes('<div>start<span>middle<span>end</div>')[0]

  removeAllChildren(node)

  expect(node.hasChildNodes()).toBeFalsy()
})
