import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

const Sizes = ['none', 'small', 'medium', 'large']
const SIZES = tuple(...Sizes)
export type Type = typeof SIZES[number]

export const map: Record<Type, number> = {
  none: 0,
  small: 4,
  medium: 8,
  large: 12,
}

const Styles = mapToStyles(map, (value) => ({
  borderRadius: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['none' as Type],
}
