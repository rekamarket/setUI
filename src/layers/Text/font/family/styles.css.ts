import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['primary', 'monospace']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, any> = {
  primary: "'Montserrat', Arial, sans-serif",
  monospace: 'monospace',
}

const Styles = styleVariants(map, (value: any) => ({
  fontFamily: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['primary' as Type],
}
