import { getBySelector } from '@src/get-by-selector.js'
import { getError } from 'return-style'

beforeEach(() => {
  document.body.innerHTML = ''
})

describe('getBySelector', () => {
  describe('the element exists', () => {
    it('return the element', () => {
      const element = document.createElement('main')
      document.body.append(element)

      const result = getBySelector('main')

      expect(result).toBe(element)
    })
  })

  describe('the element does not exist', () => {
    it('throws Error', () => {
      const err = getError(() => getBySelector('main'))

      expect(err).toBeInstanceOf(Error)
    })
  })
})
