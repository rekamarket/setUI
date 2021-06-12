import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = [
  /* Keyword values */
  'solid',
  'double',
  'dotted',
  'dashed',
  'wavy',

  /* Global values */
  'inherit',
  'initial',
  'unset',
]
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, any> = {
  /* Keyword values */
  solid: 'solid',
  double: 'double',
  dotted: 'dotted',
  dashed: 'dashed',
  wavy: 'wavy',

  /* Global values */
  inherit: 'inherit',
  initial: 'initial',
  unset: 'unset',
}

const Styles = mapToStyles(map, (value: any) => ({
  textDecorationStyle: value,
}))

export const Style: typeof Styles & {
  default: string
  initial: string
} = {
  ...Styles,
  default: Styles['unset' as Type],
  initial: Styles['solid' as Type],
}
