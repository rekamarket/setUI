import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

const Values = ['static', 'relative', 'absolute', 'sticky', 'fixed']
const VALUES = tuple(...Values)
type Type = typeof VALUES[number]

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

export const Position: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['static' as Type],
}

export type PositionType = Type
