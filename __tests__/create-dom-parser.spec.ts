import './polyfill'
import { createDOMParser } from '@src/create-dom-parser'

test('createDOMParser', () => {
  const parser = createDOMParser()

  expect(parser).not.toBe(undefined)
})
