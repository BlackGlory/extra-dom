import { parse } from './parse'
import { stringify } from './stringify'

export function normalize(html: string): string {
  return stringify(parse(html))
}
