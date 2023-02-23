import { parse } from './parse.js'
import { stringify } from './stringify.js'

export function normalize(html: string): string {
  return stringify(parse(html))
}
