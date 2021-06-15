import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['none', 'small', 'medium', 'large']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, number | string> = {
  none: 0,
  small: 4,
  medium: 8,
  large: 12,
  pill: 9999,
  circle: '50%',
}

const Styles = styleVariants(map, (value) => ({
  borderRadius: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['none' as Type],
}
