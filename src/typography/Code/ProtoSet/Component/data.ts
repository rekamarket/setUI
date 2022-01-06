import type { Tag } from './types'

export const component: Record<Tag, Tag> = {
  var: 'var',
  samp: 'samp',
  kbd: 'kbd',
  code: 'code',
}

export const mimicryAs: <T extends Tag>(tag: T) => Tag = (tag) => component[tag]
