import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = [
  'none',
  'xxxsmall',
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
  'xxxlarge',
]
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, number> = {
  none: 0,
  xxxsmall: 2,
  xxsmall: 4,
  xsmall: 6,
  small: 8,
  medium: 12,
  large: 16,
  xlarge: 20,
  xxlarge: 24,
  xxxlarge: 48,
}

/* Padding-Top */
const StylesPaddingTop = mapToStyles(map, (value) => ({
  paddingTop: value,
}))

export const PaddingTop: typeof StylesPaddingTop & {
  default: string
} = {
  ...StylesPaddingTop,
  default: StylesPaddingTop['none' as Type],
}

/* Padding-Right */
const StylesPaddingRight = mapToStyles(map, (value) => ({
  paddingRight: value,
}))

export const PaddingRight: typeof StylesPaddingRight & {
  default: string
} = {
  ...StylesPaddingRight,
  default: StylesPaddingRight['none' as Type],
}

/* Padding-Botttom */
const StylesPaddingBottom = mapToStyles(map, (value) => ({
  paddingBottom: value,
}))

export const PaddingBottom: typeof StylesPaddingBottom & {
  default: string
} = {
  ...StylesPaddingBottom,
  default: StylesPaddingBottom['none' as Type],
}

/* Padding-Left */
const StylesPaddingLeft = mapToStyles(map, (value) => ({
  paddingLeft: value,
}))

export const PaddingLeft: typeof StylesPaddingLeft & {
  default: string
} = {
  ...StylesPaddingLeft,
  default: StylesPaddingLeft['none' as Type],
}
