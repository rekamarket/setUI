import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['primary', 'secondary', 'black', 'white']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, Record<string, string>> = {
  primary: {
    color: 'primary',
    '--overlay-color': '#2B88D8',
  },
  secondary: {
    color: 'secondary',
    '--overlay-color': '#0078D4',
  },
  black: {
    color: 'black',
    '--overlay-color': '#FFFFFF',
  },
  white: {
    color: 'white',
    '--overlay-color': '#000000',
  },
}

const Styles = styleVariants(map, (value: any) => ({
  '--overlay-color': value['--overlay-color'],
  opacity: 1,
}))

export const Style: typeof Styles & {
  default: string
  initial: string
} = {
  ...Styles,
  default: Styles['primary' as Type],
  initial: Styles['inherit' as Type],
}
