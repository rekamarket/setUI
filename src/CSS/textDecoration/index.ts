import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

const Values = ['none', 'underline', 'lineThrough']
const VALUES = tuple(...Values)
export type Type = typeof VALUES[number]

export const map: Record<Type, any> = {
  none: 'none',
  underline: 'underline',
  lineThrough: 'line-through',
}

const Styles = mapToStyles(map, (value: any) => ({
  textDecoration: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['none' as Type],
}
