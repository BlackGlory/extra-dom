import { stringifyFragment } from '@src/stringify-fragment.js'

test('stringifyFragment', () => {
  const fragment = new DocumentFragment()
  const div = document.createElement('div')
  const span = document.createElement('span')
  fragment.append(div, span)

  const result = stringifyFragment(fragment)

  expect(result).toBe('<div></div><span></span>')
})
