import { traverseAncestorNodes } from '@src/traverse-ancestor-nodes.js'
import { parseNodes } from '@src/parse-nodes.js'
import { map, toArray } from 'iterable-operator'

describe('traverseAncestorNodes(node: Node): Iterable<Node & ParentNode>', () => {
  it('returns Iterable<Node>', () => {
    const root = parseNodes('<p><em>text</em>text</p>')[0]
    const node = (root as Element).querySelector('em')!.childNodes[0]

    const iter = traverseAncestorNodes(node)
    const nodeNames = toArray(map(iter, x => x.nodeName))

    expect(nodeNames).toEqual(['EM', 'P', '#document-fragment']) // fragment from parse()
  })
})
