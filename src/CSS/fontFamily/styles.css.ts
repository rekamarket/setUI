import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['primary', 'secondary', 'tertiary', 'monospace']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, any> = {
  primary: "'PT Sans', sans-serif",
  secondary: 'TBD, sans-serif',
  tertiary: 'None, sans-serif',
  monospace: 'monospace',
}

const Styles = mapToStyles(map, (value: any) => ({
  fontFamily: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['primary' as Type],
}
