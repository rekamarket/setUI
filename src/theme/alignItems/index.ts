import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from '../_utils'

const Values = [
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
]
const VALUES = tuple(...Values)
type Type = typeof VALUES[number]

const map: Record<Type, any> = {
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
}

const Styles = mapToStyles(map, (value: any) => ({
  alignItems: value,
}))

export const AlignItems: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['flexStart' as Type],
}

export type AlignItemsType = Type
