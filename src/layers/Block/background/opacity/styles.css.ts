import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
const VALUES = tuple.numeric(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, string> = {
  0: '0',
  10: '.1',
  20: '.2',
  30: '.3',
  40: '.4',
  50: '.5',
  60: '.6',
  70: '.7',
  80: '.8',
  90: '.9',
  100: '1',
}

// @ts-ignore
const Styles = styleVariants(map, (value) => ({
  '--background-opacity': value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles[100 as Type],
}
