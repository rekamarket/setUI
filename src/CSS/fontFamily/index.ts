import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

const Values = ['primary', 'secondary', 'tertiary', 'monospace']
const VALUES = tuple(...Values)
type Type = typeof VALUES[number]

const map: Record<Type, any> = {
  primary: "'PT Sans', sans-serif",
  secondary: 'TBD, sans-serif',
  tertiary: 'None, sans-serif',
  monospace: 'monospace',
}

const Styles = mapToStyles(map, (value: any) => ({
  fontFamily: value,
}))

export const FontFamily: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['primary' as Type],
}

export type FontFamilyType = Type
