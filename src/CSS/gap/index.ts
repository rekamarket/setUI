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
export type GapType = typeof SIZES[number]

const map: Record<GapType, number> = {
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

const StylesGap = mapToStyles(map, (value) => ({
  gap: value,
}))

export const Gap: typeof StylesGap & {
  default: string
} = {
  ...StylesGap,
  default: StylesGap['none' as GapType],
}
