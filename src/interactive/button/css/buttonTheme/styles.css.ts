import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['primary', 'secondary', 'white', 'black']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

type Properties = 'hue' | 'saturation' | 'lightness' | 'alpha'
type Values = string | number
type Value = {
  [key in Properties]: Values
}

export const map: Record<Type, Record<Properties, Values>> = {
  primary: {
    hue: 206,
    saturation: '100%',
    lightness: '41.6%',
    alpha: 1,
  },
  secondary: {
    hue: 207.7,
    saturation: '68.9%',
    lightness: '50.8%',
    alpha: 1,
  },
  white: {
    hue: 0,
    saturation: '0%',
    lightness: '100%',
    alpha: 1,
  },
  black: {
    hue: 0,
    saturation: '0%',
    lightness: '0%',
    alpha: 1,
  },
}

const Styles = styleVariants(map, (value: any) => ({
  '--h': String(value.hue),
  '--s': String(value.saturation),
  '--l': String(value.lightness),
  '--a': String(value.alpha),
  '--color': 'hsl(var(--h) var(--s) var(--l) / var(--a))',
  opacity: 1, // so this object will count as `StyleRule`
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['primary' as Type],
}
