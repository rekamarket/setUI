import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

const Values = ['primary', 'secondary', 'error', 'success', 'warning', 'info']
const VALUES = tuple(...Values)
export type Type = typeof VALUES[number]

type Keys = 'hue' | 'saturation' | 'lightness' | 'alpha'
type Values = string | number
type Value = {
  [key in Keys]: Values
}

const map: Record<Type, Record<Keys, Values>> = {
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
  error: {
    hue: 0,
    saturation: '100%',
    lightness: '32.9%',
    alpha: 1,
  },
  success: {
    hue: 120,
    saturation: '77.1%',
    lightness: '27.5%',
    alpha: 1,
  },
  warning: {
    hue: 16.2,
    saturation: '99.1%',
    lightness: '42.5%',
    alpha: 1,
  },
  info: {
    hue: 30,
    saturation: '1.7%',
    lightness: '46.7%',
    alpha: 1,
  },
}

const Styles = mapToStyles(map, (value: any) => ({
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
