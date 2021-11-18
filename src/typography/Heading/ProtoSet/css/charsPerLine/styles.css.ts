import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['small', 'medium', 'large']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, number | string> = {
  none: 'none',
  medium: 24,
}

const Styles = styleVariants(map, (value) => ({
  maxWidth: typeof value === 'number' ? `${value}ch` : value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['medium' as Type],
}
