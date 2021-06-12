import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = [
  'normal',
  'stretch',
  'center',
  'start',
  'end',
  'flexStart',
  'flexEnd',
  'baseline',
  'firstBaseline',
  'lastBaseline',
  'safeCenter',
  'unsafeCenter',
  'unset',
]
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, any> = {
  normal: 'normal',
  stretch: 'stretch',
  center: 'center',
  start: 'start',
  end: 'end',
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  baseline: 'baseline',
  firstBaseline: 'first baseline',
  lastBaseline: 'last baseline',
  safeCenter: 'safe center',
  unsafeCenter: 'unsafe center',
  unset: 'unset',
}

const Styles = mapToStyles(map, (value: any) => ({
  alignItems: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['stretch' as Type],
}
