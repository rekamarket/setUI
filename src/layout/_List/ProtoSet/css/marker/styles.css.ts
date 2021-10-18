import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['none', 'bullet', 'circle']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, string> = {
  none: 'none',
  bullet: `"•"`, // U+2022 - Bullet
  circle: `"●"`, // U+25CF - Black Circle
}

const Styles = styleVariants(map, (value) => ({
  listStyleType: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['none' as Type],
}
