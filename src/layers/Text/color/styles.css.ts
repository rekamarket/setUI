import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['primary', 'secondary', 'black', 'white']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, any> = {
  primary: '#0078D4',
  secondary: '#2B88D8',
  black: '#000000',
  white: '#FFFFFF',
}

const Styles = styleVariants(map, (value: any) => ({
  color: value,
}))

export const Style: typeof Styles & {
  default: string
  initial: string
} = {
  ...Styles,
  default: Styles['primary' as Type],
  initial: Styles['inherit' as Type],
}
