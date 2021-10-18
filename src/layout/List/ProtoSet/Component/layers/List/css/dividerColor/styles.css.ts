import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['primary', 'secondary', 'black', 'white']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

type Properties = 'hue' | 'saturation' | 'lightness'
type Values = string | number
type Value = {
  [key in Properties]: Values
}

export const map: Record<Type, Record<Properties, Values>> = {
  primary: {
    hue: 206,
    saturation: '100%',
    lightness: '41.6%',
  },
  secondary: {
    hue: 207.7,
    saturation: '68.9%',
    lightness: '50.8%',
  },
  white: {
    hue: 0,
    saturation: '0%',
    lightness: '100%',
  },
  black: {
    hue: 0,
    saturation: '0%',
    lightness: '0%',
  },
}

const Styles = styleVariants(map, (value: any) => ({
  '--divider-color': `hsl(${value.hue} ${value.saturation} ${value.lightness})`,
}))

export const Style: typeof Styles & {
  default: string
  initial: string
} = {
  ...Styles,
  default: Styles['primary' as Type],
  initial: Styles['inherit' as Type],
}
