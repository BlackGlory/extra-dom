import { parseNodes } from '@src/parse-nodes.js'

test('parseNodes', () => {
  const html = '<div></div><span></span>'

  const result = parseNodes(html)

  expect(result[0]).toBeInstanceOf(HTMLDivElement)
  expect(result[1]).toBeInstanceOf(HTMLSpanElement)
})
