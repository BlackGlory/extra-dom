import { traverseAncestorNodes } from '@src/traverse-ancestor-nodes'
import '@blackglory/jest-matchers'
import { parse } from '@src/parse'
import { map, toArray } from 'iterable-operator'

describe('traverseAncestorNodes(node: Node): Iterable<Node & ParentNode>', () => {
  it('returns Iterable<Node>', () => {
    const root = parse('<p><em>text</em>text</p>')[0]
    const node = (root as Element).querySelector('em')!.childNodes[0]

    const result = traverseAncestorNodes(node)
    const nodeNames = toArray(map(result, x => x.nodeName))

    expect(result).toBeIterable()
    expect(nodeNames).toEqual(['EM', 'P', 'DIV']) // DIV from parse()
  })
})
