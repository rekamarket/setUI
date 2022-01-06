import type { Tag } from './types'

export const component: Record<Tag, Tag> = {
  p: 'p',
  div: 'div',
}

export const mimicryAs: <T extends Tag>(tag: T) => Tag = (tag) => component[tag]
