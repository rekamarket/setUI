import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = [
  /* Keyword values */
  'borderBox',
  'paddingBox',
  'contentBox',

  /* Global values */
  'inherit',
  'initial',
  'revert',
  'unset',
]
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, string> = {
  /* Keyword values */
  borderBox: 'border-box',
  paddingBox: 'padding-box',
  contentBox: 'content-box',

  /* Global values */
  inherit: 'inherit',
  initial: 'initial',
  revert: 'revert',
  unset: 'unset',
}

const Styles = styleVariants(map, (value) => ({
  backgroundOrigin: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  initial: Styles['paddingBox' as Type],
  default: Styles['paddingBox' as Type],
}
