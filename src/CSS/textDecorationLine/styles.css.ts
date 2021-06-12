import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = [
  /* Single keyword */
  'none',
  'underline',
  'overline',
  'lineThrough',
  'blink',

  /* Multiple keywords */
  'overline_lineThrough',
  'overline_underline',
  'lineThrough_underline',
  'overline_lineThrough_underline',

  /* Global values */
  'inherit',
  'initial',
  'unset',
]
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, any> = {
  /* Single keyword */
  none: 'none',
  underline: 'underline',
  overline: 'overline',
  lineThrough: 'line-through',
  blink: 'blink',

  /* Multiple keywords */
  overline_lineThrough: 'overline line-through',
  overline_underline: 'overline underline',
  lineThrough_underline: 'line-through underline',
  overline_lineThrough_underline: 'overline line-through underline',

  /* Global values */
  inherit: 'inherit',
  initial: 'initial',
  unset: 'unset',
}

const Styles = mapToStyles(map, (value: any) => ({
  textDecorationLine: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['unset' as Type],
}
