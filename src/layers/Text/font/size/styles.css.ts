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
    // fontSize: 14,
    fontSize: `clamp(${14 / 16 / 2}rem, ${14 / 16 / 2}rem + 2vmin, ${14 / 16 / 2}rem + 4vmin)`,
    lineHeight: `calc(${14 / 16 / 2}rem + 6px)`,
  },
  xxsmall: {
    // fontSize: 14,
    fontSize: `clamp(${14 / 16 / 2}rem, ${14 / 16 / 2}rem + 2vmin, ${14 / 16 / 2}rem + 4vmin)`,
    lineHeight: `calc(${14 / 16 / 2}rem + 6px)`,
  },
  xsmall: {
    // fontSize: 14,
    fontSize: `clamp(${14 / 16 / 2}rem, ${14 / 16 / 2}rem + 2vmin, ${14 / 16 / 2}rem + 4vmin)`,
    lineHeight: `calc(${14 / 16 / 2}rem + 6px)`,
  },
  small: {
    // fontSize: 14,
    fontSize: `clamp(${14 / 16 / 2}rem, ${14 / 16 / 2}rem + 2vmin, ${14 / 16 / 2}rem + 4vmin)`,
    lineHeight: `calc(${14 / 16 / 2}rem + 6px)`,
  },
  medium: {
    // fontSize: 17,
    fontSize: `clamp(${17 / 16 / 2}rem, ${17 / 16 / 2}rem + 2vmin, ${17 / 16 / 2}rem + 4vmin)`,
    lineHeight: `calc(${17 / 16 / 2}rem + 6px)`,
  },
  large: {
    // fontSize: 25,
    fontSize: `clamp(${25 / 16 / 2}rem, ${25 / 16 / 2}rem + 2vmin, ${25 / 16 / 2}rem + 4vmin)`,
    lineHeight: `calc(${25 / 16 / 2}rem + 7px)`,
  },
  xlarge: {
    // fontSize: 35,
    fontSize: `clamp(${35 / 16 / 2}rem, ${35 / 16 / 2}rem + 2vmin, ${35 / 16 / 2}rem + 4vmin)`,
    lineHeight: `calc(${35 / 16 / 2}rem + 7px)`,
  },
  xxlarge: {
    // fontSize: 48,
    fontSize: `clamp(${48 / 16 / 2}rem, ${48 / 16 / 2}rem + 2vmin, ${48 / 16 / 2}rem + 4vmin)`,
    lineHeight: `calc(${48 / 16 / 2}rem + 8px)`,
  },
  xxxlarge: {
    // fontSize: 60,
    fontSize: `clamp(${60 / 16 / 2}rem, ${60 / 16 / 2}rem + 2vmin, ${60 / 16 / 2}rem + 4vmin)`,
    lineHeight: `calc(${60 / 16 / 2}rem + 8px)`,
  },
  xxxxlarge: {
    // fontSize: 72,
    fontSize: `clamp(${72 / 16 / 2}rem, ${72 / 16 / 2}rem + 2vmin, ${72 / 16 / 2}rem + 4vmin)`,
    lineHeight: `calc(${72 / 16 / 2}rem + 8px)`,
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
