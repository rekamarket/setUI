import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['regular', 'bold']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, number> = {
  regular: 400,
  bold: 700,
}

const Styles = styleVariants(map, (value) => ({
  fontWeight: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['bold' as Type],
}
