import { JSDOM } from 'jsdom'

export function createDOMParser(): DOMParser {
  const dom = new JSDOM()
  return new dom.window.DOMParser()
}
