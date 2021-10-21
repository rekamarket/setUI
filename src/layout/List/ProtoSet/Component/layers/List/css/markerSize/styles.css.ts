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
  xxxsmall: 4,
  xxsmall: 8,
  xsmall: 12,
  small: 16,
  medium: 24,
  large: 36,
  xlarge: 48,
  xxlarge: 96,
  xxxlarge: 128,
}

const Styles = styleVariants(map, (value) => ({
  '--marker-size': value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['none' as Type],
}
