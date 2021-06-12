import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = [
  /* Single keyword */
  'auto',
  'fromFont',

  /* pixels */
  'thin',
  'light',
  'medium',
  'bold',

  /* percentage */
  10,
  20,
  30,
  40,
  50,
  60,
  70,
  80,
  90,
  100,

  /* Global values */
  'inherit',
  'initial',
  'unset',
]
const VALUES = tuple.mixed(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, any> = {
  /* Single keyword */
  auto: 'auto',
  fromFont: 'from-font',

  /* pixels */
  thin: 1,
  light: 2,
  medium: 3,
  bold: 4,

  /* percentage */
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  60: '60',
  70: '70',
  80: '80',
  90: '90',
  100: '100',

  /* Global values */
  inherit: 'inherit',
  initial: 'initial',
  unset: 'unset',
}

const Styles = mapToStyles(map, (value: any) => ({
  textDecorationThickness: value,
}))

export const Style: typeof Styles & {
  default: string
  initial: string
} = {
  ...Styles,
  default: Styles['thin' as Type],
  initial: Styles['auto' as Type],
}
