import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from '../_utils'

const Values = ['nowrap', 'wrap', 'wrap-reverse']
const VALUES = tuple(...Values)
type Type = typeof VALUES[number]

const map: Record<Type, any> = {
  nowrap: 'nowrap',
  wrap: 'wrap',
  wrapReverse: 'wrap-reverse',
}

const Styles = mapToStyles(map, (value: any) => ({
  flexWrap: value,
}))

export const FlexWrap: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['nowrap' as Type],
}

export type FlexWrapType = Type
