import { map } from './map'

export function replaceBrWithNewline(node: Node): Node {
  return map(node, node => {
    if (node.nodeName === 'BR') {
      return document.createTextNode('\n')
    } else {
      return node
    }
  })
}
