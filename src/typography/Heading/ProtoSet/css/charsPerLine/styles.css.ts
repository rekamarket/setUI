import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['small', 'medium', 'large']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, number> = {
  small: 12,
  medium: 24,
  large: 48,
}

const Styles = styleVariants(map, (value) => ({
  maxWidth: `${value}ch`,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['medium' as Type],
}
