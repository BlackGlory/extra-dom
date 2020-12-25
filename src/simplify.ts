import { flatMap } from './flat-map'
import { parseNode } from './parse-node'
import { stringifyNode } from './stringify-node'

const nodeNameBlacklist = new Set<string>([
  'HTML'
, 'HEAD'
, 'BASE'
, 'LINK'
, 'META'
, 'STYLE'
, 'TITLE'
])

const nodeNameWhitelist = new Set<string>([
  '#text'
, 'BLOCKQUOTE'
, 'DD', 'DL', 'DT'
, 'FIGCAPTION', 'FIGURE'
, 'HR'
, 'LI', 'OL', 'UL'
, 'P'
, 'PRE', 'CODE', 'SMAP'
, 'BR'
, 'B', 'EM', 'I', 'MARK', 'STRONG', 'SMALL'
, 'U'
, 'VAR'
, 'WBR'
, 'KBD'
, 'RUBY', 'RT', 'RP'
, 'DEL', 'INS'
, 'A'
, 'Q'
, 'AUDIO'
, 'IMG'
, 'VIDEO'
, 'TRACK'
, 'S'
, 'SUB', 'SUP'
, 'TIME'
, 'DETAILS', 'SUMMARY'
, 'TABLE', 'THEAD', 'TBODY', 'TFOOT'
, 'TR', 'TH', 'TD'
, 'CAPTION'
, 'IFRAME', 'EMBED'
, 'OBJECT', 'PARAM'
, 'PICTURE'
, 'SOURCE'
])

const attributesWhitelist: { [name: string]: string[] } = {
  'A': ['href']
, 'Q': ['cite']
, 'IMG': ['src']
, 'VIDEO': ['src']
, 'TRACK': ['src']
, 'TIME': ['datetime']
, 'EMBED': ['src']
, 'OBJECT': ['data', 'type']
, 'PARAM': ['name', 'value']
}
// TODO: table attributes

// , { nodeName: 'AUDIO' } // 需要单独处理
// , { nodeName: 'IMG' } // 需要单独处理
// , { nodeName: 'VIDEO' } // 需要单独处理
// , { nodeName: 'TRACK' } // 与audio和video相关
// , { nodeName: 'IFRAME', attributes: ['*'] } // 过于复杂的attrs
// , { nodeName: 'PICTURE' } // picture

// 该函数的目标是从指定的HTML里生成出一篇简化后的HTML, 这份简化后的HTML应该移除所有的样式和非标准属性.
export function simplify(html: string): string {
  const nodes = parseNode(html)

  const newNodes = nodes.flatMap(process)

  return stringifyNode(...newNodes).trim()
}

function process(node: Node): Node[] {
  return flatMap(node, node => {
    if (nodeNameBlacklist.has(node.nodeName)) return []

    if (!nodeNameWhitelist.has(node.nodeName)) {
      return Array.from(node.childNodes).flatMap(process)
    }

    if (node instanceof HTMLElement) {
      removeAttributes(node, attributesWhitelist[node.nodeName] ?? [])
    }

    return [node]
  })
}

function removeAttributes(element: HTMLElement, whitelist: string[]): void {
  for (const attr of element.attributes) {
    if (!whitelist.includes(attr.name.toLowerCase())) {
      element.removeAttribute(attr.name)
    }
  }
}
