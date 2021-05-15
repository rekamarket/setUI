import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

const Sizes = [
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
const SIZES = tuple(...Sizes)
export type MarginSizeType = typeof SIZES[number]

const map: Record<MarginSizeType, number> = {
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
const StylesMarginTop = mapToStyles(map, (value) => ({
  marginTop: value,
}))

export const MarginTop: typeof StylesMarginTop & {
  default: string
} = {
  ...StylesMarginTop,
  default: StylesMarginTop['none' as MarginSizeType],
}

/* Margin-Right */
const StylesMarginRight = mapToStyles(map, (value) => ({
  marginRight: value,
}))

export const MarginRight: typeof StylesMarginRight & {
  default: string
} = {
  ...StylesMarginRight,
  default: StylesMarginRight['none' as MarginSizeType],
}

/* Margin-Botttom */
const StylesMarginBottom = mapToStyles(map, (value) => ({
  marginBottom: value,
}))

export const MarginBottom: typeof StylesMarginBottom & {
  default: string
} = {
  ...StylesMarginBottom,
  default: StylesMarginBottom['none' as MarginSizeType],
}

/* Margin-Left */
const StylesMarginLeft = mapToStyles(map, (value) => ({
  marginLeft: value,
}))

export const MarginLeft: typeof StylesMarginLeft & {
  default: string
} = {
  ...StylesMarginLeft,
  default: StylesMarginLeft['none' as MarginSizeType],
}
