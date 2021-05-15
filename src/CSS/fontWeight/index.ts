import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from '../_utils'

const Sizes = [
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
export type FontWeightType = typeof SIZES[number]

const map: Record<FontWeightType, number> = {
  thin: 100,
  extraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
}

const Styles = mapToStyles(map, (value) => ({
  fontWeight: value,
}))

export const FontWeight: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['medium' as FontWeightType],
}
