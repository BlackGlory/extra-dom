export function parse(html: string): Node[] {
  const div = document.createElement('div')
  div.innerHTML = html
  return [...div.childNodes]
}
