import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = [
  'currentcolor',

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
  /* Global values */
  'inherit',
  'initial',
  'unset',
]
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, any> = {
  currentcolor: 'currentcolor',

  primary: '#0078D4',
  secondary: '#2B88D8',
  light: '#2B88D8',
  lighter: '#DEECF9',
  lighterAlt: '#EFF6FC',
  dark: '#005A9E',
  darker: '#004578',
  darkerAlt: '#106EBE',
  error: '#A80000',
  errorPale: '#FDE7E9',
  success: '#107C10',
  successPale: '#DFF6DD',
  warning: '#D83B01',
  warningPale: '#FED9CC',
  info: '#797775',
  infoPale: '#FFF4CE',
  white: '#FFF',
  grey10: '#FAF9F8',
  grey20: '#F3F2F1',
  grey30: '#EDEBE9',
  grey40: '#E1DFDD',
  grey50: '#D2D0CE',
  grey60: '#C8C6C4',
  grey90: '#A19F9D',
  grey130: '#605E5C',
  grey150: '#3B3A39',
  grey160: '#323130',
  grey190: '#201F1E',
  black: '#000',

  /* Global values */
  inherit: 'inherit',
  initial: 'initial',
  unset: 'unset',
}

const Styles = styleVariants(map, (value: any) => ({
  textDecorationColor: value,
}))

export const Style: typeof Styles & {
  default: string
  initial: string
} = {
  ...Styles,
  default: Styles['currentcolor' as Type],
  initial: Styles['currentcolor' as Type],
}
