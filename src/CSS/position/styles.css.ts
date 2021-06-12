import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['static', 'relative', 'absolute', 'sticky', 'fixed']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, string> = {
  static: 'static',
  relative: 'relative',
  absolute: 'absolute',
  sticky: 'sticky',
  fixed: 'fixed',
}

const Styles = mapToStyles(map, (value: any) => ({
  position: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['static' as Type],
}
