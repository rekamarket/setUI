import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['primary', 'secondary', 'white', 'black']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, any> = {
  primary: '#0078D4',
  secondary: '#2B88D8',
  white: '#FFF',
  black: '#000',
}

const Styles = styleVariants(map, (value: any) => ({
  borderColor: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['primary' as Type],
}
