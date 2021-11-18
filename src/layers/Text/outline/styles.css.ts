import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['none', 'transparent', 'primary', 'black', 'white']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, any> = {
  none: 'none',
  transparent: 'transparent',
  primary: '#0078D4',
  black: '#000000',
  white: '#FFFFFF',
}

const Styles = styleVariants(map, (value: any) => ({
  backgroundColor: value,
}))

export const Style: typeof Styles & {
  default: string
  initial: string
} = {
  ...Styles,
  default: Styles['none' as Type],
  initial: Styles['inherit' as Type],
}
