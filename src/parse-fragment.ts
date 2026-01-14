export function parseFragment(htmlFragment: string): DocumentFragment {
  const template = document.createElement('template')
  template.innerHTML = htmlFragment
  return template.content
}
