import { toArray } from 'iterable-operator'

export function parseNodes(html: string): Node[] {
  const template = document.createElement('template')
  template.innerHTML = html
  return toArray(template.content.childNodes)
}
