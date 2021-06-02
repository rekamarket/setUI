import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

const Sizes = ['none', 'thin', 'light', 'medium', 'bold']
const SIZES = tuple(...Sizes)
export type Type = typeof SIZES[number]

const map: Record<Type, number> = {
  none: 0,
  thin: 1,
  light: 2,
  medium: 3,
  bold: 4,
}

const Styles = mapToStyles(map, (value) => ({
  borderStyle: 'solid',
  borderWidth: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['none' as Type],
}
