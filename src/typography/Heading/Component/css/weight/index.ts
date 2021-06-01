import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

const Sizes = [
  'normal',
  'bold',
]
const SIZES = tuple(...Sizes)
export type Type = typeof SIZES[number]

const map: Record<Type, number> = {
  normal: 400,
  bold: 700,
}

const Styles = mapToStyles(map, (value) => ({
  fontWeight: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['bold' as Type],
}
