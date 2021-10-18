import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = [
  'LAYOUT',
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',

  /* <relative-size> values */
  'smaller',
  'larger',

  /* Global values */
  // 'inherit',
  // 'initial',
  // 'unset',
]
const VALUES = tuple.mixed(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, Record<string, number | string>> = {
  // we use this value in `layout` components - to force developer to wrap strings in `typography` components
  LAYOUT: {
    fontSize: 0,
    lineHeight: 0,
  },

  xxsmall: {
    fontSize: 14,
    lineHeight: '10px',
  },
  xsmall: {
    fontSize: 17,
    lineHeight: '12px',
  },
  small: {
    fontSize: 25,
    lineHeight: '18px',
  },
  medium: {
    fontSize: 35,
    lineHeight: '25px',
  },
  large: {
    fontSize: 48,
    lineHeight: '34px',
  },
  xlarge: {
    fontSize: 60,
    lineHeight: '42px',
  },
  xxlarge: {
    fontSize: 72,
    lineHeight: '50px',
  },

  /* <relative-size> values */
  smaller: {
    fontSize: 'smaller',
  },
  larger: {
    fontSize: 'larger',
  },
}

const Styles = styleVariants(map, (value) => value)

export const Style: typeof Styles & {
  default: string
  initial: string
} = {
  ...Styles,
  default: Styles['medium' as Type],
  initial: Styles['medium' as Type],
}
