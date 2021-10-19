import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = [
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
  'xxxxlarge',

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

  xxxsmall: {
    fontSize: 14,
    lineHeight: 'calc(10px + 6px)',
  },
  xxsmall: {
    fontSize: 14,
    lineHeight: 'calc(10px + 6px)',
  },
  xsmall: {
    fontSize: 14,
    lineHeight: 'calc(10px + 6px)',
  },
  small: {
    fontSize: 14,
    lineHeight: 'calc(10px + 6px)',
  },
  medium: {
    fontSize: 17,
    lineHeight: 'calc(12px + 6px)',
  },
  large: {
    fontSize: 25,
    lineHeight: 'calc(18px + 7px)',
  },
  xlarge: {
    fontSize: 35,
    lineHeight: 'calc(25px + 7px)',
  },
  xxlarge: {
    fontSize: 48,
    lineHeight: 'calc(34px + 8px)',
  },
  xxxlarge: {
    fontSize: 60,
    lineHeight: 'calc(42px + 8px)',
  },
  xxxxlarge: {
    fontSize: 72,
    lineHeight: 'calc(52px + 8px)',
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
