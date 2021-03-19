import { traverseDescendantNodes } from '@src/traverse-descendant-nodes'
import '@blackglory/jest-matchers'
import { parse } from '@src/parse'
import { map, toArray } from 'iterable-operator'

describe('traverseDescendantNodes(node: Node): Iterable<Node>', () => {
  it('returns Iterable<Node>', () => {
    const root = parse('<p><em>text</em>text</p>')[0]

    const result = traverseDescendantNodes(root)
    const nodeNames = toArray(map(result, x => x.nodeName))

    expect(result).toBeIterable()
    expect(nodeNames).toEqual(['EM', '#text', '#text'])
  })
})
