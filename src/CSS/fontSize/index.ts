import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

const Sizes = [
  'LAYOUT',
  'xxxsmall',
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
  'xxxlarge',

  /* <relative-size> values */
  'smaller',
  'larger',

  /* Global values */
  'inherit',
  'initial',
  'unset',
]
const SIZES = tuple.mixed(...Sizes)
export type Type = typeof SIZES[number]

export const map: Record<Type, number | string> = {
  // we use this value in `layout` components - to force developer to wrap strings in `typography` components
  LAYOUT: 0,

  xxxsmall: 10,
  xxsmall: 12,
  xsmall: 14,
  small: 16,
  medium: 18,
  large: 20,
  xlarge: 28,
  xxlarge: 32,
  xxxlarge: 42,

  /* <relative-size> values */
  smaller: 'smaller',
  larger: 'larger',

  /* Global values */
  inherit: 'inherit',
  initial: 'initial',
  unset: 'unset',
}

const Styles = mapToStyles(map, (value) => ({
  fontSize: value,
}))

export const Style: typeof Styles & {
  default: string
  initial: string
} = {
  ...Styles,
  default: Styles['medium' as Type],
  initial: Styles['medium' as Type],
}
