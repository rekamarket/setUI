import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['small', 'medium', 'large']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, number> = {
  small: 480,
  medium: 560,
  large: 1200,
}

const Styles = styleVariants(map, (value) => ({
  width: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['medium' as Type],
}
