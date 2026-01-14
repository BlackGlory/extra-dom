import { describe, test, expect, beforeEach } from 'vitest'
import { getAllBySelector } from '@src/get-all-by-selector.js'
import { getError } from 'return-style'

beforeEach(() => {
  document.body.innerHTML = ''
})

describe('getAllBySelector', () => {
  test('exist', () => {
    const element = document.createElement('main')
    document.body.append(element)

    const result = getAllBySelector('main')

    expect(result).toStrictEqual([element])
  })

  test('do not exist', () => {
    const err = getError(() => getAllBySelector('main'))

    expect(err).toBeInstanceOf(Error)
  })
})
