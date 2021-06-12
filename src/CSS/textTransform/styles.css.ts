import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = [
  'none',
  'uppercase',
  'lowercase',
  'capitalize',
  'fullWidth',
  'fullSizeKana',
]
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, any> = {
  none: 'none',
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
  fullWidth: 'full-width',
  fullSizeKana: 'full-size-kana',
}

const Styles = mapToStyles(map, (value: any) => ({
  textTransform: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['none' as Type],
}
