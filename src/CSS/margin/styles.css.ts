import { styleVariants } from '@vanilla-extract/css'
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

/* Margin-Top */
const StylesMarginTop = styleVariants(map, (value) => ({
  marginTop: value,
}))

export const MarginTop: typeof StylesMarginTop & {
  default: string
} = {
  ...StylesMarginTop,
  default: StylesMarginTop['none' as Type],
}

/* Margin-Right */
const StylesMarginRight = styleVariants(map, (value) => ({
  marginRight: value,
}))

export const MarginRight: typeof StylesMarginRight & {
  default: string
} = {
  ...StylesMarginRight,
  default: StylesMarginRight['none' as Type],
}

/* Margin-Botttom */
const StylesMarginBottom = styleVariants(map, (value) => ({
  marginBottom: value,
}))

export const MarginBottom: typeof StylesMarginBottom & {
  default: string
} = {
  ...StylesMarginBottom,
  default: StylesMarginBottom['none' as Type],
}

/* Margin-Left */
const StylesMarginLeft = styleVariants(map, (value) => ({
  marginLeft: value,
}))

export const MarginLeft: typeof StylesMarginLeft & {
  default: string
} = {
  ...StylesMarginLeft,
  default: StylesMarginLeft['none' as Type],
}
