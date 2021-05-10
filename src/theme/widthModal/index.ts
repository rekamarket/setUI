import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from '../_utils'

const Sizes = ['small', 'medium', 'large']
const SIZES = tuple(...Sizes)
export type WidthModalType = typeof SIZES[number]

const map: Record<WidthModalType, number> = {
  small: 480,
  medium: 560,
  large: 1200,
}

const Styles = mapToStyles(map, (value) => ({
  width: value,
}))

export const WidthModal: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['medium' as WidthModalType],
}
