import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['rect', 'square']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

type Properties =
  | 'height'
  | 'minHeight'
  | 'maxHeight'
  | 'width'
  | 'minWidth'
  | 'maxWidth'

export const map: Record<Type, Record<Properties, string>> = {
  rect: {
    height: 'var(--size)',
    minHeight: 'initial',
    maxHeight: 'initial',
    width: 'initial',
    minWidth: 'initial',
    maxWidth: 'initial',
  },
  square: {
    height: 'var(--size)',
    minHeight: 'var(--size)',
    maxHeight: 'var(--size)',
    width: 'var(--size)',
    minWidth: 'var(--size)',
    maxWidth: 'var(--size)',
  },
}

const Styles = styleVariants(map, (value) => value)

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['rect' as Type],
}
