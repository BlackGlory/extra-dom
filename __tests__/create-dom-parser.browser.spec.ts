import { createDOMParser } from '@src/create-dom-parser.browser.js'

test('createDOMParser', () => {
  const parser = createDOMParser()

  expect(parser).not.toBe(undefined)
})
