import { traverseDescendantNodes } from '@src/traverse-descendant-nodes.js'
import { parseNodes } from '@src/parse-nodes.js'
import { map, toArray } from 'iterable-operator'

describe('traverseDescendantNodes(node: Node): Iterable<ChildNode>', () => {
  it('returns Iterable<Node>', () => {
    const root = parseNodes('<p><em>text</em>text</p>')[0]

    const iter = traverseDescendantNodes(root)
    const nodeNames = toArray(map(iter, x => x.nodeName))

    expect(nodeNames).toEqual(['EM', '#text', '#text'])
  })
})
