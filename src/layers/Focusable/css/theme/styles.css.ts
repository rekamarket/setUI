import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['primary', 'secondary', 'critical', 'white', 'black']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

type Properties = 'hue' | 'saturation' | 'lightness' | 'alpha' | 'textColor'
type Values = string | number
type Value = {
  [key in Properties]: Values
}

export const map: Record<Type, Record<Properties, Values>> = {
  primary: {
    hue: 218,
    saturation: '100%',
    lightness: '40%',
    alpha: 1,
    textColor: '#fff',
  },
  secondary: {
    hue: 0,
    saturation: '0%',
    lightness: '16.1%',
    alpha: 1,
    textColor: '#F8F8F8',
  },
  critical: {
    hue: 352.3,
    saturation: '79.5%',
    lightness: '59.8%',
    alpha: 1,
    textColor: '#F8F8F8',
  },
  white: {
    hue: 0,
    saturation: '0%',
    lightness: '100%',
    alpha: 1,
    textColor: '#EA475C',
  },
  black: {
    hue: 0,
    saturation: '0%',
    lightness: '16.1%',
    alpha: 1,
    textColor: '#F8F8F8',
  },
}

const Styles = styleVariants(map, (value: any) => ({
  '--h': String(value.hue),
  '--s': String(value.saturation),
  '--l': String(value.lightness),
  '--a': String(value.alpha),
  '--color': 'hsl(var(--h) var(--s) var(--l) / var(--a))',
  opacity: 1, // so this object will count as `StyleRule`
  '--text-color': String(value.textColor),
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['primary' as Type],
}
