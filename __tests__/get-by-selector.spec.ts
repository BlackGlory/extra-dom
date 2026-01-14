import { describe, test, expect, beforeEach } from 'vitest'
import { getBySelector } from '@src/get-by-selector.js'
import { getError } from 'return-style'

beforeEach(() => {
  document.body.innerHTML = ''
})

describe('getBySelector', () => {
  test('exists', () => {
    const element = document.createElement('main')
    document.body.append(element)

    const result = getBySelector('main')

    expect(result).toBe(element)
  })

  test('does not exist', () => {
    const err = getError(() => getBySelector('main'))

    expect(err).toBeInstanceOf(Error)
  })
})
