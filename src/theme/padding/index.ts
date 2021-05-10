import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from '../_utils'

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
export type PaddingSizeType = typeof SIZES[number]

const map: Record<PaddingSizeType, number> = {
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

/* todo: Get custom value
export const PaddingCustom = (size: PaddingSizeType) => mapToStyles(paddingSizes, (size) => ({
  paddingTop: size,
}));
*/

/* Padding-Top */
const StylesPaddingTop = mapToStyles(map, (value) => ({
  paddingTop: value,
}))

export const PaddingTop: typeof StylesPaddingTop & {
  default: string
} = {
  ...StylesPaddingTop,
  default: StylesPaddingTop['none' as PaddingSizeType],
}

/* Padding-Right */
const StylesPaddingRight = mapToStyles(map, (value) => ({
  paddingRight: value,
}))

export const PaddingRight: typeof StylesPaddingRight & {
  default: string
} = {
  ...StylesPaddingRight,
  default: StylesPaddingRight['none' as PaddingSizeType],
}

/* Padding-Botttom */
const StylesPaddingBottom = mapToStyles(map, (value) => ({
  paddingBottom: value,
}))

export const PaddingBottom: typeof StylesPaddingBottom & {
  default: string
} = {
  ...StylesPaddingBottom,
  default: StylesPaddingBottom['none' as PaddingSizeType],
}

/* Padding-Left */
const StylesPaddingLeft = mapToStyles(map, (value) => ({
  paddingLeft: value,
}))

export const PaddingLeft: typeof StylesPaddingLeft & {
  default: string
} = {
  ...StylesPaddingLeft,
  default: StylesPaddingLeft['none' as PaddingSizeType],
}
