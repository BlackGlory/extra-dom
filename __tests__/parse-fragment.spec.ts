import { parseFragment } from '@src/parse-fragment.js'

test('parseFragment', () => {
  const html = '<div></div><span></span>'

  const result = parseFragment(html)

  const fragment = new DocumentFragment()
  const div = document.createElement('div')
  const span = document.createElement('span')
  fragment.append(div, span)
  expect(result).toStrictEqual(fragment)
})
