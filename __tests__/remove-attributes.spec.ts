import { test, expect } from 'vitest'
import { removeAttributes } from '@src/remove-attributes.js'
import { parseNodes } from '@src/parse-nodes.js'
import { stringifyNodes } from '@src/stringify-nodes.js'

test('removeAttributes', () => {
  const node = parseNodes('<div foo="bar" bar="baz">text</div>')[0]

  removeAttributes(node, x => x === 'foo')

  expect(stringifyNodes([node])).toBe('<div bar="baz">text</div>')
})
