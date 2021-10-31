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
    // fontSize: 8,
    fontSize: `clamp(${8 / 16}rem, calc(${
      8 / 16
    }rem + ((1vw - 0.48rem) * 0.3472)), ${(8 / 16) * 1.5}rem)`,
    // lineHeight: `calc(${14 / 16 / 2}rem + 6px)`,
    lineHeight: 1,
  },
  xxsmall: {
    // fontSize: 10,
    fontSize: `clamp(${10 / 16}rem, calc(${
      10 / 16
    }rem + ((1vw - 0.48rem) * 0.434)), ${(10 / 16) * 1.5}rem)`,
    // lineHeight: `calc(${14 / 16 / 2}rem + 6px)`,
    lineHeight: 1,
  },
  xsmall: {
    // fontSize: 12,
    fontSize: `clamp(${12 / 16}rem, calc(${
      12 / 16
    }rem + ((1vw - 0.48rem) * 0.5208)), ${(12 / 16) * 1.5}rem)`,
    // lineHeight: `calc(${14 / 16 / 2}rem + 6px)`,
    lineHeight: 1.2,
  },
  small: {
    // fontSize: 14,
    fontSize: `clamp(${14 / 16}rem, calc(${
      14 / 16
    }rem + ((1vw - 0.48rem) * 0.6076)), ${(14 / 16) * 1.5}rem)`,
    // lineHeight: `calc(${14 / 16 / 2}rem + 6px)`,
    lineHeight: 1.2,
  },
  medium: {
    // fontSize: 17,
    fontSize: `clamp(${16 / 16}rem, calc(${
      16 / 16
    }rem + ((1vw - 0.48rem) * 0.6944)), ${(16 / 16) * 1.5}rem)`,
    // lineHeight: `calc(${17 / 16 / 2}rem + 6px)`,
    lineHeight: 1.2,
  },
  large: {
    // fontSize: 25,
    fontSize: `clamp(${24 / 16}rem, calc(${
      24 / 16
    }rem + ((1vw - 0.48rem) * 1.0417)), ${(24 / 16) * 1.5}rem)`,
    // lineHeight: `calc(${25 / 16 / 2}rem + 7px)`,
    lineHeight: 1.2,
  },
  xlarge: {
    // fontSize: 35,
    fontSize: `clamp(${36 / 16}rem, calc(${
      36 / 16
    }rem + ((1vw - 0.48rem) * 1.5625)), ${(36 / 16) * 1.5}rem)`,
    // lineHeight: `calc(${35 / 16 / 2}rem + 7px)`,
    lineHeight: 1,
  },
  xxlarge: {
    // fontSize: 48,
    fontSize: `clamp(${48 / 16}rem, calc(${
      48 / 16
    }rem + ((1vw - 0.48rem) * 1.5625)), ${(48 / 16) * 1.5}rem)`,
    // lineHeight: `calc(${48 / 16 / 2}rem + 8px)`,
    lineHeight: 1,
  },
  xxxlarge: {
    // fontSize: 60,
    fontSize: `clamp(${60 / 16}rem, calc(${
      60 / 16
    }rem + ((1vw - 0.48rem) * 2.6042)), ${(60 / 16) * 1.5}rem)`,
    // lineHeight: `calc(${60 / 16 / 2}rem + 8px)`,
    lineHeight: 1,
  },
  xxxxlarge: {
    // fontSize: 72,
    fontSize: `clamp(${72 / 16}rem, calc(${
      72 / 16
    }rem + ((1vw - 0.48rem) * 3.125)), ${(72 / 16) * 1.5}rem)`,
    // lineHeight: `calc(${72 / 16 / 2}rem + 8px)`,
    lineHeight: 1,
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
