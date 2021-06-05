import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

const Sizes = [
  'thin',
  'extraLight',
  'light',
  'normal',
  'medium',
  'semiBold',
  'bold',
  'extraBold',
  'black',

  /* Global values */
  'inherit',
  'initial',
  'unset',
]
const SIZES = tuple(...Sizes)
export type Type = typeof SIZES[number]

export const map: Record<Type, number> = {
  thin: 100,
  extraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,

  inherit: 'inherit',
  initial: 'initial',
  unset: 'unset',
}

const Styles = mapToStyles(map, (value) => ({
  fontWeight: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['medium' as Type],
  initial: Styles['normal' as Type],
}
