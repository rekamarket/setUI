import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = [
  'thin',
  'extraLight',
  'light',
  'normal',
  'medium',
  'semiBold',
  'bold',
  'extraBold',
  'heavy',

  /* Keyword values relative to the parent */
  'lighter',
  'bolder',

  /* Global values */
  'inherit',
  'initial',
  'unset',
]
const SIZES = tuple(...Keys)
export type Type = typeof SIZES[number]

export const map: Record<Type, number | string> = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  heavy: 900,

  /* Keyword values relative to the parent */
  lighter: 'lighter',
  bolder: 'bolder',

  /* Keyword values relative to the parent */
  inherit: 'inherit',
  initial: 'initial',
  unset: 'unset',
}

const Styles = styleVariants(map, (value: any) => ({
  fontWeight: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['regular' as Type],
  initial: Styles['regular' as Type],
}
