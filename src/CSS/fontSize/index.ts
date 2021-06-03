import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

const Sizes = [
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
]
const SIZES = tuple(...Sizes)
export type Type = typeof SIZES[number]

export const map: Record<Type, number> = {
  // we use this value in `layout` components - to force developer to wrap strings in `typography` components
  LAYOUT: 0,

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

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['medium' as Type],
}
