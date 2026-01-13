export function parse(html: string): Node[] {
  const template = document.createElement('template')
  template.innerHTML = html
  return [...template.content.childNodes]
}
