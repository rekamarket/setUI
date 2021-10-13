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

const Styles = styleVariants(map, (value) => ({
  '--symbol-gap': value,
  opacity: 1,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['none' as Type],
}
