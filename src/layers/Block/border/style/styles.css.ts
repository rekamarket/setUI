import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = [
  /* Keyword values */
  'none',
  'hidden',
  'dotted',
  'dashed',
  'solid',
  'double',
  'groove',
  'ridge',
  'inset',
  'outset',

  /* Global values */
  'inherit',
  'initial',
  'revert',
  'unset',
]
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, any> = {
  /* Keyword values */
  none: 'none',
  hidden: 'hidden',
  dotted: 'dotted',
  dashed: 'dashed',
  solid: 'solid',
  double: 'double',
  groove: 'groove',
  ridge: 'ridge',
  inset: 'inset',
  outset: 'outset',

  /* Global values */
  inherit: 'inherit',
  initial: 'initial',
  revert: 'revert',
  unset: 'unset',
}

const Styles = styleVariants(map, (value: any) => ({
  borderStyle: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['none' as Type],
}
