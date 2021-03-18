import { replaceBrWithNewline } from '@src/replace-br-with-newline'
import { parse } from '@src/parse'
import { stringify } from '@src/stringify'

describe('replaceBrWithNewline(node: Node): Node', () => {
  it('return new Node', () => {
    const root = parse('<div>line1<br>line2</div>')[0]

    const result = replaceBrWithNewline(root)

    expect(stringify([result])).toBe('<div>line1\nline2</div>')
  })
})
