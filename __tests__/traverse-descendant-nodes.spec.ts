import { traverseDescendantNodes } from '@src/traverse-descendant-nodes'
import { parse } from '@src/parse'
import { map, toArray } from 'iterable-operator'

describe('traverseDescendantNodes(node: Node): Iterable<ChildNode>', () => {
  it('returns Iterable<Node>', () => {
    const root = parse('<p><em>text</em>text</p>')[0]

    const iter = traverseDescendantNodes(root)
    const nodeNames = toArray(map(iter, x => x.nodeName))

    expect(nodeNames).toEqual(['EM', '#text', '#text'])
  })
})
