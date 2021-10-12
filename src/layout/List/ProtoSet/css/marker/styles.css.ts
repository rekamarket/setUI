import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['none', 'thin', 'light', 'medium', 'bold']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, number> = {
  none: 0,
  thin: 1,
  light: 2,
  medium: 3,
  bold: 4,
}

const Styles = styleVariants(map, (value) => ({
  '--divider-weight': value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['none' as Type],
}
