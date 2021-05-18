import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

const Sizes = ['small', 'medium', 'large']
const SIZES = tuple(...Sizes)
export type Type = typeof SIZES[number]

const map: Record<Type, number> = {
  small: 480,
  medium: 560,
  large: 1200,
}

const Styles = mapToStyles(map, (value) => ({
  width: value,
}))

export const MaxWidth: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['medium' as Type],
}
