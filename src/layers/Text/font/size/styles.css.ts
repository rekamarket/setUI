import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = [
  'LAYOUT',
  'xxxxsmall',
  'xxxsmall',
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
  'xxxlarge',
  'xxxxlarge',

  /* <relative-size> values */
  'smaller',
  'larger',

  /* Global values */
  'inherit',
  'initial',
  'unset',
]
const VALUES = tuple.mixed(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, number | string> = {
  // we use this value in `layout` components - to force developer to wrap strings in `typography` components
  LAYOUT: 0,

  xxxxsmall: 10,
  xxxsmall: 12,
  xxsmall: 14,
  xsmall: 16,
  small: 18,
  medium: 24,
  large: 36,
  xlarge: 48,
  xxlarge: 60,
  xxxlarge: 72,
  xxxxlarge: 96,

  /* <relative-size> values */
  smaller: 'smaller',
  larger: 'larger',

  /* Global values */
  inherit: 'inherit',
  initial: 'initial',
  unset: 'unset',
}

const Styles = styleVariants(map, (value) => ({
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
