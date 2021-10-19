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
    lineHeight: '10px',
  },
  xxsmall: {
    fontSize: 14,
    lineHeight: '10px',
  },
  xsmall: {
    fontSize: 14,
    lineHeight: '10px',
  },
  small: {
    fontSize: 14,
    lineHeight: '10px',
  },
  medium: {
    fontSize: 17,
    lineHeight: 'calc(12px + 4px)',
  },
  large: {
    fontSize: 25,
    lineHeight: '18px',
  },
  xlarge: {
    fontSize: 35,
    lineHeight: '25px',
  },
  xxlarge: {
    fontSize: 48,
    lineHeight: '34px',
  },
  xxxlarge: {
    fontSize: 60,
    lineHeight: '42px',
  },
  xxxxlarge: {
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
