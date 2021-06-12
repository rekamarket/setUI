import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = [4, 8, 16, 64]
const VALUES = tuple.numeric(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, any> = {
  4: '0px 0.3px  0.9px rgba(0, 0, 0, 0.1 ), 0px  1.6px  3.6px rgba(0, 0, 0, 0.13)',
  8: '0px 0.6px  1.8px rgba(0, 0, 0, 0.1 ), 0px  3.2px  7.2px rgba(0, 0, 0, 0.13)',
  16: '0px 1.2px  3.6px rgba(0, 0, 0, 0.1 ), 0px  6.4px 14.4px rgba(0, 0, 0, 0.13)',
  64: '0px 4.8px 14.4px rgba(0, 0, 0, 0.18), 0px 25.6px 57.6px rgba(0, 0, 0, 0.22)',
}

const Styles = mapToStyles(map, (value: any) => ({
  boxShadow: value,
}))

export const Style: Record<Type, string> & {
  default: string
} = {
  ...Styles,
  default: Styles[4 as Type],
}
