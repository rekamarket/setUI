import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['none', 'quote', 'doubleQuote', 'LeftDoubleQuotation']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, string> = {
  none: 'none',
  quote: `"'"`,
  doubleQuote: `"''"`,
  LeftDoubleQuotation: `"“"`, // U+201C
}

const Styles = styleVariants(map, (value) => ({
  '--symbol': value,
  opacity: 1,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['none' as Type],
}
