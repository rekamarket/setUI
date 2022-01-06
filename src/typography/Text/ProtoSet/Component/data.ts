import type { Props, Tag } from './types'

export const component: Record<Tag, Tag> = {
  span: 'span',
  strong: 'strong',
  em: 'em',
  i: 'i',
  b: 'b',
  dfn: 'dfn',
  abbr: 'abbr',
  sup: 'sup',
  sub: 'sub',
  mark: 'mark',
  cite: 'cite',
  u: 'u',
  s: 's',
  small: 'small',
}

export const mimicryAs: <T extends Tag>(tag: T) => Tag = (tag) => component[tag]
