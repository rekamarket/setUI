import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

const Values = [
  'primary',
  'secondary',
  'light',
  'lighter',
  'lighterAlt',
  'dark',
  'darker',
  'darkerAlt',
  'error',
  'errorPale',
  'success',
  'successPale',
  'warning',
  'warningPale',
  'info',
  'infoPale',
  'white',
  'grey10',
  'grey20',
  'grey30',
  'grey40',
  'grey50',
  'grey60',
  'grey90',
  'grey130',
  'grey150',
  'grey160',
  'grey190',
  'black',
]
const VALUES = tuple(...Values)
export type InputThemeType = typeof VALUES[number]

type Keys = 'hue' | 'saturation' | 'lightness' | 'alpha'
type Values = string | number
type Value = {
  [key in Keys]: Values
}

const map: Record<InputThemeType, Record<Keys, Values>> = {
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
  light: {
    hue: 206.7,
    saturation: '67.2%',
    lightness: '86.9%',
    alpha: 1,
  },
  lighter: {
    hue: 208.9,
    saturation: '69.2%',
    lightness: '92.4%',
    alpha: 1,
  },
  lighterAlt: {
    hue: 207.7,
    saturation: '68.4%',
    lightness: '96.3%',
    alpha: 1,
  },
  dark: {
    hue: 205.8,
    saturation: '100%',
    lightness: '31%',
    alpha: 1,
  },
  darker: {
    hue: 205.5,
    saturation: '100%',
    lightness: '23.5%',
    alpha: 1,
  },
  darkerAlt: {
    hue: 207.6,
    saturation: '84.5%',
    lightness: '40.4%',
    alpha: 1,
  },
  error: {
    hue: 0,
    saturation: '100%',
    lightness: '32.9%',
    alpha: 1,
  },
  errorPale: {
    hue: 354.5,
    saturation: '84.6%',
    lightness: '94.9%',
    alpha: 1,
  },
  success: {
    hue: 120,
    saturation: '77.1%',
    lightness: '27.5%',
    alpha: 1,
  },
  successPale: {
    hue: 115.2,
    saturation: '58.1%',
    lightness: '91.6%',
    alpha: 1,
  },
  warning: {
    hue: 16.2,
    saturation: '99.1%',
    lightness: '42.5%',
    alpha: 1,
  },
  warningPale: {
    hue: 15.6,
    saturation: '96.2%',
    lightness: '89.8%',
    alpha: 1,
  },
  info: {
    hue: 30,
    saturation: '1.7%',
    lightness: '46.7%',
    alpha: 1,
  },
  infoPale: {
    hue: 46.5,
    saturation: '100%',
    lightness: '90.4%',
    alpha: 1,
  },
  white: {
    hue: 0,
    saturation: '0%',
    lightness: '100%',
    alpha: 1,
  },
  grey10: {
    hue: 30,
    saturation: '16.7%',
    lightness: '97.6%',
    alpha: 1,
  },
  grey20: {
    hue: 30,
    saturation: '7.7%',
    lightness: '94.9%',
    alpha: 1,
  },
  grey30: {
    hue: 30,
    saturation: '10%',
    lightness: '92.2%',
    alpha: 1,
  },
  grey40: {
    hue: 30,
    saturation: '6.2%',
    lightness: '87.5%',
    alpha: 1,
  },
  grey50: {
    hue: 30,
    saturation: '4.3%',
    lightness: '81.6%',
    alpha: 1,
  },
  grey60: {
    hue: 30,
    saturation: '3.5%',
    lightness: '77.6%',
    alpha: 1,
  },
  grey90: {
    hue: 30,
    saturation: '2.1%',
    lightness: '62.4%',
    alpha: 1,
  },
  grey130: {
    hue: 30,
    saturation: '2.1%',
    lightness: '36.9%',
    alpha: 1,
  },
  grey150: {
    hue: 30,
    saturation: '1.7%',
    lightness: '22.7%',
    alpha: 1,
  },
  grey160: {
    hue: 30,
    saturation: '2%',
    lightness: '19.2%',
    alpha: 1,
  },
  grey190: {
    hue: 30,
    saturation: '3.2%',
    lightness: '12.2%',
    alpha: 1,
  },
  black: {
    hue: 0,
    saturation: '0%',
    lightness: '0%',
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

export const InputTheme: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['primary' as InputThemeType],
}
