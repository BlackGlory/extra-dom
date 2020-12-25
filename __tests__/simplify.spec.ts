import { simplify } from '@src/simplify'

describe('simplify', () => {
  it('remove data attrs', () => {
    const html = '<p data-name="value">text</p>'

    const result = simplify(html)

    expect(result).toBe('<p>text</p>')
  })

  it('remove meaningless wrappers', () => {
    const html = '<div>text</div>'

    const result = simplify(html)

    expect(result).toBe('text')
  })

  it('keep attrs in whitelist', () => {
    const html = '<a href="https://example.com" target="_blank">text</a>'

    const result = simplify(html)

    expect(result).toBe('<a href="https://example.com">text</a>')
  })

  it('format the codes', () => {
    const html = '<a href=https://example.com>text</a>'

    const result = simplify(html)

    expect(result).toBe('<a href="https://example.com">text</a>')
  })
})
