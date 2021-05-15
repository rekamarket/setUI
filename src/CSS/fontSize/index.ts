import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

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
export type FontSizeType = typeof SIZES[number]

const map: Record<FontSizeType, number> = {
  xxxsmall: 10,
  xxsmall: 12,
  xsmall: 14,
  small: 16,
  medium: 18,
  large: 20,
  xlarge: 28,
  xxlarge: 32,
  xxxlarge: 42,
}

const Styles = mapToStyles(map, (value) => ({
  fontSize: value,
}))

export const FontSize: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['medium' as FontSizeType],
}
