import { getAllBySelector } from '@src/get-all-by-selector.js'
import { getError } from 'return-style'

beforeEach(() => {
  document.body.innerHTML = ''
})

describe('getAllBySelector', () => {
  describe('the elements exist', () => {
    it('return the element', () => {
      const element = document.createElement('main')
      document.body.append(element)

      const result = getAllBySelector('main')

      expect(result).toStrictEqual([element])
    })
  })

  describe('the elements do not exist', () => {
    it('throw Error', () => {
      const err = getError(() => getAllBySelector('main'))

      expect(err).toBeInstanceOf(Error)
    })
  })
})
