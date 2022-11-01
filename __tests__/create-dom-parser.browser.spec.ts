import { createDOMParser } from '@src/create-dom-parser.browser'

test('createDOMParser', () => {
  const parser = createDOMParser()

  expect(parser).not.toBe(undefined)
})
