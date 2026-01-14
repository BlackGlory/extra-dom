import { test, expect } from 'vitest'
import { createDOMParser } from '@src/create-dom-parser.js'

test('createDOMParser', () => {
  const parser = createDOMParser()

  expect(parser).not.toBe(undefined)
})
