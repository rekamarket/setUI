import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = [
  'currentColor',

  'primary',
  'secondary',
  'black',
  'white',

  /* Global values */
  'inherit',
  'initial',
  'unset',
]
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, any> = {
  currentColor: 'currentColor',

  primary: '#0078D4',
  secondary: '#2B88D8',
  black: '#000000',
  white: '#FFFFFF',

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
  default: Styles['currentColor' as Type],
  initial: Styles['currentColor' as Type],
}
